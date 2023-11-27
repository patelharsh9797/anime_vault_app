"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionHeader } from "./FramerMotion";
import { navVariants } from "@/utils/motion";

function Hero() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <MotionHeader
      variants={navVariants}
      initial="hidden"
      animate="show"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 0.25, ease: "easeInOut", duration: 0.5 }}
      className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0"
    >
      <div className="flex-1 flex flex-col gap-10">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={101}
            height={96}
            className="object-contain"
          />
        </Link>
        {isHome && (
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
            Explore The <span className="red-gradient">Diverse Realms</span> of
            Anime Magic
          </h1>
        )}
      </div>
      {isHome && (
        <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
          <Image src="/anime.png" alt="anime" fill className="object-contain" />
        </div>
      )}
    </MotionHeader>
  );
}

export default Hero;
