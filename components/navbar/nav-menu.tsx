"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getNavItems } from "@/constants/nav.constant";
import { cn } from "@/lib/cn";
import DocumentNavItem from "../document/document-nav-page/document-nav-item";
import NavLogo from "./nav-logo";

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onToggleMenu: () => void;
};

// ----------------------------------------------------------------------

export default function NavMenu({ open, onToggleMenu }: Props) {
  const t = useTranslations("nav");

  const navItems = getNavItems(t);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="md:hidden">
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
          "fixed top-0 left-0 z-50 h-screen w-80 bg-slate-900 transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="min-h-full p-4 py-5">
          <NavLogo isOpen={open} onToggleMenu={onToggleMenu} />

          <nav className="mt-5 px-1 text-base lg:text-sm">
            <ul className="space-y-9">
              {navItems.map((item) => (
                <DocumentNavItem
                  key={item.title}
                  title={item.title}
                  items={item.docs}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>,
    document.body,
  );
}
