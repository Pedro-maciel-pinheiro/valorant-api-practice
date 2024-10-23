"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
import Link from "next/link";

export const HomeVideo = () => {
  return (
    <section className="flex h-auto w-full items-center ">
      <div className="relative flex items-center justify-center">
        <span className="absolute h-full w-full bg-black/50" />
        <video
          src="/video/valorant.mp4"
          autoPlay
          loop
          muted
          className="h-[800px] w-screen object-cover"
        />

        <motion.div
          initial="hidden"
          whileInView={"visible"}
          variants={slideInFromBottom(0.2)}
          viewport={{ once: true }}
          className="absolute z-10 flex max-w-[80%] flex-col items-center justify-center gap-20"
        >
          <Image
            src={"/img/valorant-logo.webp"}
            alt="Valorant logo"
            width={420}
            height={420}
          />

          <Link href={"#agents"} className="rounded-md border p-1">
            <button className="h-12 w-40 rounded-md bg-foreground font-semibold text-white transition-all duration-700 hover:border-black hover:bg-white hover:text-black">
              EXPLORE
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
