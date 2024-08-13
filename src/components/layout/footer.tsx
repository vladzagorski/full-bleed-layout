import { type ComponentPropsWithoutRef } from "react";
import { Logo } from "./logo";

type FooterProps = ComponentPropsWithoutRef<"footer">;

export function Footer({ children }: FooterProps) {
  return (
    <footer className="full-breakout bg-black text-white py-12">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div>{children}</div>
      </div>
    </footer>
  );
}
