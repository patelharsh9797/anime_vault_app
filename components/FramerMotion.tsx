"use client";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { PropsWithChildren } from "react";

const MotionStaggerDiv = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <MotionDiv
      // @ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
};

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionHeader = motion.header;
const MotionFooter = motion.footer;

export {
  MotionStaggerDiv,
  AnimatePresence,
  motion,
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionP,
  MotionHeader,
  MotionFooter,
};
