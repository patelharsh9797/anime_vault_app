import Image from "next/image";
import Link from "next/link";
import { MotionFooter } from "./FramerMotion";

function Footer() {
  return (
    <MotionFooter
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.32, 0.72, 0, 1],
        duration: 1,
      }}
      className="fixed z-50 bottom-0 max-w-7xl mx-auto w-full sm:px-16 py-4 px-8 flex justify-between items-center gap-4 flex-wrap bg-[#161921]"
    >
      <p className="text-base font-bold text-white">
        {`@${new Date().getFullYear()} EpicAnimeVault`}
      </p>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          width={47}
          height={44}
          className="w-auto object-contain"
        />
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="https://github.com/patelharsh9797/anime_vault_app"
          target="_blank"
          className="hover:opacity-80"
        >
          <Image
            src="/github.svg"
            alt="logo"
            width={32}
            height={32}
            className="w-[28px] object-contain"
          />
        </Link>
        <Link href="/" target="_blank" className="hover:opacity-80">
          <Image
            src="/twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="w-auto object-contain"
          />
        </Link>
      </div>
    </MotionFooter>
  );
}

export default Footer;
