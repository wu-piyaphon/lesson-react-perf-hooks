"use client";

import Link from "next/link";
import type { getNavItems } from "@/constants/nav.constant";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

// ----------------------------------------------------------------------

type Props = {
  title: string;
  items: ReturnType<typeof getNavItems>[number]["docs"];
};

// ----------------------------------------------------------------------

export default function DocumentNavItem({ title, items }: Props) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <li>
      <h6 className="font-medium text-white">{title}</h6>
      <ul className="mt-2 space-y-2 border-slate-100 border-l-2 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800">
        {items.map((item) => (
          <li key={item.title} className="relative">
            <Link
              href={item.href}
              className={cn(
                "before:-translate-y-1/2 before:-left-1 w-full pl-3.5 transition-colors duration-200 before:absolute before:top-1/2 before:h-1.5 before:w-1.5 before:rounded-full",
                isActive(item.href)
                  ? "text-sky-500 before:bg-sky-500"
                  : "hover:text-slate-300 hover:before:bg-slate-700",
              )}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
