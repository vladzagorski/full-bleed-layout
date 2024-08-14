import { type ComponentPropsWithoutRef } from "react";
import { Prose } from "../prose";
import { cn } from "@/lib/utils";
import { outlineStyle, sectionSpaceStyle } from "../utils";

type BannerProps = {
  justify?: "start" | "center" | "end";
  title: string;
  description?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "title">;

export function Banner({ justify = "center", title, description, children }: BannerProps) {
  return (
    <section className={cn("full-breakout", outlineStyle(), "bg-accent")} aria-labelledby={title}>
      <div
        className={cn(outlineStyle(), sectionSpaceStyle(), "flex flex-row", {
          [`justify-${justify}`]: justify,
        })}
      >
        <Prose>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </Prose>
      </div>

      {children}
    </section>
  );
}
