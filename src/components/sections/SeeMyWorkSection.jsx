import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function SeeMyWorkSection() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#e7e7e7] text-black">
      {/* Grid */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[16.66%] top-0 h-full w-px bg-black/10" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-black/10" />
        <div className="absolute right-[16.66%] top-0 h-full w-px bg-black/10" />

        <div className="absolute top-0 left-0 w-full h-px bg-black/10" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-black/10" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-black/10" />
      </div>

      {/* Header */}

   
      {/* Center CTA */}

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover="hover"
          initial="initial"
          className="relative flex items-center gap-12 cursor-pointer select-none"
        >
          <motion.span
            variants={{
              initial: { x: 0 },
              hover: { x: -20 },
            }}
            transition={{ duration: 0.4 }}
            className="text-[10rem] font-black leading-none"
          >
            &gt;
          </motion.span>

          <motion.h1
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.04 },
            }}
            transition={{ duration: 0.5 }}
            className="text-[11vw] font-black leading-none tracking-[-0.06em]"
          >
            SEE MY WORK
          </motion.h1>

          <motion.span
            variants={{
              initial: { x: 0 },
              hover: { x: 20 },
            }}
            transition={{ duration: 0.4 }}
            className="text-[10rem] font-black leading-none"
          >
            &lt;
          </motion.span>

          {/* Circular Badge */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 14,
              ease: "linear",
            }}
            className="absolute right-[15%] -top-24 h-44 w-44"
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
                fill="black"
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
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

     
    </section>
  );
}