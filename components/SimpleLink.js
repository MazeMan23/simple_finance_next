import Link from "next/link";
import React from "react";

export default function SimpleLink({ href, children, className = "" }) {
  return (
    <Link href={href}>
      <div className={`flex flex-col ${className}`}>
        <div className="text-[rgba(255,255,255,.6)] focus:text-[#ffffff] hover:text-[#ffffff] active:text-[#ffffff]">
          {children}
        </div>
      </div>
    </Link>
  );
}
