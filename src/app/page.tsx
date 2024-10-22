import { HomeVideo } from "@/components/home/home-video";

import { CustomCardAgentsFilter } from "@/components/custom/customcard-agents-filter";
import {Hero} from "@/components/home/hero";

import { WeaponSection } from "@/components/weapon-section/weapon-section";

export default function Home() {
  return (
    <div className="lex-col flex min-h-screen flex-col items-center justify-center bg-slate-900">
      <HomeVideo />
      <Hero/>
      <CustomCardAgentsFilter />     
      <WeaponSection/>
    </div>
  );
}
