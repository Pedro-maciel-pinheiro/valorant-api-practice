"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ValorantFont } from "@/app/fonts";
import { WeaponSelectorProps } from "@/types";
import { motion } from "framer-motion";
import { fadeInSlider, slideInFromLeft } from "@/utils/motion";

export const CustomWeaponSelector = ({ weaponData }: WeaponSelectorProps) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      className="flex min-h-screen w-full flex-col items-center justify-center"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="mb-20 mt-28 w-full text-white"
      >
        <h1
          className={`${ValorantFont.className} text-2xl md:text-5xl lg:text-6xl`}
        >
          Find your Weapon
        </h1>
        <p className="mx-1">
          Discover the perfect weapon for your playstyle and explore all
          available skins!
        </p>
      </motion.div>
      <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-2 lg:grid-cols-3 mb-20">
        {weaponData.map((item, index) => (
          <motion.div
            variants={fadeInSlider}
            custom={index}
            key={item.uuid}
            className="rounded-lg border-2 p-1 shadow-xl"
          >
            <Link
              href={{
                pathname: "/weapons-filter",
                query: { name: item.displayName },
              }}
              className="grid h-72 content-center gap-2 rounded-lg border-2 bg-gray-200"
            >
              <div className="h-36 p-1">
                <Image
                  src={item.displayIcon}
                  alt={item.displayName}
                  width={300}
                  height={300}
                  objectFit="fit"
                  className={`mx-auto w-full object-contain ${[7, 8, 9, 10].includes(index) ? "max-w-56" : "max-w-96"}`}
                />
              </div>
              <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                <div className="text-lg font-semibold">
                  {item.shopData ? (
                    <ul className="flex w-64 flex-col">
                      <li className="flex items-center justify-between">
                        <p>Name</p>
                        <p>{item.displayName}</p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p>Category</p> <p>{item.shopData.category}</p>
                      </li>
                      <li className="flex items-center justify-between">
                        <p>Price</p>
                        <p>${item.shopData.cost}</p>
                      </li>
                    </ul>
                  ) : null}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
