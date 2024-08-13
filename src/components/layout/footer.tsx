import { type ComponentPropsWithoutRef } from "react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { outlineStyle } from "../sections/section";

type FooterProps = ComponentPropsWithoutRef<"footer">;

export function Footer({ className, children }: FooterProps) {
  return (
    <footer className={cn("full-breakout", outlineStyle(), "bg-black text-white py-12", className)}>
      <div className={cn(outlineStyle(), "flex justify-between")}>
        <Logo />
        <div>{children}</div>
      </div>
    </footer>
  );
}
