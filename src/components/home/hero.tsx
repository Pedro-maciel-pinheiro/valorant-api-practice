import React from "react";
import Image from "next/image";
import { ValorantFont } from "@/app/fonts";
import Link from "next/link";

export const Hero = () => {
  return (
    <section
      id="agents"
      className="relative h-auto w-full scroll-mt-28 bg-foreground lg:scroll-mt-56"
    >
      <ul className="relative mx-auto grid max-w-[90%] gap-2 lg:grid-cols-2 xl:max-w-[1440px]">
        <li className="order-last lg:order-first">
          <Image
            src={"/img/viper-background.webp"}
            alt="background image"
            width={750}
            height={750}
            className=""
          />
        </li>
        <li className="flex flex-col items-center justify-center px-2 py-2 font-medium text-white">
          <div className="flex max-w-[450px] flex-col gap-2">
            <h1
              className={`text-center text-4xl lg:text-start lg:text-6xl ${ValorantFont.className}`}
            >
              YOUR AGENTS
            </h1>
            <h4 className="text-center text-lg lg:text-start lg:text-2xl">
              CREATIVITY IS YOUR GREATEST WEAPON
            </h4>
            <p className="w-80 text-center lg:w-full lg:text-start">
              More than guns and bullets, you’ll choose an Agent armed with
              adaptive, swift, and lethal abilities that create opportunities to
              let your gunplay shine. No two Agents play alike, just as no two
              highlight reels will look the same.
            </p>
          </div>

          <Link
            href={{ pathname: "/agents", query: { role: "All" } }}
            className="mb-5 mt-5 rounded-md border p-1"
          >
            <button className="h-12 w-40 rounded-md bg-white font-semibold text-black transition-all duration-700 hover:border-black hover:bg-slate-900 hover:text-white">
              VIEW ALL AGENTS
            </button>
          </Link>
        </li>
      </ul>
    </section>
  );
};
