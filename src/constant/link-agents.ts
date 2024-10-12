import agent_image_1 from "@/assets/viper.webp";

import agent_image_2 from "@/assets/jett.webp";
import agent_image_3 from "@/assets/joy.webp";

import agent_image_4 from "@/assets/bro.webp";

export const link_agents = [
  {
    title: "Controller",
    subtitle: "Shape the battlefield with an arsenal of lockdown tools like vision blocking smokes, temporary walls, and stealthy traps so every fight is tilted in your team’s favor.",
    href: "/agents?role=Controller",
    image: agent_image_1,
  },
  {
    title: "Duelist",
    subtitle: "Be on point and out front, opening up rounds and taking engagements with disruptive, explosive, and aggressive abilities.",
    href: "/agents?role=Duelist",
    image: agent_image_2,
  },
  {
    title: "Sentinel",
    subtitle: "Stand your ground, draw your lines, and defend your turf with an arsenal of long range, supportive, and defensive abilities.",
    href: "/agents?role=Sentinel",
    image: agent_image_3,
  },
  {
    title: "Initiator",
    subtitle: "Track, disable, and flush out your enemies with dynamic abilities that set your team up for those hall of fame clips.",
    href: "/agents?role=Initiator",
    image: agent_image_4,
  },
] as const;
