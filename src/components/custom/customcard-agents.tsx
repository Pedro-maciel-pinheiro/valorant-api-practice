"use client";
import React from "react";
import { AgentsDataProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInSlider } from "@/utils/motion";
import { ValorantFont } from "@/app/fonts";

export const CustomCardAgents = ({ agents, role }: AgentsDataProps) => {
  return (
    <section className="flex h-auto w-full flex-col items-center justify-center bg-slate-900">
      <div className="h-full w-full max-w-[90%] xl:max-w-[1300px]">
        <div className="flex h-96 w-full items-center">
          <h2 className={`text-7xl text-white ${ValorantFont.className}`}>
            {role}
            {"-"}
          </h2>
          <h1 className={`text-7xl text-white ${ValorantFont.className}`}>
            AGENTS
          </h1>
        </div>
        <ul className="mb-36 grid h-full w-full gap-4 overflow-hidden p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {agents.map((item, index) => (
            <motion.li
              key={item.developerName}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              variants={fadeInSlider}
              custom={index}
              className="flex h-[580px] w-full max-w-[400px] items-center justify-center rounded-md border-2 bg-gray-600"
            >
              <Link
                href={{
                  pathname: "/agent-info",
                  search: `?name=${item.displayName}`,
                }}
                className="flex h-full w-full flex-col items-center justify-between overflow-hidden"
              >
                <figure className="flex items-center justify-center">
                  <Image
                    src={item.fullPortraitV2}
                    alt={item.displayName}
                    width={550}
                    height={550}
                    className="mt-16 scale-150 transition-all duration-300 hover:-translate-y-1"
                  />
                </figure>
                <div className="flex h-12 w-full items-center justify-center bg-white text-3xl uppercase">
                  <h3> {item.displayName}</h3>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
