import { type ComponentPropsWithoutRef } from "react";
import { Prose } from "../prose";
import { cn } from "@/lib/utils";
import { outlineStyle, sectionSpaceStyle } from "../utils";

type SectionProps = {
  title: string;
  description?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "title">;

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className={cn(outlineStyle(), sectionSpaceStyle(), "flex flex-col gap-y-10")} aria-labelledby={title}>
      <div className="self-center">
        <Prose>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </Prose>
      </div>

      {children}
    </section>
  );
}
