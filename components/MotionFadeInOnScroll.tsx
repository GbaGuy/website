"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface MotionFadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
}

export default function MotionFadeInOnScroll({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  amount = 0.2,
  once = true,
}: MotionFadeInOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}