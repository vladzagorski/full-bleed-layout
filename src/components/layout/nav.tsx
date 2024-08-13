import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type NavProps = ComponentPropsWithoutRef<"nav">;

export function Nav({ className }: NavProps) {
  return (
    <nav className={cn("flex gap-x-6", className)}>
      <Link href="/">Blog</Link>
      <Link href="/">About</Link>
      <Link href="/">Contact</Link>
    </nav>
  );
}
