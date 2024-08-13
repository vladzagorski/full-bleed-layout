import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type MainProps = ComponentPropsWithoutRef<"main">;

export function Main({ className, children }: MainProps) {
  return <main className={cn("full-breakout", className)}>{children}</main>;
}
