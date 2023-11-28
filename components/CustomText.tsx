"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";

export const TypingText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.p
    variants={textContainer}
    className={`text-[14px] font-semibold text-secondary-white ${textStyles}`}
    initial="hidden"
    animate="show"
    aria-labelledby={title}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({
  title,
  textStyles,
}: {
  title: string;
  textStyles: string;
}) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    animate="show"
    className={`mt-[8px] text-[40px] font-bold text-white md:text-[64px] ${textStyles}`}
    aria-labelledby={title}
  >
    {title}
  </motion.h2>
);
