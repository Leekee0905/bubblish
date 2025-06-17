import type { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <button className="rounded-lg border-2 cursor-pointer px-4 py-2">
      {children}
    </button>
  );
};

export default Button;
