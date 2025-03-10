// components/ui/background-lines.jsx
import React from "react";

export const BackgroundLines = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Background lines effect */}
      <div className="absolute inset-0 bg-grid-black/[0.05] dark:bg-grid-white/[0.1]" />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};