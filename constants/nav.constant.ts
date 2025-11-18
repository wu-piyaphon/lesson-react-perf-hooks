export const NAV_ITEMS = [
  {
    title: "Introduction",
    docs: [
      {
        title: "Getting Started",
        href: "/",
        bookmarks: [
          {
            title: "Quick start",
            href: "#quick-start",
            children: [
              {
                title: "Installing dependencies",
                href: "#installing-dependencies",
              },
              {
                title: "Configuring your project",
                href: "#configuring-your-project",
              },
            ],
          },
          {
            title: "Basic Usage",
            href: "#basic-usage",
            children: [
              {
                title: "Profiling performance",
                href: "#profiling-performance",
              },
              {
                title: "Understanding caching",
                href: "#understanding-caching",
              },
              {
                title: "Predicting performance",
                href: "#predicting-performance",
              },
            ],
          },
          {
            title: "Getting help",
            href: "#getting-help",
            children: [
              {
                title: "Troubleshooting",
                href: "#troubleshooting",
              },
              {
                title: "Join the community",
                href: "#join-the-community",
              },
            ],
          },
        ],
      },
      {
        title: "Installation",
        href: "/docs/installation",
        bookmarks: [],
      },
    ],
  },
  {
    title: "Core Concepts",
    docs: [
      {
        title: "Understanding caching",
        href: "/docs/components",
        bookmarks: [],
      },
      { title: "Predicting performance", href: "/docs/hooks", bookmarks: [] },
      { title: "Profiling performance", href: "/docs/hooks", bookmarks: [] },
      { title: "Optimizing performance", href: "/docs/hooks", bookmarks: [] },
      { title: "Debugging performance", href: "/docs/hooks", bookmarks: [] },
    ],
  },
  {
    title: "Performance Best Practices",
    docs: [
      { title: "Memoization", href: "/docs/hooks", bookmarks: [] },
      { title: "Lazy Loading", href: "/docs/hooks", bookmarks: [] },
    ],
  },
  {
    title: "Performance Optimization",
    docs: [
      { title: "Suspense", href: "/docs/hooks", bookmarks: [] },
      { title: "Code Splitting", href: "/docs/hooks", bookmarks: [] },
    ],
  },
] as const;
