"use client";

export default function Hero() {
  return (
    <section className="min-h-screen px-12 py-12 overflow-hidden flex flex-col justify-between" id="top">
      <div>
        <p className="w-[350px] font-semibold text-[24px]/7">
          <span className="text-primary">BRANDING</span> ÉS{" "}
          <span className="text-primary">WEBDESIGN</span> KREATÍV
          VÁLLALKOZÁSOKNAK, AKIK KITŰNNI SZERETNÉNEK.
        </p>
      </div>
      <div className="flex flex-row justify-between items-end">
        <div className="flex flex-col -space-y-[25px]">
          <p className="text-primary font-black text-[100px] leading-none">
            BENCSO
          </p>
          <p className="text-primary font-black text-[100px] leading-none">
            STUDIO
          </p>
        </div>
        <img
          width={400}
          height={600}
          src={"/heroImg.png"}
          className="saturate-0 hover:saturate-100 transition-all duration-300"
        />
      </div>
    </section>
  );
}
