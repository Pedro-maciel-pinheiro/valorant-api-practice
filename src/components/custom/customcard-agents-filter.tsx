"use client";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { link_agents } from "@/constant/link-agents";
import { ValorantFont } from "@/app/fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInSlider } from "@/utils/motion";

export const CustomCardAgentsFilter = () => {
  const [slidePerView, setSlidePerView] = useState<number>(3);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const updateWidthSize = () => {
      const widthResize = window.innerWidth;

      if (widthResize < 1100) {
        setSlidePerView(1);
        setProgress((1 / link_agents.length) * 100);
      } else {
        setSlidePerView(3);
        setProgress((3 / link_agents.length) * 100);
      }
    };
    updateWidthSize();
    window.addEventListener("resize", updateWidthSize);
    return () => window.removeEventListener("resize", updateWidthSize);
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    const totalSlides = link_agents.length;
    const visibleSlides = Math.min(slidePerView, totalSlides);
    const currentIndex = swiper.activeIndex;

    const progressPercent =
      ((currentIndex + visibleSlides) / totalSlides) * 100;
    setProgress(progressPercent);
  };

  return (
    <>
      <div className={ValorantFont.className}>
        <h2 className="flex h-36 items-center justify-center text-4xl text-white md:h-64 md:text-6xl">
          FIND YOUR ROLE
        </h2>
      </div>

      <section className="h-auto overflow-hidden lg:mx-auto xl:max-w-[1500px]">
        <Swiper
          slidesPerView={slidePerView}
          spaceBetween={30}
          speed={1200}
          grabCursor={true}
          className={`max-w-[90%]`}
          onSlideChange={handleSlideChange}
        >
          {link_agents.map((link, index) => (
            <SwiperSlide className="h-full w-full px-2 py-2" key={link.title}>
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

        <div className="mx-auto mt-4 h-2 w-full max-w-[90%]
         overflow-hidden rounded-lg bg-gray-300">
          <motion.div
            initial={{ width: `${progress}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full bg-foreground"
          />
        </div>
      </section>
    </>
  );
};
