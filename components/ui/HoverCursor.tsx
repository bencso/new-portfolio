"use client";
import { RefObject, useRef, useState } from "react";
import { Cursor } from "@/components/ui/Cursor";
import { AnimatePresence, motion } from "motion/react";
import { PlusIcon } from "lucide-react";

interface CursorProps {
  targetRef: RefObject<(HTMLDivElement | null)[]>;
}

export function HoverCursor({ targetRef }: CursorProps) {
  const [isHovering, setIsHovering] = useState(false);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current && targetRef.current.length > 0) {
      let isActiveAll = false;

      for (const ref of targetRef.current) {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isHovered =
            x >= rect.left &&
            x <= rect.right &&
            y >= rect.top &&
            y <= rect.bottom;
          if (isHovered) {
            isActiveAll = true;
            break;
          }
        }
      }

      setIsHovering(isActiveAll);
    }
  };

  return (
    <Cursor
      className={isHovering ? "cursor-none" : "cursor-pointer"}
      attachToParent
      variants={{
        initial: { scale: 0.3, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.3, opacity: 0 },
      }}
      springConfig={{
        bounce: 0.001,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.15,
      }}
      onPositionChange={handlePositionChange}
    >
      <motion.div
        animate={{
        width: isHovering ? 95 : 0,
        height: isHovering ? 32 : 0,
        }}
        className="flex items-center justify-center bg-[#FF6200]"
      >
        <AnimatePresence>
        {isHovering ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="inline-flex w-full items-center justify-center"
          >
            <div className="inline-flex items-center text-sm text-black dark:text-black">
            [ MEGNÉZÉS ]
            </div>
          </motion.div>
        ) : null}
        </AnimatePresence>
      </motion.div>
    </Cursor>
  );
}
