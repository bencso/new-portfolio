"use client";

import { FloatingInput } from "@/components/ui/FloatingInput";
import { useState } from "react";
import { FloatingTextarea } from "@/components/ui/FloatingTextArea";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
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
            <FloatingTextarea label="PROJEKTRŐL LEÍRÁS" value={message} onChange={setMessage}/>
            <button type="submit" title="Küldés" className="px-12 py-3 bg-primary w-fit text-end">
              Küldés
            </button>
            </form>
        </div>
      </div>
    </footer>
  );
}
