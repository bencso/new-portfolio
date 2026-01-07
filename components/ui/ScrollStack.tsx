"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";

interface Service {
  title: string;
  services: string[];
  description?: string;
  src: string;
  reference?: string;
}

const services: Service[] = [
  {
    title: "Webfejlesztés",
    services: [
      "DRÓTVÁZAK ÉS PROTOTÍPUSOK",
      "UI ELEMEK ÉS KOMPONENSEK",
      "DESIGN RENDSZER",
    ],
    description:
      "A cél, hogy a látogató már az első kattintásnál értse, mi merre van, szívesen használja az oldalt, és könnyen eljusson odáig, amit Ön szeretne.",
    src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    reference: "PROJEKT 2 • VISUALARTISTS",
  },
  {
    title: "Service 2",
    services: [
      "DRÓTVÁZAK ÉS PROTOTÍPUSOK",
      "UI ELEMEK ÉS KOMPONENSEK",
      "DESIGN RENDSZER",
    ],
    description:
      "A cél, hogy a látogató már az első kattintásnál értse, mi merre van, szívesen használja az oldalt, és könnyen eljusson odáig, amit Ön szeretne.",
    src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    reference: "PROJEKT 2 • VISUALARTISTS",
  },
  {
    title: "Service 3",
    services: [
      "DRÓTVÁZAK ÉS PROTOTÍPUSOK",
      "UI ELEMEK ÉS KOMPONENSEK",
      "DESIGN RENDSZER",
    ],
    description:
      "A cél, hogy a látogató már az első kattintásnál értse, mi merre van, szívesen használja az oldalt, és könnyen eljusson odáig, amit Ön szeretne.",
    src: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
];

const ServicesStackCard = ({
  i,
  service,
  progress,
  range,
  targetScale,
}: {
  i: number;
  service: Service;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

    const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className={"sticky flex items-start justify-center color-dark-gray"}
      style={{ top: `calc(45px + ${i * 120}px)` }}
    >
      <motion.div
        style={{
          scale,
        }}
        className={`${
          i > 0 && "border-t border-[#575757]"
        } w-full justify-between relative flex flex-row overflow-hidden pt-4 bg-white`}
      >
        <div className="pb-12 min-w-3/4 max-w-3/4">
          <p className="mb-.5" style={{ fontSize: 14 }}>
            0{i + 1}
          </p>
          <h2 className="mb-4 lg:mb-4 xl:mb-7 xxl:mb-12 min-w-2/3 break-all max-w-2/3 text-wrap text-ellipsis">
            {service.title}
          </h2>
          <ol className="list-none mb-4 lg:mb-4 xl:mb-7">
            {service.services.map((service, index) => {
              return (
                <li
                  key={index}
                  style={{
                    fontWeight: 800,
                    fontSize: 20,
                  }}
                  className="before:content-['/']"
                >
                  {" "}
                  {service}
                </li>
              );
            })}
          </ol>
          <p className="w-2/3" style={{ fontSize: 20, lineHeight: 1.3 }}>
            {service.description}
          </p>
        </div>
        <div className="content-end pt-12 min-w-1/4 max-w-1/4">
          <p className="pb-2 text-end" style={{ fontSize: 16 }}>
            {service.reference}
          </p>
          <img
            src={service.src}
            alt={service.title}
            className="h-[450px] w-100 object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesStack() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  return (
    <ReactLenis root>
      <div ref={container}>
        {services.map((service, i) => {
          const isLastItem = i === services.length - 1;
          return (
            <ServicesStackCard
              key={`service_${i}`}
              i={i}
              service={service}
              progress={scrollYProgress}
              range={[0, 1]}
              targetScale={isLastItem ? 1 : 1}
            />
          );
        })}
      </div>
    </ReactLenis>
  );
}
