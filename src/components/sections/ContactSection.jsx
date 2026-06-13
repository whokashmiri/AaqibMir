import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState } from "react";
import { useThemeColor } from "../../context/ThemeContext";

export default function ContactSection() {
  const { themeColor } = useThemeColor();
  const [active, setActive] = useState(null);

  // global cursor position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth trailing effect
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });
  

  const handleMove = (e, key) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX);
    y.set(e.clientY);
    setActive(key);
  };

  const reset = () => setActive(null);

  const isActive = (key) => active === key;

  const Item = ({ label, value, href, keyName }) => (
    <motion.div
      onMouseEnter={(e) => handleMove(e, keyName)}
      onMouseMove={(e) => handleMove(e, keyName)}
      onMouseLeave={reset}
      className="relative"
    >
      <p className="text-gray-500 uppercase text-sm font-bold mb-3">
        {label}
      </p>

      <motion.a
        href={href}
        className="text-3xl font-medium relative z-10"
        animate={{
          color: isActive(keyName) ? themeColor : "#000",
          scale: isActive(keyName) ? 1.06 : 1,
        }}
        transition={{ duration: 0.25 }}
      >
        {value}
      </motion.a>
    </motion.div>
  );

  return (
    <section className=" relative z-0 h-screen bg-[#f4f4f4] overflow-hidden">
      {/* GRID */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/6 top-0 h-full w-px bg-[#eadede]" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-[#eadede]" />
        <div className="absolute right-1/6 top-0 h-full w-px bg-[#eadede]" />

        <div className="absolute top-[14%] left-0 w-full h-px bg-[#eadede]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#eadede]" />
        <div className="absolute bottom-[20%] left-0 w-full h-px bg-[#eadede]" />
      </div>

      {/* TITLE */}
      <motion.h1
      animate={{
      color: active ? themeColor : "#000",
    }}
    transition={{ duration: 0.6 }}
      className="absolute left-[11%] top-[30%] text-[7vw] font-black uppercase leading-none tracking-[-6px]">
        GET IN TOUCH
      </motion.h1>

      {/* CURSOR GLOW ORB */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <motion.div
          animate={{
            scale: active ? 2.5 : 1,
            opacity: active ? 0.35 : 0.12,
            backgroundColor: themeColor,
          }}
          transition={{ duration: 0.3 }}
          className="w-32 h-32 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

      {/* CONTACT */}
      <div className="absolute left-[11%] top-[62%] flex gap-32">
        <Item
          label="Email"
          value="contact@example.com"
          href="mailto:contact@example.com"
          keyName="email"
        />

        <Item
          label="Github"
          value="WHOKASHMIRI"
          href="https://github.com/WHOKASHMIRI"
          keyName="github"
        />

        <Item
          label="LinkedIn"
          value="WHOKASHMIRI"
          href="https://linkedin.com/in/WHOKASHMIRI"
          keyName="linkedin"
        />
      </div>
    </section>
  );
}