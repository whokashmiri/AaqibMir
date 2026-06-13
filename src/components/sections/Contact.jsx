import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useThemeColor } from "../../context/ThemeContext";
 import { useState } from "react";
export default function Contact() {
  const { themeColor } = useThemeColor();
const [emailHovered, setEmailHovered] = useState(false);
  


  return (
    <section className="relative min-h-screen bg-[#ebe4e1] overflow-hidden">

      



      {/* CENTER CONTENT */}
      <div className="flex min-h-screen flex-col items-center justify-center px-10">

        <p className="mb-8 text-[20px] uppercase tracking-[8px] text-gray-500">
          LET'S WORK TOGETHER.
        </p>

       <motion.a
  href="mailto:aaqib@example.com"
  onHoverStart={() => setEmailHovered(true)}
  onHoverEnd={() => setEmailHovered(false)}
  className="group flex items-center gap-6"
>
  <motion.h1
    animate={{
      color: emailHovered ? themeColor : "#000",
    }}
    transition={{ duration: 0.6 }}
    className="text-center text-[7vw] font-black uppercase leading-none tracking-[-6px]"
  >
    CONTACT@AAQIBMIR.COM
  </motion.h1>

  <motion.div
    animate={{
      color: emailHovered ? themeColor : "#9ca3af",
      x: emailHovered ? 8 : 0,
      y: emailHovered ? -8 : 0,
    }}
    transition={{ duration: 0.6 }}
  >
    <ArrowUpRight size={70} />
  </motion.div>
</motion.a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-gray-500 uppercase text-[18px]">
          <span>RIYADH, SAUDI ARABIA</span>
          <span>•</span>
          <span>AVAILABLE</span>
        </div>

      <div className="mt-4 flex gap-10 uppercase text-[18px]">
  {["GITHUB", "INSTAGRAM", "LINKEDIN"].map((item) => (
    <motion.a
      key={item}
      href="#"
      whileHover={{
        color: themeColor,
       
      }}
      transition={{
        duration: 0.2,
      }}
      className="cursor-pointer"
    >
      {item}
    </motion.a>
  ))}
</div>
      </div>

    </section>
  );
}