"use client";
import React from "react";
import { CharacterDataProps } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInSlider,
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { agents_bg_color } from "@/constant/agents-bg-color";

interface AgentInfoProps {
  agentInfo: CharacterDataProps;
}

const findAgentInfo = (displayName: string) => {
  return agents_bg_color.find((agent) => agent.name === displayName);
};

export const CustomCardAgentInfo = ({ agentInfo }: AgentInfoProps) => {
  const agentBackgroundColorData = findAgentInfo(agentInfo.displayName);
  const backgroundColor = agentBackgroundColorData?.bgColor || "#FF4655";

  return (
    <>
      <motion.section
        style={{ backgroundColor }}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="flex min-h-screen flex-col items-center justify-center"
      >
        <div className="relative mt-36 grid h-full w-full gap-8 md:gap-0
         max-w-[90%] items-center overflow-hidden md:flex-row  mb-10 md:mb-0
         lg:mt-0 lg:grid-cols-2 xl:max-w-[1340px]">
          <motion.ul
            variants={slideInFromLeft(0.5)}
            className="order-last lg:order-first mx-auto overflow-hidden mt-5 md:mt-0
             rounded-lg border-2 bg-slate-900 p-4 text-white md:max-w-[600px]"
          >
            <li className="text-5xl font-semibold uppercase">
              <h1>{agentInfo.displayName}</h1>
            </li>
            <li className="text-xl font-medium">
              <p>{agentInfo.description}</p>
              
            </li>

            <motion.li
              variants={slideInFromLeft(1)}
              className="mt-5 flex w-36 rounded-lg border-2 p-1"
            >
              <div className="flex w-36 flex-col items-center justify-center gap-1 rounded-lg border-2 bg-slate-900 p-1 font-semibold">
                <Image
                  src={agentInfo.role.displayIcon}
                  alt={agentInfo.role.displayName}
                  width={40}
                  height={40}
                />
                <h3>{"Role"}</h3>
                <h4 className="uppercase text-red-500">
                  {agentInfo.role.displayName}
                </h4>
              </div>
            </motion.li>
          </motion.ul>

          <figure className="relative order-first lg:order-last h-full w-full">
            <motion.span
              variants={slideInFromTop(1)}
              className="flex items-center justify-center md:justify-end"
            >
              <Image
                src={agentInfo.fullPortraitV2}
                alt={agentInfo.displayName}
                width={850}
                height={850}
                className="absolute z-10 mt-28 scale-150 md:scale-125"
              />

              <motion.span>
                <Image
                  src={agentInfo.background}
                  alt={agentInfo.displayName}
                  width={650}
                  height={650}
                  className="-z-0 scale-125 md:scale-110"
                />
              </motion.span>
            </motion.span>
          </figure>
        </div>
      </motion.section>

      <section className="flex min-h-screen items-center justify-center border-t-2 bg-slate-900">
        <ul className="mb-20 mt-20 grid max-w-[90%] content-center gap-4 md:mb-0 md:mt-0 lg:grid-cols-2 xl:max-w-[1340px]">
          {agentInfo.abilities &&
            agentInfo.abilities.map(
              (skill, index) =>
                skill &&
                skill.displayIcon &&
                skill.displayName &&
                skill.description ? (
                  <motion.li
                    key={index}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    variants={fadeInSlider}
                    custom={index}
                    className="flex flex-col gap-4 rounded-lg border-2 p-2 font-medium"
                  >
                    <div className="h-full w-full rounded-lg border-2 p-2">
                      <div className="mb-2 flex flex-col items-center justify-center gap-1 text-white">
                        <Image
                          src={skill.displayIcon}
                          alt={skill.displayName}
                          width={60}
                          height={60}
                        />
                        <h3 className="text-xl font-semibold uppercase">
                          {skill.displayName}
                        </h3>
                      </div>
                      <div>
                        <p className="text-lg font-medium text-white">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ) : null, // If the skill data is missing, we skip rendering this item.
            )}
        </ul>
      </section>
    </>
  );
};
