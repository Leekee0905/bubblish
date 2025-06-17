import type { ReactNode } from "react";
import clsx from "clsx";
interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const base =
    "px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer";
  const styles = {
    primary: "bg-[#cedef2] text-white hover:bg-[#b9c1dc]",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-100",
  };
  return (
    <button
      className={clsx(
        base,
        styles[variant],
        disabled && "opacity-50 cursor-not-allowed"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
