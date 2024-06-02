import Link from "next/link";

export default function NavLink() {
  const navLinks = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Skills",
      href: "/",
    },
    {
      name: "Experience",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];

  return (
    <>
      {navLinks.map((nav) => (
        <li
          key={nav.name}
          className="inline-block p-8 text-xl hover:text-cyan-800"
        >
          <Link href={nav.href}>{nav.name}</Link>
        </li>
      ))}
    </>
  );
}
