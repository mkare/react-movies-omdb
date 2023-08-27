import React from "react";
import classnames from "classnames";

type BadgeProps = {
  variant?: "primary" | "info" | "success" | "danger" | "warning" | "default" | "neutral";
  href?: string;
  as?: "a" | "span";
  className?: string;
  children: React.ReactNode;
};

const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  href,
  as = "span",
  className,
  children,
}) => {
  const classes = classnames(
    "inline-block rounded-lg py-1 text-sm font-semibold",
    variant === "neutral" ? "px-2" : "px-3",
    variantClasses[variant],
    className
  );

  const Element = as === "a" ? "a" : "span";

  return (
    <Element href={href} className={classes}>
      {children}
    </Element>
  );
};

const variantClasses = {
  primary: "bg-blue-500 text-white",
  info: "bg-teal-500 text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-white",
  default: "bg-gray-300 text-gray-700",
  neutral: "bg-white text-gray-700",
};

export default Badge;
