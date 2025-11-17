"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import GitHubIcon from "../svg-icons/github-icon";
import NavLogo from "./nav-logo";
import NavMenu from "./nav-menu";

// ----------------------------------------------------------------------

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();

  // ----------------------------------------------------------------------

  const handleChangeLocale = () => {
    router.replace(pathname, {
      locale: locale === "en" ? "th" : "en",
      scroll: false,
    });
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ----------------------------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ----------------------------------------------------------------------

  return (
    <div
      className={cn(
        "navbar sticky top-0 z-20 flex items-center justify-between bg-transparent px-4 py-5 transition duration-500 md:px-8",
        isTop ? "bg-transparent" : "bg-slate-900/90 backdrop-blur-sm",
      )}
    >
      <NavLogo isOpen={isOpen} onToggleMenu={handleToggleMenu} />

      <div className="flex items-center gap-8">
        <label className="swap transition-colors duration-200 hover:text-white">
          <input
            type="checkbox"
            checked={locale === "en"}
            onChange={handleChangeLocale}
          />
          <div className="swap-on">EN</div>
          <div className="swap-off">TH</div>
        </label>

        <Link
          href="https://github.com/wu-piyaphon/lesson-react"
          target="_blank"
        >
          <GitHubIcon className="h-6 w-6 fill-slate-400 transition-colors duration-200 hover:fill-white" />
        </Link>
      </div>

      <NavMenu open={isOpen} onToggleMenu={handleToggleMenu} />
    </div>
  );
}
