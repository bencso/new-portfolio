import ServicesStack from "@/components/ui/ScrollStack";


export default function Services() {
  return (
    <section className="gap-2 flex flex-col">
      <h4 className="uppercase sticky top-0 pt-4 z-50 -mb-2 bg-white pb-4">Szolgáltatásaim</h4>
      <ServicesStack/>
    </section>
  );
}
