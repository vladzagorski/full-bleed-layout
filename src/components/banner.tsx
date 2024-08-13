import { type ComponentPropsWithoutRef } from "react";
import { Prose } from "./prose";

type BannerProps = {
  title: string;
  description?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "title">;

export function Banner({ title, description, children }: BannerProps) {
  return (
    <div className="full-breakout py-24 my-8 bg-accent">
      <div className="flex flex-col items-center">
        <Prose>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </Prose>

        {children}
      </div>
    </div>
  );
}
