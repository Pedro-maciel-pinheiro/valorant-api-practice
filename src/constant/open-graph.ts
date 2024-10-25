// constants/metadata.ts
import type { Metadata } from "next";




export const Open_Metadata: Metadata = {

  title: "Valorant Project / API Practice",
  description: "This project uses the Valorant API to practice handling APIs, incorporating filters based on search parameters. The data fetching is handled server-side, utilizing Next.js for seamless integration.",
  openGraph: {
    title: "Valorant API Practice",
    description: "This project uses the Valorant API to practice handling APIs, incorporating filters based on search parameters. The data fetching is handled server-side, utilizing Next.js for seamless integration.",
    url: "https://valorant-api-practice.vercel.app/", 
    type: "website",
    images: [
      {
        url: "/img/opengraph-image.png", 
        width: 1200,
        height: 630,
        alt: "Valorant API Practice",
      },
    ],
    siteName: "Valorant API Practice",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valorant API Practice",
    description: "This project uses the Valorant API to practice handling APIs, incorporating filters based on search parameters. The data fetching is handled server-side, utilizing Next.js for seamless integration.",
    images: "/img/opengraph-image.png", 
  },

  
};