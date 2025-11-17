"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import NavLogo from "./nav-logo";

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onToggleMenu: () => void;
};

// ----------------------------------------------------------------------

export default function NavMenu({ open, onToggleMenu }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onToggleMenu}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-80 bg-base-200 transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="min-h-full p-4 py-5">
          <NavLogo isOpen={open} onToggleMenu={onToggleMenu} />
        </div>
      </div>
    </>,
    document.body,
  );
}
