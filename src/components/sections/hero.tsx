import { type ComponentPropsWithoutRef } from "react";
import { Prose } from "../prose";
import { cn } from "@/lib/utils";
import { outlineStyle, spaceStyle } from "./section";

type HeroProps = {
  title: string;
  description?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "title">;

export function Hero({ title, description, children }: HeroProps) {
  return (
    <section className={cn("full-breakout", outlineStyle(), "mt-0 bg-accent")} aria-labelledby={title}>
      <div className={cn(outlineStyle(), spaceStyle(), "flex flex-col")}>
        <Prose>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </Prose>

        {children}
      </div>
    </section>
  );
}
