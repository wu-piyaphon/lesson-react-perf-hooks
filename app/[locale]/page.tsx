import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Container from "@/components/container";
import {
  DocumentContent,
  DocumentNavBookmark,
  DocumentNavPage,
} from "@/components/document";
import HeaderSection from "@/sections/header/header-section";

type Props = {
  params: Promise<{ locale: string }>;
};

export default function Home({ params }: Props) {
  const { locale } = use(params);

  const t = useTranslations("introduction");

  setRequestLocale(locale);

  return (
    <>
      <HeaderSection />

      <Container className="relative flex w-full flex-row pt-0">
        <DocumentNavPage />
        <DocumentContent>
          <div id="getting-started">
            <p className="mb-1 text-primary">{t("topic")}</p>
            <h2 className="mb-6">{t("getting-started.title")}</h2>
            <p>{t("getting-started.p1")}</p>
          </div>
        </DocumentContent>
        <DocumentNavBookmark />
      </Container>
    </>
  );
}
