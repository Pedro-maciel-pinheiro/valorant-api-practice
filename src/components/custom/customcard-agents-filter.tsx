"use client";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { link_agents } from "@/constant/link-agents";
import { ValorantFont } from "@/app/fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInSlider } from "@/utils/motion";

export const CustomCardAgentsFilter = () => {
  const [slidePerView, setSlidePerView] = useState<number>(3);
  useEffect(() => {
    const updateWidthSize = () => {
      const widthResize = window.innerWidth;

      if (widthResize < 1100) {
        setSlidePerView(1);
      } else {
        setSlidePerView(3);
      }
    };
    updateWidthSize();
    window.addEventListener("resize", updateWidthSize);
    return () => window.removeEventListener("resize", updateWidthSize);
  }, []);
  return (
    <>
      <div className={ValorantFont.className}>
        <h2 className="flex h-36 items-center justify-center text-4xl text-white md:h-64 md:text-6xl">
          FIND YOUR ROLE
        </h2>
      </div>

      <section className="relative h-auto max-w-[95%] overflow-hidden px-8 py-8 xl:max-w-[1500px]">
        <Swiper
          slidesPerView={slidePerView}
          spaceBetween={30}
          speed={1200}
          grabCursor={true}
          
          className={`h-full w-full max-w-[500px] lg:max-w-full`}
        >
          {link_agents.map((link, index) => (
            <SwiperSlide className="h-full w-full" key={link.title}>
              <Link href={link.href}>
                <motion.ul
                  initial="hidden"
                  whileInView={"visible"}
                  variants={fadeInSlider}
                  viewport={{ once: true }}
                  custom={index}
                  className="flex cursor-grab flex-col items-center active:cursor-grabbing"
                >
                  <li draggable={false}>
                    <Image
                      src={link.image}
                      alt={link.title}
                      width={450}
                      height={650}
                      className="rounded-lg"
                    />
                  </li>
                  <li
                    draggable={false}
                    className="w-fit max-w-[400px] flex-col gap-2 text-center font-medium text-white"
                  >
                    <h3
                      className={`${ValorantFont.className} mb-2 mt-2 text-2xl font-semibold lg:text-4xl`}
                    >
                      {link.title}
                    </h3>
                    <p className="">{link.subtitle}</p>
                  </li>
                </motion.ul>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
