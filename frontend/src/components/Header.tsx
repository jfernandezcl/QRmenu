import { useTranslation } from "react-i18next";
import undraw_breakfast from "../images/undraw_breakfast.svg"


export default function Header() {
  const {t, i18n} = useTranslation();

  return (
  <header className="w-full bg-[#025963] shadow-md mb-8 relative">
  <div className="flex justify-between items-center px-4 py-2">

    {/* IZQUIERDA */}
    <h1 className="text-white text-xl font-bold flex items-center gap-3">
      <img src={undraw_breakfast} alt="logo" className="h-14 w-14" />
      <a href="/home" className="hover:text-gray-300">
        {t("app_name")}
      </a>
    </h1>

    {/* DERECHA */}
    <div className="flex gap-2">
      <button
        className="px-3 py-1 rounded-lg border border-[#025963] bg-gray-300 font-medium text-[#025963]"
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>

      <button
        className="px-3 py-1 rounded-lg border border-[#025963] bg-gray-300 font-medium text-[#025963]"
        onClick={() => i18n.changeLanguage("es")}
      >
        ES
      </button>
    </div>

  </div>
</header>

  )
}