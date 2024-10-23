import React from "react";
import Image from "next/image";
import { ValorantFont } from "@/app/fonts";
import Link from "next/link";

export const WeaponSection = () => {
  return (
    <section className="mt-10 flex h-auto w-full  bg-foreground text-white ">
    
      <div className="grid  content-center lg:grid-cols-2 xl:max-w-[1440px] lg:mx-auto">
        <Image
          src={"/img/weapon-background.webp"}
          alt="weapon-background"
          width={1200}
          height={1200}
          className=" max-w-[80%] mx-auto"
        />

        <div className="mt-9 flex md:w-[420px] flex-col items-center justify-center  lg:mt-0 mx-auto max-w-[90%]">
          <h1 className={`text-2xl md:text-4xl ${ValorantFont.className}`}>
            Find your Weapon
          </h1>
          <p className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            quibusdam quisquam nobis, eveniet aut illo quia rerum, vitae
            doloremque, numquam distinctio accusamus laboriosam ea dignissimos
            quidem veritatis. Eaque, dolores dolor.
          </p>

          <Link
            href={{ pathname: "/weapons" }}
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
