"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  MotionH1,
  MotionDiv,
  MotionHeader,
} from "./FramerMotion";
import useMeasure from "react-use-measure";
import { navVariants } from "@/utils/motion";

function Hero() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [ref, bounds] = useMeasure();

  return (
    <MotionHeader
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, height: bounds.height }}
      transition={{
        ease: [0.32, 0.72, 0, 1],
        duration: 1,
      }}
      className="bg-hero bg-center bg-cover bg-no-repeat w-full"
    >
      <div ref={ref} className="sm:p-16 py-16 px-8 space-y-16 lg:space-y-0">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={101}
            height={96}
            className="object-contain"
          />
        </Link>
        <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-16 lg:gap-0">
          <AnimatePresence mode="wait">
            {isHome && (
              <MotionDiv
                key="heroText"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
                transition={{
                  delay: 0.5,
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className="flex-1"
              >
                <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%] h-full">
                  Explore The{" "}
                  <span className="red-gradient">Diverse Realms</span> of Anime
                  Magic
                </h1>
              </MotionDiv>
            )}
            {isHome && (
              <MotionDiv
                key="heroImage"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
                transition={{
                  delay: 0.5,
                  ease: "easeInOut",
                  duration: 0.5,
                }}
                className="lg:flex-1 flex relative w-full justify-center"
              >
                <Image
                  src="/anime.png"
                  alt="anime"
                  width={438}
                  height={382}
                  className="object-contain"
                />
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionHeader>
  );
}

export default Hero;
