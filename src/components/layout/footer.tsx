import { type ComponentPropsWithoutRef } from "react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { outlineStyle } from "../utils";

type FooterProps = ComponentPropsWithoutRef<"footer">;

export function Footer({ className, children }: FooterProps) {
  return (
    <footer className={cn("full-breakout", outlineStyle(), "bg-black py-12 text-white", className)}>
      <div className={cn(outlineStyle(), "flex justify-between")}>
        <Logo />
        <div>{children}</div>
      </div>
    </footer>
  );
}
