import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

interface Client {
  id: string;
  name: string;
  work: string;
  review: string;
  date: number;
}

const clients: Client[] = [
  {
    id: "01",
    name: "Ráadás zenekar",
    work: "Weboldal frissítés",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada odio eget nisl luctus, id efficitur turpis porttitor. Sed vestibulum dui euismod bibendum consectetur. Aenean sagittis massa ac ligula suscipit auctor. Nullam in elementum leo, vel bibendum lorem. Aliquam eu convallis metus. Sed scelerisque, massa quis pellentesque consectetur, lectus enim scelerisque justo, et auctor nibh magna a odio. Morbi ligula lacus, ultricies placerat lectus a, aliquet malesuada quam. ",
    date: 2025,
  },
  {
    id: "02",
    name: "Ráadás zenekar",
    work: "Weboldal frissítés",
    review: "Nagyon jó!",
    date: 2025,
  },
];

export function OurClients() {
  return (
    <section className="gap-12 flex flex-col">
      <div className="px-12">
        <h4 className="uppercase pb-2 sticky top-0 pt-4 z-50 -mb-2  border-b border-[#575757] bg-white">
          AKIK MÁR MEGBÍZTAK BENNEM
        </h4>
      </div>
      <Accordion type="single" className="w-full">
        {clients.map((client) => (
          <AccordionItem
            value={client.id}
            key={client.id}
            className="data-[state=open]:text-white data-[state=open]:bg-black"
          >
            <AccordionTrigger className="data-[state=open]:text-white px-12 py-6 hover:no-underline cursor-pointer [data-slot=accordion-trigger] [&>svg]:hidden">
              <div className="flex flex-row gap-4 w-full items-center">
                <div className="flex flex-row flex-1 gap-12 items-center">
                  <p className="uppercase text-start" style={{ fontSize: 16 }}>
                    {client.id}
                  </p>
                  <p className="text-start uppercase" style={{ fontSize: 30 }}>
                    {client.name}
                  </p>
                </div>
                <div>
                  <p className="uppercase text-end" style={{ fontSize: 16 }}>
                    {client.date}
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-0 items-end flex flex-col w-full">
              <div
                className="grid pt-10 gap-10 ps-28 lg:gap-30 md:grid-cols-2 px-12 pb-20 w-full"
                key="01"
              >
                <div className="space-y-0 pr-6 text-lg">
                  <p
                    className="text-[#B7B7B7] uppercase font-semibold"
                    style={{ fontSize: 16 }}
                  >
                    {" "}
                    kérés
                  </p>
                  <p className="text-justify">{client.work}</p>
                </div>
                <div className="space-y-0 pr-6 text-lg">
                  <p
                    className="text-[#B7B7B7] uppercase font-semibold"
                    style={{ fontSize: 16 }}
                  >
                    {" "}
                    vélemény
                  </p>
                  <p className="text-justify">{client.review}</p>
                </div>
              </div>
              <Button className="rounded-r-none rounded-b-none h-12 text-md cursor-pointer px-7">
                Kezdjük el a közös munkát!
              </Button>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
