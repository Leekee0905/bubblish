import type { ReactNode } from "react";
import clsx from "clsx";
interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button = ({
  children,
  variant = "primary",
  disabled = false,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) => {
  const base =
    "px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer";
  const styles = {
    primary: "bg-lightblue hover:bg-[#91aecf]",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
  };

  return (
    <button
      className={clsx(
        base,
        styles[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;
