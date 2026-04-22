import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-red-700 text-white p-4 flex items-center justify-between flex-wrap gap-3">
      <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-90 transition">
        Michael Johnson
      </Link>
      <nav className="flex items-center gap-5 text-sm flex-wrap">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:underline underline-offset-2 transition">
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
