import React from "react";
import classNames from "classnames";

type TitleProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "primary" | "secondary" | "tertiary";
  className?: string;
};

const Title: React.FC<TitleProps> = ({
  children,
  level = 1,
  variant = "primary",
  className,
}) => {
  const TagName = `h${level}` as keyof JSX.IntrinsicElements;
  const titleClass = classNames(
    "font-bold",
    {
      "text-5xl": level === 1,
      "text-4xl": level === 2,
      "text-3xl": level === 3,
      "text-2xl": level === 4,
      "text-xl": level === 5,
      "text-lg": level === 6,
      "text-primary-600": variant === "primary",
      "text-secondary-600": variant === "secondary",
      "text-slate-50": variant === "tertiary",
    },
    className
  );

  return <TagName className={titleClass}>{children}</TagName>;
};

export default Title;
