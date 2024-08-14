import { type ComponentPropsWithoutRef } from "react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

type FooterProps = ComponentPropsWithoutRef<"footer">;

export function Footer({ className, children }: FooterProps) {
  return (
    <footer className={cn("full-breakout", "bg-black py-12 text-white", className)}>
      <div className={cn("flex justify-between")}>
        <Logo />
        <div>{children}</div>
      </div>
    </footer>
  );
}
