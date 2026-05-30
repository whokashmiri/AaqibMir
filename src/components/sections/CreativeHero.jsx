/* eslint-disable no-unused-vars */

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useThemeColor } from "../../context/ThemeContext";

import { useRef } from "react";





export default function CreativeHero() {

const { themeColor } = useThemeColor();

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

const blur = useTransform(
  scrollYProgress,
  [0, 0.5],
  [0, 20]
);

const scale = useTransform(
  scrollYProgress,
  [0, 0.5],
  [1, 0.92]
);



const filter = useMotionTemplate`blur(${blur}px)`;

  // Second section slides from bottom
  const y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] bg-[#e8dddd]"
    >
      {/* SECTION 1 */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
  style={{
    filter,
    scale,
  }}
  className="absolute inset-0"
>
          <div className="relative w-full h-full">
         

            {/* Logo */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2">
              <img
                src="/logo.png"
                alt=""
                className="h-12 object-contain"
              />
            </div>

            {/* Center Text */}
            <div className="h-full flex items-center justify-center">
              <h1 className="text-[10vw] leading-[0.9] font-black uppercase text-center">
                WEB
                <br />
                &gt; CREATIVE &lt;
                <br />
                DEVELOPER
              </h1>
            </div>

          </div>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[#e8dddd]"
        >
          <div className="relative w-full h-full">
         

            {/* Logo */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2">
              <img
                src="/logo.png"
                alt=""
                className="h-12 object-contain"
              />
            </div>

         

            {/* Main Text */}
            <div className="h-full flex flex-col items-center justify-center">
              <h2 className="text-[10vw] leading-[0.85] font-black uppercase text-center">
                PASSIONATE
                <br />
                ABOUT
                <br />
                 <motion.h3   animate={{
              color: themeColor,
            }}>
                  CREATIVE
                  <br />
                  CHALLENGES
              </motion.h3>
              </h2>
            </div>

            {/* Circle Button */}
            <div className="absolute right-20 top-1/3">
              <div className="w-40 h-40 border-2 border-black rounded-full flex items-center justify-center text-6xl">
                +
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}