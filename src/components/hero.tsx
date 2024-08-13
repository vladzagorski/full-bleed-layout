import { type ComponentPropsWithoutRef } from "react";
import { Prose } from "./prose";

type HeroProps = {
  title: string;
  description?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "title">;

export function Hero({ title, description, children }: HeroProps) {
  return (
    <section className="full-breakout py-24 mb-8 gap-y-10 bg-accent" aria-labelledby={title}>
      <Prose>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </Prose>

      {children}
    </section>
  );
}
