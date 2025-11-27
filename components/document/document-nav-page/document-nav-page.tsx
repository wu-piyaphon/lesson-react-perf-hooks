import { getTranslations } from "next-intl/server";
import { getNavItems } from "@/constants/nav.constant";
import DocumentNavItem from "./document-nav-item";

export default async function DocumentNavPage() {
  const t = await getTranslations("nav");
  const navItems = getNavItems(t);

  return (
    <div className="hidden lg:block lg:flex-none">
      <div className="sticky top-19 h-fit py-16 pr-8 pl-0 xl:pr-16">
        <nav className="text-base lg:text-sm">
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
  );
}
