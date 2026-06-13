import { motion } from "framer-motion";
import { useState } from "react";
import { useThemeColor } from "../../context/ThemeContext";
export default function ContactSection() {
     const { themeColor } = useThemeColor();
     const [emailHovered, setEmailHovered] = useState(false);
  return (
    <section className="relative h-screen bg-[#f4f4f4] overflow-hidden">
      {/* GRID */}
      <div className="absolute inset-0 pointer-events-none">
        {/* vertical */}
        <div className="absolute left-1/6 top-0 h-full w-px bg-[#eadede]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#eadede]" />
        <div className="absolute right-1/6 top-0 h-full w-px bg-[#eadede]" />

        {/* horizontal */}
        <div className="absolute top-[14%] left-0 w-full h-px bg-[#eadede]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#eadede]" />
        <div className="absolute bottom-[20%] left-0 w-full h-px bg-[#eadede]" />
      </div>

   

      {/* CENTER CONTENT */}
      <div className="absolute left-[11%] top-[30%]">
          <motion.h1
    animate={{
      color: emailHovered ? themeColor : "#000",
    }}
    transition={{ duration: 0.6 }}
    className="text-center text-[7vw] font-black uppercase leading-none tracking-[-6px]"
  >
    GET IN TOUCH
  </motion.h1>
      </div>

      {/* CONTACT INFO */}
      <div className="absolute left-[11%] top-[62%] flex gap-32">
        <div>
          <p className="text-gray-500 uppercase text-sm font-bold mb-3">
            Email
          </p>
          <a
            href="mailto:contact@example.com"
            className="text-3xl font-medium"
          >
            contact@example.com
          </a>
        </div>

        <div>
          <p className="text-gray-500 uppercase text-sm font-bold mb-3">
            Github
          </p>
          <a
            href="https://github.com/WHOKASHMIRI"
            target="_blank"
            className="text-3xl font-medium"
          >
            WHOKASHMIRI
          </a>
        </div>

        <div>
          <p className="text-gray-500 uppercase text-sm font-bold mb-3">
            LinkedIn
          </p>
          <a
            href="https://linkedin.com/in/WHOKASHMIRI"
            target="_blank"
            className="text-3xl font-medium"
          >
            WHOKASHMIRI
          </a>
        </div>
      </div>

    </section>
  );
}