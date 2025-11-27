import type { useTranslations } from "next-intl";

export function getNavItems(t: ReturnType<typeof useTranslations>) {
  return [
    {
      title: t("introduction.title"),
      docs: [
        {
          title: t("introduction.getting-started.title"),
          href: "/",
          bookmarks: [
            {
              title: t("introduction.getting-started.bookmarks.before-react"),
              href: "#before-react",
              children: [
                {
                  title: t(
                    "introduction.getting-started.bookmarks.before-react-challenges",
                  ),
                  href: "#before-react-challenges",
                },
              ],
            },
            {
              title: t("introduction.getting-started.bookmarks.basic-react"),
              href: "#basic-react",
              children: [
                {
                  title: t("introduction.getting-started.bookmarks.components"),
                  href: "#components",
                },
                {
                  title: t("introduction.getting-started.bookmarks.hooks"),
                  href: "#hooks",
                },
                {
                  title: t(
                    "introduction.getting-started.bookmarks.virtual-dom",
                  ),
                  href: "#virtual-dom",
                },
              ],
            },
          ],
        },
        {
          title: t("introduction.installation.title"),
          href: "/docs/installation",
          bookmarks: [],
        },
      ],
    },
  ] as const;
}
