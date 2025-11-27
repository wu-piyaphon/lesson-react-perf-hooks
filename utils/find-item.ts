import type { getNavItems } from "@/constants/nav.constant";

export function findGroupDocument(
  navItems: ReturnType<typeof getNavItems>,
  pathname: string,
) {
  return navItems.find((item) =>
    item.docs.some((doc) => doc.href === pathname),
  );
}

export function findDocument(
  navItems: ReturnType<typeof getNavItems>,
  pathname: string,
) {
  return findGroupDocument(navItems, pathname)?.docs.find(
    (doc) => doc.href === pathname,
  );
}

export function findBookmarks(
  navItems: ReturnType<typeof getNavItems>,
  pathname: string,
) {
  return findDocument(navItems, pathname)?.bookmarks ?? [];
}
