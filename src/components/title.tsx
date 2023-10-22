"use client";

import { motion } from "framer-motion";
import { Avatar } from "./avatar";

export function Title() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ ease: "easeOut", duration: 0.15 }}
      className="flex items-center gap-6"
    >
      <Avatar />
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Tika Capon
        </h1>
        <h2 className="font-semibold text-muted-foreground">
          Software Engineer, Maker, Musician
        </h2>
      </div>
    </motion.div>
  );
}
