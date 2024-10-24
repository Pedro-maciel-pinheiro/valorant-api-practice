"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { link_path } from "@/constant/link-path";
import { Turn as Hamburger } from "hamburger-react";
import Link from "next/link";
import { fadeInSlider } from "@/utils/motion";
import { ValorantFont } from "@/app/fonts";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const animateDelay = 0.5;
  return (
    <>
      <motion.nav className="sticky top-0 z-40 hidden h-16 w-full items-center bg-black md:flex">
        <div className="absolute mx-4 flex items-center justify-start">
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="35"
              viewBox="0 0 100 100"
              width="35"
            >
              <path
                d="M99.25 48.66V10.28c0-.59-.75-.86-1.12-.39l-41.92 52.4a.627.627 0 00.49 1.02h30.29c.82 0 1.59-.37 2.1-1.01l9.57-11.96c.38-.48.59-1.07.59-1.68zM1.17 50.34L32.66 89.7c.51.64 1.28 1.01 2.1 1.01h30.29c.53 0 .82-.61.49-1.02L1.7 9.89c-.37-.46-1.12-.2-1.12.39v38.38c0 .61.21 1.2.59 1.68z"
                fill="#fff"
              ></path>
            </svg>
          </Link>
        </div>
        <ul className="mx-auto flex h-12 w-96 items-center justify-around text-white">
          {link_path.map((link, index) => (
            <motion.li
              key={link.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * animateDelay,
                damping: 20,
                stiffness: 60,
                duration: 0.2,
                mass: 0.5,
                type: "spring",
              }}
            >
              <Link
                className="text-xl uppercase hover:underline hover:underline-offset-4"
                href={link.href}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      <nav className="relative block md:hidden">
        <button
          className="absolute z-40 text-white"
          onClick={() => setMobileNav((prev) => !prev)}
        >
          <Hamburger toggled={mobileNav} />
        </button>
        <div
          className={`fixed z-30 flex w-full items-center justify-start overflow-hidden border-b-2 bg-slate-900 transition-all duration-1000 ${mobileNav ? "h-64" : "h-12"}`}
        >
          {mobileNav && (
            <motion.ul
              className={`mx-2 grid ${ValorantFont.className} items-center justify-center gap-2 text-lg font-semibold text-white `}
            >
              {link_path.map((link, index) => (
                <motion.li
                  key={link.title}
                  initial="hidden"
                  whileInView={"visible"}
                  variants={fadeInSlider}
                  custom={index}
                  className="w-full border-b-2 "
                  onClick={() => setMobileNav(false)}
                >
                  <Link key={link.title} href={link.href}>
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
