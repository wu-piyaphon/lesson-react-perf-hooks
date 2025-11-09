import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();

  return (
    <section className="container mx-auto grid grid-cols-1 items-center justify-center gap-x-8 gap-y-16 px-4 py-32 lg:grid-cols-2 lg:px-8">
      <div className="flex flex-col">
        <h2 className="bg-linear-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-5xl text-transparent tracking-tight">
          {t("header.title")}
        </h2>
        <p className="mt-3 text-2xl tracking-tight">
          {t("header.description")}
        </p>

        <div className="mt-8 flex flex-row gap-2">
          <button
            type="button"
            className="btn btn-primary min-w-24 rounded-full"
          >
            {t("header.actions.start")}
          </button>
          <button type="button" className="btn btn-soft rounded-full">
            {t("header.actions.github")}
          </button>
        </div>
      </div>
    </section>
  );
}
