"use client";

interface NavItem {
  title: string;
  href: string;
}

const navitems: NavItem[] = [
  {
    title: "Kezdőlap",
    href: "/",
  },
  {
    title: "Rólam",
    href: "/",
  },
  {
    title: "Referenciák",
    href: "/",
  },
  {
    title: "Kapcsolat",
    href: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-5 w-full px-12 flex gap-12 flex-row justify-end z-9999">
      <div className="flex flex-row gap-4">
        {navitems.map((navitem, index) => {
          return (
            <div key={index} className="relative w-fit after:absolute after:bg-primary after:bottom-[2px] after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-500">
              <a
                href={navitem.href}
                className="text-black uppercase font-medium"
                style={{ fontSize: 18 }}
              >
                {navitem.title}
              </a>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row gap-2">
        <div className="relative w-fit after:absolute after:bottom-[2px] after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-500">
          <a
            href={"#EN"}
            className="text-primary uppercase font-medium"
            style={{ fontSize: 18 }}
          >
            EN
          </a>
        </div>
        <p          style={{ fontSize: 18 }}>/</p>
        <div className="relative w-fit after:absolute after:bg-primary after:bottom-[2px] after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-500">
          <a
            href={"#hu"}
            className="text-black uppercase font-medium"
            style={{ fontSize: 18 }}
          >
            HU
          </a>
        </div>
      </div>
    </nav>
  );
}
