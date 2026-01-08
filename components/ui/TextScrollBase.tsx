"use client";

import { Fragment, isValidElement, ReactNode, useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type TextScrollBaseType = {
  node: ReactNode;
  className?: string;
};

type LetterType = {
  children: ReactNode | string;
  progress: MotionValue<number>;
  range: number[];
};

type CharType = {
  children: ReactNode;
  progress: MotionValue<number>;
  range: number[];
};

export default function TextScrollBase({
  node,
  className,
}: TextScrollBaseType) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.25", "1 center"],
  });

  let text: string[] = [];
  if (isValidElement(node)) {
    const children = (node.props as any)?.children;
    if (children != null && Array.isArray(children)) {
      children.map((child) => {
        text.push(child.props.children);
      });
    }
  }
  const words = text.join(" \n ").split(" ");

  return (
    <div ref={ref} className={cn("relative flex m-0 flex-wrap justify-center", className)}>
      {words.map((word, i) => {
        if (word === "\n") {
          return <div key={i} className="w-full" />;
        }
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Letter key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Letter>
        );
      })}
    </div>
  );
}

const Letter = ({ children, progress, range }: LetterType) => {
  if (typeof children === "string") {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
      <span className="relative me-2 mt-2">
        {children.split("").map((char: string, i: number) => {
          const start = range[0] + i * step;
          const end = range[0] + (i + 1) * step;
          return (
            <Char key={`c_${i}`} progress={progress} range={[start, end]}>
              {char}
            </Char>
          );
        })}
      </span>
    );
  }
};

const Char = ({ children, progress, range }: CharType) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className={cn("absolute", "opacity-10")}>{children}</span>
      <motion.span
        style={{
          transition: "all 0.8s ease-out",
          opacity: opacity,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
