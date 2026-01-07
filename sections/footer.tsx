"use client";

import { FloatingInput } from "@/components/ui/FloatingInput";
import { useState } from "react";
import { FloatingTextarea } from "@/components/ui/FloatingTextArea";

interface Social {
  title: string;
  link: string;
}

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const socials: Social[] = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/bencsoworks/",
    },
    {
      title: "Dribble",
      link: "https://dribbble.com/Bencsoo",
    },
  ];
  return (
    <footer className="gap-2 px-12 py-12 flex flex-col bg-black">
      <div className="border-b pb-2 border-white flex-row flex">
        <h4 className="uppercase text-white">ÖN IS LEHET A KÖVETKEZŐ</h4>
      </div>
      <div className="flex flex-col py-8 gap-12">
        <div className="flex flex-col *:leading-none gap-1">
          <p
            className="text-end text-[#B7B7B7] font-semibold"
            style={{ fontSize: 26 }}
          >
            Van egy projekt ötlete?
          </p>
          <p
            className="text-end text-white font-semibold"
            style={{ fontSize: 26 }}
          >
            Készítsünk együtt valami szépet!{" "}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="gap-4 flex flex-col">
            <div className="grid grid-cols-2">
              <p
                className="text-[#B7B7B7] uppercase font-semibold w-1/2"
                style={{ fontSize: 16 }}
              >
                MENNYI IDŐ, ÉS MENNYI PÉNZ?
              </p>
              <p
                className="text-start text-white font-medium leading-none"
                style={{ fontSize: 20 }}
              >
                Átlagos projekt: 150–250 000 Ft · 2–12 hét (a pontos idő és
                összeg a projekt méretétől függ)
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p
                className="text-[#B7B7B7] uppercase font-semibold"
                style={{ fontSize: 16 }}
              >
                VÁLASZIDŐ
              </p>
              <p
                className="text-start text-white font-medium leading-none"
                style={{ fontSize: 20 }}
              >
                Amennyiben elérhető vagyok, igyekszem 24 órán belül válaszolni.
              </p>
            </div>
          </div>
          <form className="flex flex-col gap-6 justify-end items-end">
            <FloatingInput
              label="Ön neve"
              type="text"
              value={name}
              onChange={setName}
              required={true}
            />
            <FloatingInput
              label="Ön EMAIL CÍM-e"
              type="email"
              value={email}
              onChange={setEmail}
              required={true}
            />
            <FloatingInput
              label="Ön MENNYIT SZÁNNA A PROJEKTRE? (HUF)"
              type="number"
              value={price}
              onChange={setPrice}
              required={true}
            />
            <FloatingTextarea
              label="PROJEKTRŐL LEÍRÁS"
              value={message}
              onChange={setMessage}
            />
            <button
              type="submit"
              title="Küldés"
              className="px-12 py-2 bg-primary w-fit text-end font-semibold text-black"
              style={{ fontSize: 20 }}
            >
              Küldjük el!
            </button>
          </form>
        </div>

        <div className="space-y-[0px]">
          <div className="flex flex-col gap-0">
            {socials.map((social) => {
              return (
                <div className="relative w-fit after:absolute after:bg-white after:bottom-[2px] after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-500">
                  <a
                    href={social.link}
                    className="text-white uppercase font-medium"
                    style={{ fontSize: 18 }}
                  >
                    {social.title}
                  </a>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row align-end justify-between">
            <div className="flex flex-col -space-y-[25px]">
              <p className="text-white font-black text-[100px] leading-none">
                BENCSO
              </p>
              <p className="text-white font-black text-[100px] leading-none">
                STUDIO©<span className="text-primary font-semibold">2025</span>
              </p>
            </div>
            <div className="flex flex-col justify-end text-end gap-0">
              <p className="text-[#B7B7B7] uppercase font-semibold">
                Írjon nekem:
              </p>
              <div className="relative w-fit after:absolute after:bg-white after:bottom-[2px] after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-500">
                <a
                  href={"mailto:hello@bencso.hu"}
                  className="text-white leading-none font-medium"
                  style={{ fontSize: 26 }}
                >
                  hello@bencso.hu
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <div className="relative w-fit after:absolute after:bg-white after:bottom-[2px] after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-500">
                <a
                  href={"/adatvedelem"}
                  className="text-white uppercase font-medium"
                  style={{ fontSize: 18 }}
                >
                  Adatvédelem
                </a>
              </div>

              <div className="relative w-fit after:absolute after:bg-white after:bottom-[2px] after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-500">
                <a
                  href={"/sutik"}
                  className="text-white uppercase font-medium"
                  style={{ fontSize: 18 }}
                >
                  Sütik
                </a>
              </div>
            </div>
            <div className="relative w-fit after:absolute after:bg-white after:bottom-[2px] after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-500">
              <a
                href={"#top"}
                className="text-white uppercase font-medium"
                style={{ fontSize: 18 }}
              >
                Fel a tetejére
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
