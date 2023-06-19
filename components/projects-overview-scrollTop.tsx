"use client";

import type { CSSProperties } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollTopBtn() {
  const scrollToTop = () => {
    if (window) window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      style={
        {
          "--gutter": "calc(((100vw - 80rem)/2) + 1rem)",
        } as CSSProperties
      }
      className="fixed bottom-4 right-[max(1rem,var(--gutter))] rounded-full bg-primary p-2 text-2xl transition duration-300 hocus:bg-purple-600"
      onClick={scrollToTop}
    >
      <span className="sr-only">Scroll to Top</span>
      <FaChevronUp />
    </button>
  );
}
