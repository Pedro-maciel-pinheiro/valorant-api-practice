import React from "react";
import Image from "next/image";
import { ValorantFont } from "@/app/fonts";
import Link from "next/link";



export const WeaponSection = () => {
  return (
    <section className="flex flex-col h-auto w-full 
     bg-foreground text-white mt-10 ">
        <h1 className={`text-6xl mt-4 ${ValorantFont.className}`}></h1>
      <div className="grid  lg:grid-cols-2 max-w-[90%] xl:max-w-[1440px] mx-auto">
        <div className="flex items-center">
          <Image
            src={"/img/weapon-background.webp"}
            alt="weapon-background"
            width={1200}
            height={1200}
            className="w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-[420px] mx-auto mt-9 lg:mt-0">
          <h1 className={`text-4xl ${ValorantFont.className}`}>Find your Weapon</h1>
          <p className="text-center ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            quibusdam quisquam nobis, eveniet aut illo quia rerum, vitae
            doloremque, numquam distinctio accusamus laboriosam ea dignissimos
            quidem veritatis. Eaque, dolores dolor.
          </p>

          <Link
            href={{ pathname: "/weapons"}}
            className="mb-5 mt-5 rounded-md border p-1"
          >
            <button className="h-12 w-40 rounded-md bg-white font-semibold text-black transition-all duration-700 hover:border-black hover:bg-slate-900 hover:text-white">
              VIEW ALL AGENTS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
