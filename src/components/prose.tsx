import { type ComponentPropsWithoutRef } from "react";

type ProseProps = ComponentPropsWithoutRef<"div">;

export function Prose({ children }: ProseProps) {
  return <div className="prose">{children}</div>;
}
