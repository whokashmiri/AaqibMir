import { motion, useMotionValue, useSpring } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useThemeColor } from "../../context/ThemeContext";

export default function SeeMyWorkSection() {
  const { themeColor } = useThemeColor();

  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - 88);
    mouseY.set(e.clientY - rect.top - 88);
  };

  return (
    <section
      className="relative h-screen overflow-hidden bg-[#e7e7e7] text-black"
      onMouseMove={handleMouseMove}
    >
      {/* GRID */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[16.66%] top-0 h-full w-px bg-black/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-black/10" />
        <div className="absolute right-[16.66%] top-0 h-full w-px bg-black/10" />

        <div className="absolute top-0 left-0 w-full h-px bg-black/10" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-black/10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/10" />
      </div>

      {/* Cursor Badge */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute z-50 h-44 w-44"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative h-full w-full"
        >
          <svg
            viewBox="0 0 200 200"
            className="h-full w-full"
          >
            <defs>
              <path
                id="circlePath"
                d="
                  M100,100
                  m-70,0
                  a70,70 0 1,1 140,0
                  a70,70 0 1,1 -140,0
                "
              />
            </defs>

            <text
              fill={themeColor}
              fontSize="16"
              fontWeight="700"
            >
              <textPath href="#circlePath">
                • SEE MORE • SEE MORE • SEE MORE •
              </textPath>
            </text>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <Plus
              size={48}
              strokeWidth={1.5}
              color={themeColor}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* CTA */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="relative flex items-center gap-10 cursor-pointer"
        >
          {/* LEFT */}
          <motion.span
            animate={{
              opacity: hovered ? 1 : 0,
              x: hovered ? 0 : 40,
            }}
            transition={{ duration: 0.35 }}
            className="text-[10rem] font-black"
          >
            &gt;
          </motion.span>

          {/* TITLE */}
          <motion.h1
            animate={{
              scale: hovered ? 1.05 : 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="text-[11vw] font-black leading-none tracking-[-0.06em]"
          >
            SEE MY WORK
          </motion.h1>

          {/* RIGHT */}
          <motion.span
            animate={{
              opacity: hovered ? 1 : 0,
              x: hovered ? 0 : -40,
            }}
            transition={{ duration: 0.35 }}
            className="text-[10rem] font-black"
          >
            &lt;
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}