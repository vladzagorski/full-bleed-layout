import { type ComponentPropsWithoutRef } from "react";

type MainProps = ComponentPropsWithoutRef<"main">;

export function Main({ children }: MainProps) {
  return <main className="grid-container full-breakout">{children}</main>;
}
