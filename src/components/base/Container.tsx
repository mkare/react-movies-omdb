import React from "react";
import classNames from "classnames";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const containerClass = classNames("container", className);

  return <div className={containerClass}>{children}</div>;
};

export default Container;
