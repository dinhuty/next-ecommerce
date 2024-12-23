import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ children, ...props }: Props) {
  return (
    <div
      className={`container mx-auto ${props.className ? props.className : ""}`}
    >
      {children}
    </div>
  );
}
