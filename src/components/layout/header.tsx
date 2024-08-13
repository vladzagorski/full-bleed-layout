import { type ComponentPropsWithoutRef } from "react";
import { Logo } from "./logo";

type HeaderProps = ComponentPropsWithoutRef<"header">;

export function Header({ children }: HeaderProps) {
  return (
    <header className="full-breakout border-b py-6">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <div>{children}</div>
      </div>
    </header>
  );
}
