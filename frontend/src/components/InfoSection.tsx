import { useTranslation } from "react-i18next";

export default function InfoSection() {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center py-12">
      <h1 className="text-[3em] leading-tight tracking-[-2px]">
        {t("homepage_title_two")}
      </h1>
      <h2 className="mt-4 text-lg text-textSecondary">
        {t("homepage_description_two")}
      </h2>
    </div>
  );
}
