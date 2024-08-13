import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type NavProps = ComponentPropsWithoutRef<"nav">;

export function Nav(props: NavProps) {
  return (
    <nav className="flex gap-x-6">
      <Link href="/">Blog</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
    </nav>
  );
}
