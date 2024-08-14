import { type ComponentPropsWithoutRef } from "react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

type HeaderProps = ComponentPropsWithoutRef<"header">;

export function Header({ className, children }: HeaderProps) {
  return (
    <header className={cn("full-breakout", "py-6", className)}>
      <div className={cn("flex justify-between")}>
        <Logo />
        <div>{children}</div>
      </div>
    </header>
  );
}
