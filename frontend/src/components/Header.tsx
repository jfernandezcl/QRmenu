import { useTranslation } from "react-i18next";
import undraw_breakfast from "../images/undraw_breakfast.svg";
import LanguageModalButton from "./LanguageModalButton.tsx";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="w-full bg-background mb-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2 h-20">
        {/* Logo + App name */}
        <div className="flex items-center gap-12 text-4xl font-normal">
          <img src={undraw_breakfast} alt="logo" className="h-14 w-14" />
          <h1 className="text-textPrimary">
            <a href="/home" className="hover:text-gray-300">
              {t("app_name")}
            </a>
          </h1>
        </div>

        {/* Botones de login, register y lenguaje */}
        <div className="flex gap-12">
          <LanguageModalButton />
          <button>{t("login")}</button>
          <button className="px-4 py-3 text-textQuaternary bg-buttonPrimary rounded">
            {t("register")}
          </button>
        </div>
      </div>
    </header>
  );
}
