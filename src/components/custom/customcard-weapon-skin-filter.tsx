"use client"
import React from "react";

import {
  SearchParamsWeaponSkinProps,
  WeaponSkin,
} from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ValorantFont } from "@/app/fonts";
import { motion } from "framer-motion";
import { fadeInSlider } from "@/utils/motion";

const meleeNames = [
  "Blade",
  "Catrina",
  "Crowbar",
  "Knife",
  "Equilibrium",
  "Melee",
];

export default function CustomCardWeaponSkinFilter({
  searchParams,
  weaponSkinData,
}: SearchParamsWeaponSkinProps) {
  const weapon_name = searchParams.name;

  if (!weapon_name) {
    return null;
  }

  const isMelee = weapon_name === "Melee";

  // Filter skins based on the weapon name or if it matches any of the melee names
  const weapon_skin = isMelee
    ? weaponSkinData.filter(
        (weaponSkin: WeaponSkin) =>
          weaponSkin.displayIcon &&
          !weaponSkin.displayName.includes("Melee") && //Exclude "Standard/Melee" items
          meleeNames.some((name) => weaponSkin.displayName.includes(name)),
      )
    : weaponSkinData.filter(
        (weaponSkin: WeaponSkin) =>
          weaponSkin.displayIcon && // Ensure the icon exists
          !weaponSkin.displayName.includes("Standard") && // Exclude "Standard" items
          weaponSkin.displayName.includes(weapon_name), // Include skins matching the weapon name
      );

  if (weapon_skin.length === 0) {
    return (
      <div className="flex items-center justify-center text-7xl">
        Weapons not Found
      </div>
    );
  }

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-900 text-white">
      <div className="flex max-w-[90%] flex-col xl:max-w-[1440px]">
        <h1
          className={`mb-20 mt-28 text-2xl lg:text-5xl ${ValorantFont.className}`}
        >
          Select your favorite skin !
        </h1>
        <ul className="grid h-full w-full gap-4 md:grid-cols-2 lg:grid-cols-3 mb-96 ">
          {weapon_skin.map((item: WeaponSkin) => (
            <motion.li
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              variants={fadeInSlider}
              key={item.uuid}
            >
              <Link
                key={item.uuid}
                href={{
                  pathname: "weapon-skin",
                  query: { name: item.displayName },
                }}
              >
                <div className="h-52 gap-2 rounded-lg border-2 p-2">
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4
                   rounded-lg border bg-foreground p-2 ">
                    <Image
                      src={item.displayIcon}
                      alt={item.displayName}
                      width={350}
                      height={350}
                      className="object-contain w-96 max-h-[80%]"
                    />
                    <h2>{item.displayName}</h2>
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
