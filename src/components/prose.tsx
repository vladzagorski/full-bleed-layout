import { cn } from "@/lib/utils";
import { type ComponentPropsWithoutRef } from "react";

type ProseProps = ComponentPropsWithoutRef<"div">;

export function Prose({ className, children }: ProseProps) {
  return <div className={cn("prose", className)}>{children}</div>;
}
