"use client";

import { HoverCursor } from "@/components/ui/HoverCursor";
import { useRef } from "react";

interface Work {
  title: string;
  year: number | Date;
  role: string;
  img: string;
}

// TODO: Hovernél a kép kap egy kis sárha opacitys dolgot (#FF6200 20%), illetve lesz egy hover cursor (megnézés szöveggel),
// TODO: Illetve kell még egy olyan hogy hovernél a role átváltozik megnézésre stagger animációval

const works: Work[] = [
  {
    title: "PROJEKT 1",
    year: 2025,
    role: "Webfejlesztés",
    img: "/projects/project2.png",
  },
  {
    title: "PROJEKT 2",
    year: 2026,
    role: "Webfejlesztés",
    img: "/projects/testproject.png",
  },
  {
    title: "PROJEKT 3",
    year: 2024,
    role: "Webfejlesztés",
    img: "/projects/testproject.png",
  },
  {
    title: "PROJEKT 4",
    year: 2025,
    role: "Webfejlesztés",
    img: "/projects/testproject.png",
  },
];

export default function OurWorks() {
  const { minDate, maxDate } = {
    minDate: works.sort((a, b) => {
      return typeof a.year === "number" && typeof b.year === "number"
        ? a.year - b.year
        : a.year instanceof Date && b.year instanceof Date
        ? a.year.getTime() - b.year.getTime()
        : 0;
    })[0].year,
    maxDate: works.sort((a, b) => {
      return typeof a.year === "number" && typeof b.year === "number"
        ? b.year - a.year
        : a.year instanceof Date && b.year instanceof Date
        ? b.year.getTime() - a.year.getTime()
        : 0;
    })[0].year,
  };
  const workRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section className="gap-2 px-12 py-12 flex flex-col bg-black">
      <div className="border-b pb-2 border-white flex-row flex">
        <h4 className="uppercase text-white">Munkáim</h4>
        <h4 className="uppercase text-white text-end">
          {minDate.toString()}-{maxDate.toString()}
        </h4>
      </div>
      <div className="grid grid-cols-4 gap-4 pt-12">
        {works
          .sort((a, b) => {
            return typeof a.year === "number" && typeof b.year === "number"
              ? a.year - b.year
              : a.year instanceof Date && b.year instanceof Date
              ? a.year.getTime() - b.year.getTime()
              : 0;
          })
          .map((work, index) => {
            return (
                <div key={index} className="gap-4 flex flex-col group">
                <HoverCursor targetRef={workRef} />
                <div 
                  className="relative overflow-hidden"
                  ref={(el) => {
                  if (workRef.current) {
                    workRef.current[index] = el;
                  }
                  }}
                >
                  <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#FF6200] opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300" />
                </div>
                <div className="gap-0 flex flex-col">
                  <h4 className="uppercase mb-0 mt-0 pt-0 pb-0 text-white">
                  {work.title} | {work.year.toString()}
                  </h4>
                  <h4 className="uppercase mb-0 mt-0 pt-0 pb-0 text-white">
                  {work.role}
                  </h4>
                </div>
                </div>
            );
          })}
      </div>
    </section>
  );
}
