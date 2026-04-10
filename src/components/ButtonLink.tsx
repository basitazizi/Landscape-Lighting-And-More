import { Link, type LinkProps } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonLinkProps = LinkProps & {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export default function ButtonLink({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "border-gold bg-gold text-black shadow-[0_0_34px_rgba(255,213,79,0.34)] hover:bg-white hover:border-white"
      : "border-white/20 bg-white/[0.03] text-white hover:border-gold/70 hover:text-gold";

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-lg border px-5 py-3 text-center text-sm font-semibold uppercase transition duration-300 ${styles} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
