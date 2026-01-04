import TextScrollBase from "../components/ui/TextScrollBase";

export default function AboutMe() {
  return (
    <section className="gap-12 flex flex-col">
        <h3 className="uppercase">Rólam</h3>
      <TextScrollBase
      className="w-full max-w-3xl mx-auto text-[24px]/[28px] font-semibold"
        node={
          <div>
            <p>
              Olyan márkáknak szeretnék segíteni, akik nem akarnak beleolvadni a
              zajba – kis és közepes kreatív vállalkozásoknak, startupoknak vagy
              akár kulturális projekteknek. Főleg weboldalakat tervezek,
              emellett az arculat kialakításában is segítek, hogy a logótól a
              teljes oldal kinézetéig minden egységes legyen.
            </p>
            <br/>
            <br/>
            <p>
              Budapesten élek, és különösen szeretem, ha egy projektben van tér
              kísérletezni – új betűtípusokkal, elrendezésekkel vagy finom
              játékokkal – miközben a végeredmény tiszta és könnyen használható
              marad.
            </p>
        </div>
        }
        />
    </section>
  );
}
