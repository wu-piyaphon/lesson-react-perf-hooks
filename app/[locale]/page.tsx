import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Header from "@/components/header";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);

  setRequestLocale(locale);

  return (
    <main className="flex w-full flex-col">
      <Header />
    </main>
  );
}
