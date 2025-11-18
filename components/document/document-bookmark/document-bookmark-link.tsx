import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/cn";

// ----------------------------------------------------------------------

type Props = {
  href: string;
  title: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

// ----------------------------------------------------------------------

export default function DocumentBookmarkLink({
  href,
  title,
  isActive,
  onClick,
}: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "transition-colors duration-200",
        isActive ? "text-sky-500" : "hover:text-slate-300",
      )}
    >
      {title}
    </Link>
  );
}
