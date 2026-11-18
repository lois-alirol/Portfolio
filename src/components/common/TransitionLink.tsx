
"use client";

import { useTransition } from "@/hook/useTransition";
import React from "react";

interface TransitionLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function TransitionLink({
                                         href,
                                         children,
                                         onClick,
                                         ...props
                                       }: TransitionLinkProps) {
  const { navigateWithTransition } = useTransition();

  const normalizedHref = href.startsWith("/")
      ? href
      : `/${href}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.(e);
    navigateWithTransition(normalizedHref);
  };

  return (
      <a
          href={normalizedHref}
          onClick={handleClick}
          {...props}
      >
        <span>{children}</span>
      </a>
  );
}
