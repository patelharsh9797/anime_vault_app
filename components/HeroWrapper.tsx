"use client";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

export default function HeroWrapper({ children }: PropsWithChildren) {
  const path = usePathname();
  console.log("path", path);

  return <>{children}</>;
}
