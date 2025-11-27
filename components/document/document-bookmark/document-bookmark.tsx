"use client";

import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";
import { getNavItems } from "@/constants/nav.constant";
import { usePathname } from "@/i18n/navigation";
import { findBookmarks, isElementActive, scrollToElement } from "@/utils";
import DocumentBookmarkLink from "./document-bookmark-link";

export default function DocumentBookmark() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const navItems = getNavItems(t);
  const bookmarks = findBookmarks(navItems, pathname);

  const [activeParentHref, setActiveParentHref] = useState<string | null>(null);
  const [activeChildHref, setActiveChildHref] = useState<string | null>(null);

  // ----------------------------------------------------------------------

  const handleBookmarkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      scrollToElement(href);
    },
    [],
  );

  // ----------------------------------------------------------------------

  useEffect(() => {
    const updateActiveBookmarks = () => {
      const scrollPosition = window.scrollY;

      const activeBookmark = bookmarks.findLast((bookmark) =>
        isElementActive(bookmark.href, scrollPosition),
      );

      if (!activeBookmark) {
        setActiveParentHref(null);
        setActiveChildHref(null);
        return;
      }

      setActiveParentHref(activeBookmark.href);

      const activeChild = activeBookmark.children.findLast((child) =>
        isElementActive(child.href, scrollPosition),
      );

      setActiveChildHref(activeChild?.href ?? null);
    };

    updateActiveBookmarks();

    window.addEventListener("scroll", updateActiveBookmarks);

    return () => {
      window.removeEventListener("scroll", updateActiveBookmarks);
    };
  }, [bookmarks]);

  // ----------------------------------------------------------------------

  return (
    <div className="relative hidden xl:block">
      <nav className="sticky top-19 w-56 py-16 xl:pr-6">
        <h6 className="font-medium text-sm text-white">On this page</h6>
        <ol className="mt-4 space-y-3 text-sm">
          {bookmarks.map((parent) => (
            <li key={parent.title}>
              <DocumentBookmarkLink
                href={parent.href}
                title={parent.title}
                isActive={activeParentHref === parent.href}
                onClick={(e) => handleBookmarkClick(e, parent.href)}
              />
              {parent.children.length > 0 && (
                <ol className="mt-2 space-y-3 pl-5">
                  {parent.children.map((child) => (
                    <li key={child.title}>
                      <DocumentBookmarkLink
                        href={child.href}
                        title={child.title}
                        isActive={activeChildHref === child.href}
                        onClick={(e) => handleBookmarkClick(e, child.href)}
                      />
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
