import React, { useEffect, useRef } from "react";
import classNames from "classnames";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
};

const Modal: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const modalSizeClasses = {
    small: "max-w-xs",
    medium: "max-w-md",
    large: "max-w-lg",
  };

  return (
    <div
      className={classNames(
        "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        {
          hidden: !isOpen,
        }
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        ref={modalRef}
        className={classNames(
          "transform overflow-hidden rounded-lg bg-white p-6 shadow-lg transition-all",
          {
            "-translate-y-full": !isOpen,
          },
          modalSizeClasses[size]
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 id="modal-title" className="text-lg font-bold">
            {title}
          </h2>
          <button
            className="text-gray-400 transition-all hover:text-gray-600"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div id="modal-description">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
