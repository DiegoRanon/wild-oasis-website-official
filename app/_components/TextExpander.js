"use client";
import { useState } from "react";
import Logo from "./Logo";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-[#3C546C] border-b border-[#3C546C] leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
      <Logo />
    </span>
  );
}

export default TextExpander;
