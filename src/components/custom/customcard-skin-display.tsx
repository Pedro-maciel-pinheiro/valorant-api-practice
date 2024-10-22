"use client";
import React, { useState } from "react";
import { SkinDataProps } from "@/types";
import { PlayIcon, X } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  fadeInSlider,
  slideInFromBottom,
  slideInFromLeft,
} from "@/utils/motion";
import { ValorantFont } from "@/app/fonts";

export const CustomCardSkinDisplay = ({ skinData }: SkinDataProps) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
    setSelectedVideo(null);
  };

  return (
    <section className="flex h-auto flex-col items-center justify-center bg-slate-900 text-white">
      <h1>{}</h1>
      <div className="mb-96 mt-52 max-w-[90%] xl:max-w-[1440px]">
        {skinData.map((item) => (
          <div key={item.uuid} className="grid gap-5 lg:grid-cols-2">
            <motion.div
              className="top-44 flex h-[400px] w-full flex-col 
              items-center justify-center gap-4 rounded-lg border-2
               bg-foreground p-2 lg:sticky overflow-hidden"
              initial={"hidden"}
              whileInView={"visible"}
              variants={slideInFromLeft(0.2)}
              viewport={{ once: true }}
            >
              <Image
                src={item.displayIcon}
                alt={item.displayName}
                width={400}
                height={400}
              />
              <h2 className={`${ValorantFont.className} text-xl`}>
                {item.displayName}
              </h2>
            </motion.div>

            <ul className="grid gap-3">
              {item.levels.map((level, index) => (
                <motion.li
                  key={item.uuid}
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeInSlider}
                >
                  {level.streamedVideo ? (
                    <div
                      onClick={() =>
                        level.streamedVideo &&
                        handleVideoClick(level.streamedVideo)
                      }
                      className="relative flex h-auto w-full flex-col items-center justify-center rounded-lg border-2 p-2"
                    >
                      <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-lg border-2 bg-black/50">
                        <h3 className="max-w-[80%] text-xl">
                          {level.displayName}
                        </h3>
                        <PlayIcon size={45} />
                      </div>
                      <video
                        src={level.streamedVideo}
                        muted
                        className="h-[400px] w-full rounded-lg border-2 shadow-lg"
                      />
                    </div>
                  ) : (
                    <p>No Video available for this weapon </p>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={"hidden"}
            animate={"visible"}
            variants={slideInFromBottom(0)}
            exit={"hidden"}
            onClick={handleCloseModal}
          >
            <div className="relative">
              <button
                onClick={handleCloseModal}
                className="absolute right-0 top-0 z-50 mx-2 mt-1 flex items-center justify-center rounded-full bg-white p-4 text-xl text-black transition-all active:translate-y-1"
              >
                <X size={20} />
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay={isPlaying}
                className="max-h-[90vh] max-w-[90vw] md:max-h-[80vh] md:max-w-[80vw]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
