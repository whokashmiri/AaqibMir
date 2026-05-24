import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const roles = [
  "FULL STACK",
  "AI AUTOMATION",
  "SALESFORCE",
];

const availability = [
  "FREELANCE",
  "FULL TIME",
];

const randomColors = [
  "#00c86f",
  "#7c3aed",
  "#ff6b6b",
  "#00bcd4",
  "#f59e0b",
  "#ec4899",
];

export default function Hero() {
  const cursorRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [roleIndex, setRoleIndex] = useState(0);
  const [availabilityIndex, setAvailabilityIndex] =
    useState(0);

  // RANDOM COLOR PER REFRESH
  const randomTheme =
    randomColors[
      Math.floor(Math.random() * randomColors.length)
    ];

  const [themeColor] = useState(randomTheme);

  // CURSOR VIDEO
  useEffect(() => {
    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };
  }, []);

  // TEXT CHANGE
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(
        (prev) => (prev + 1) % roles.length
      );

      setAvailabilityIndex(
        (prev) =>
          (prev + 1) % availability.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden bg-[#ebe4e1] text-black">
        
        {/* GRID */}
        <div className="absolute inset-0 z-10 grid grid-cols-6 grid-rows-4">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                borderColor: "transparent",
              }}
              animate={{
                opacity: 1,
                borderColor: `${themeColor}40`,
              }}
              transition={{
                delay: i * 0.03,
                duration: 0.8,
              }}
              className="border"
            />
          ))}
        </div>

        {/* ABSTRACT BG */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-[10%] top-[-10%] h-[1200px] w-[300px] rotate-[20deg] bg-pink-200 blur-3xl" />

          <div className="absolute right-[15%] top-[-10%] h-[1200px] w-[300px] rotate-[20deg] bg-pink-100 blur-3xl" />
        </div>

        {/* TOP LEFT */}
        <div className="absolute left-14 top-14 z-20">
          <div className="text-[18px] font-medium uppercase leading-[1.1]">

            {/* ROLE */}
            <div className="flex items-center gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>

              <span>DEVELOPER</span>
            </div>

            {/* AVAILABILITY */}
            <div className="flex items-center gap-2">
              <span>AVAILABLE FOR</span>

              <AnimatePresence mode="wait">
                <motion.span
                  key={availabilityIndex}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                >
                  {
                    availability[
                      availabilityIndex
                    ]
                  }
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MENU */}
        <button
          onClick={() => setMenuOpen(true)}
          className="absolute right-14 top-14 z-30 text-[22px] font-black uppercase transition-all hover:scale-110"
        >
          MENU
        </button>

        {/* LOGO */}
        <div className="absolute left-1/2 top-12 z-20 -translate-x-1/2 text-center">
          <motion.h3
            animate={{
              color: themeColor,
            }}
            transition={{
              duration: 1,
            }}
            className="text-[22px] font-black uppercase tracking-tight"
          >
            AAQIB
          </motion.h3>

          <motion.p
            animate={{
              color: themeColor,
            }}
            transition={{
              duration: 1,
            }}
            className="-mt-2 text-[22px] font-black  uppercase"
          >
            Bashir
          </motion.p>
        </div>

        {/* MAIN NAME */}
        <div
          className="relative z-20 flex h-full items-center justify-center"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative text-center leading-none"
          >
            {/* AAQIB */}
            <h1 className="text-[10vw] font-black uppercase tracking-[-10px]">
              AA

              <motion.span
                animate={{
                  color: themeColor,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="italic z-10 relative"
              >
                Q
              </motion.span>

              IB
            </h1>

            {/* BASHIR */}
            <h1 className="-mt-8 text-[10vw] font-black uppercase tracking-[-10px]">
              <motion.span
                animate={{
                  color: themeColor,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="italic"
              >
                B
              </motion.span>

              ASHIR
            </h1>
          </motion.div>
        </div>

        {/* BOTTOM */}
        <div className="absolute bottom-12 left-14 z-20 text-[18px] uppercase">
          PORTFOLIO {new Date().getFullYear()}
        </div>

        <div className="absolute bottom-12 right-14 z-20 text-[18px] uppercase">
          BASED IN RIYADH
        </div>

        {/* VIDEO CURSOR */}
        <motion.div
          ref={cursorRef}
          animate={{
            scale: hovered ? 1 : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="pointer-events-none fixed left-0 top-0 z-50 h-44 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/20 shadow-2xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            src="https://www.pexels.com/download/video/36832454/"
          />
        </motion.div>
      </section>

      {/* MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(10px)",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#ebe4e1]/90"
          >
            
            {/* GRID */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="border"
                  style={{
                    borderColor: `${themeColor}30`,
                  }}
                />
              ))}
            </div>

            {/* CLOSE */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute right-14 top-10 text-[60px] font-light"
            >
              ×
            </button>

            {/* MENU ITEMS */}
            <div className="relative z-20 flex flex-col items-center text-center leading-none">
              {[
                "HOME",
                "ABOUT",
                "PROJECTS",
                "LAB",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="group flex items-center gap-10"
                >
                  {/* LEFT ARROW */}
                  <span className="translate-y-2 text-[5vw] font-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                    &gt;
                  </span>

                  {/* TEXT */}
                  <h1 className="cursor-pointer text-[9vw] font-black uppercase tracking-[-8px] transition-all duration-300 hover:scale-105">
                    {item}
                  </h1>

                  {/* RIGHT ARROW */}
                  <span className="translate-y-2 text-[5vw] font-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                    &lt;
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}