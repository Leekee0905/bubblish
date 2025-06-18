import clsx from "clsx";
import type { ReactNode } from "react";

interface BoldTextProps {
  children: ReactNode;
  className?: string;
}
const BoldText = ({ children, className }: BoldTextProps) => (
  <p className={clsx("font-bold", className)}>{children}</p>
);

export default BoldText;
