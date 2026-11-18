"use client";

import React, { useEffect } from "react";

import PageTransition from "@/components/common/PageTransition";
import CustomCursor from "@/components/common/CustomCursor";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { useTransition } from "@/hook/useTransition";

function ShellContent({ children }: { children: React.ReactNode }) {
  const { isTransitioning, navigateWithTransition } = useTransition();

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<{ href?: string }>;
      if (customEvent.detail?.href) {
        navigateWithTransition(customEvent.detail.href);
      }
    };
    window.addEventListener("trigger-page-transition", handler);
    return () => window.removeEventListener("trigger-page-transition", handler);
  }, [navigateWithTransition]);

  return (
    <>
      <PageTransition show={isTransitioning} />
      <CustomCursor />
      <Navbar />
        <main
            className={`main-content${
                isTransitioning ? " transitioning" : ""
            }`}
        >
            {children}
        </main>
      <Footer />
    </>
  );
}

export default function RouteTransitionShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <ShellContent>{children}</ShellContent>
  );
}