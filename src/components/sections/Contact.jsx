import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useThemeColor } from "../../context/ThemeContext";

export default function Contact() {
  const { themeColor } = useThemeColor();

  return (
    <section className="relative min-h-screen bg-[#ebe4e1] overflow-hidden">

      {/* TOP LEFT */}
      <div className="fixed left-14 top-14 z-20">
        <p className="text-[18px] uppercase leading-[1.1]">
          CREATIVE DEVELOPER
          <br />
          AVAILABLE FREELANCE
        </p>
      </div>

      {/* LOGO */}
      <div className="fixed left-1/2 top-12 -translate-x-1/2 z-20 text-center">
        <h3
          style={{ color: themeColor }}
          className="text-[22px] font-black uppercase"
        >
          AAQIB
        </h3>

        <p
          style={{ color: themeColor }}
          className="-mt-2 text-[22px] font-black uppercase"
        >
          BASHIR
        </p>
      </div>

      {/* MENU */}
      <button className="fixed right-14 top-14 z-20 text-[22px] font-black uppercase">
        MENU
      </button>

      {/* CENTER CONTENT */}
      <div className="flex min-h-screen flex-col items-center justify-center px-10">

        <p className="mb-8 text-[20px] uppercase tracking-[8px] text-gray-500">
          LET'S WORK TOGETHER.
        </p>

        <motion.a
          href="mailto:aaqib@example.com"
          whileHover={{ scale: 1.03 }}
          className="group flex items-center gap-6"
        >
          <h1 className="text-center text-[7vw] font-black uppercase leading-none tracking-[-6px]">
            CONTACT@AAQIBMIR.COM
          </h1>

          <ArrowUpRight
            size={70}
            className="opacity-50 transition-all group-hover:translate-x-2 group-hover:-translate-y-2"
          />
        </motion.a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-gray-500 uppercase text-[18px]">
          <span>RIYADH, SAUDI ARABIA</span>
          <span>•</span>
          <span>AVAILABLE</span>
        </div>

        <div className="mt-4 flex gap-10 uppercase text-[18px]">
          <a href="#">GITHUB</a>
          <a href="#">INSTAGRAM</a>
          <a href="#">LINKEDIN</a>
        </div>
      </div>

      {/* FOOTER */}
      <div className="fixed left-14 bottom-12 uppercase text-[18px]">
        AAQIB BASHIR — {new Date().getFullYear()}
      </div>

      <div className="fixed right-14 bottom-12 uppercase text-[18px]">
        BASED IN RIYADH
      </div>
    </section>
  );
}