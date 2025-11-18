import { NAV_ITEMS } from "@/constants/nav.constant";

export function findGroupDocument(pathname: string) {
  return NAV_ITEMS.find((item) =>
    item.docs.some((doc) => doc.href === pathname),
  );
}

export function findDocument(pathname: string) {
  return findGroupDocument(pathname)?.docs.find((doc) => doc.href === pathname);
}

export function findBookmarks(pathname: string) {
  return findDocument(pathname)?.bookmarks ?? [];
}
