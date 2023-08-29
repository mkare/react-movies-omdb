import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  containerClassName?: string;
  size?: "sm" | "md" | "lg";
};

const Input: React.FC<InputProps> = ({
  label,
  error,
  containerClassName,
  className,
  size = "md",
  disabled,
  readOnly,
  placeholder,
  ...rest
}) => {
  const inputClass = classNames(
    "block w-full rounded-md shadow-sm appearance-none border border-gray-300",
    "focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none",
    "transition duration-150 ease-in-out",
    {
      "px-4 py-2 text-sm": size === "sm",
      "px-5 py-3": size === "md",
      "px-6 py-4 text-base": size === "lg",
      "border-red-500": error,
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <div className={containerClassName}>
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className={inputClass}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        {...rest}
      />
      {error && (
        <p className="mt-2 text-sm text-red-500" id="error">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
