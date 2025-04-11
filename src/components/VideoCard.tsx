"use client";

import React, { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import thumbnailImage from "../assets/images/girl.jpg";

export const VideoCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  const [isPlaying, setIsPlaying] = useState(false);

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const videoUrl = "https://www.youtube.com/embed/I_RYujJvZ7s";

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div className="py-10 md:py-40 w-full relative" style={{ perspective: "1000px" }}>
        <Card rotate={rotate} translate={translate} scale={scale}>
          {!isPlaying ? (
            <div
              className="h-full w-full flex items-center justify-center cursor-pointer relative"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={thumbnailImage}
                alt="Video Thumbnail"
                className="h-full w-full object-cover rounded-2xl"
              />
              <svg
                className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              >
                <circle cx="50%" cy="50%" r="49%" />
                <path d="M42 30 L67 50 L42 70 Z" />
              </svg>
            </div>
          ) : (
            <iframe
              className="w-full h-full rounded-2xl"
              src={`${videoUrl}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&enablejsapi=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          )}
        </Card>
      </div>

      <style>{`
        .play-button {
          width: 100px;
          height: 100px;
          cursor: pointer;
        }

        .play-button circle {
          stroke: #666;
          stroke-width: 2px;
          fill: transparent;
        }

        .play-button path {
          stroke: #666;
          fill: #666;
        }

        .play-button:hover circle {
          stroke-dasharray: 314;
          stroke-dashoffset: 0;
          animation: dash .3s linear;
        }

        @keyframes dash {
          from {
            stroke-dashoffset: 314;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: any;
  scale: any;
  translate: any;
  children: React.ReactNode;
}) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-2 md:p-6 rounded-[30px] shadow-2xl"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900">
      {children}
    </div>
  </motion.div>
);
