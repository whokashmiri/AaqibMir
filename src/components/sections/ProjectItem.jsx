import { useRef } from "react";
import gsap from "gsap";

export default function ProjectItem({
  project,
  index,
  active,
}) {
  const nameRef = useRef();
  const numberRef = useRef();

  const enter = () => {
    gsap.to(nameRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.45,
      ease: "power3.out",
    });

    gsap.fromTo(
      numberRef.current,
      {
        y: 15,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
      }
    );
  };

  const leave = () => {
    gsap.to(nameRef.current, {
      x: 40,
      opacity: 0.35,
      duration: 0.35,
    });
  };

  return (
    <div
      onMouseEnter={enter}
      onMouseLeave={leave}
      className="cursor-pointer flex justify-end items-center gap-3 overflow-hidden"
    >
     <h2
    ref={nameRef}
    className={`text-5xl uppercase font-semibold transition-opacity ${
        active === index ? "opacity-100" : "opacity-20"
    }`}
>
    {project.projectName}
</h2>

      <span
        ref={numberRef}
        className="text-2xl"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}