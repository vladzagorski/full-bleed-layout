import { type ComponentPropsWithoutRef } from "react";
import { Prose } from "../prose";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type SectionProps = {
  title: string;
  description?: string;
} & Omit<ComponentPropsWithoutRef<"section">, "title">;

export const outlineStyle = cva("outline-dashed outline-destructive");
export const spaceStyle = cva("my-8 py-8");

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className={cn(outlineStyle(), spaceStyle(), "flex flex-col gap-y-10")} aria-labelledby={title}>
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
