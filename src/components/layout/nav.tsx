import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

type NavProps = ComponentPropsWithoutRef<"nav">;

export function Nav({ className }: NavProps) {
  return (
    <nav className={cn("flex gap-x-6", className)}>
      {navLinks.map((link, index) => (
        <Link key={index} href={link.href} className="font-medium transition-colors hover:text-primary">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
