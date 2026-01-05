import ServicesStack from "@/components/ui/ScrollStack";


export default function Services() {
  return (
    <section className="gap-2 px-12 flex flex-col">
      <h4 className="uppercase pb-2 sticky top-0 pt-4 z-50 -mb-2  border-b border-[#575757] bg-white">Szolgáltatásaim</h4>
      <ServicesStack/>
    </section>
  );
}
