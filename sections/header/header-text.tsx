import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeaderText() {
  const t = useTranslations();

  return (
    <div className="relative flex flex-col text-center md:text-left">
      <h2 className="bg-linear-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-5xl text-transparent tracking-tight">
        {t("header.title")}
      </h2>
      <p className="mt-3 text-2xl tracking-tight">{t("header.description")}</p>

      <div className="z-10 mt-8 flex flex-row justify-center gap-2 md:justify-start">
        <button type="button" className="btn btn-primary min-w-24 rounded-full">
          {t("header.actions.start")}
        </button>
        <button type="button" className="btn btn-soft rounded-full">
          {t("header.actions.github")}
        </button>
      </div>

      <Image
        src="/images/header/blur-circle-cyan.png"
        alt="Blur Circle"
        width={500}
        height={500}
        className="-mr-72 -mb-56 absolute right-full bottom-full opacity-50"
      />
    </div>
  );
}
