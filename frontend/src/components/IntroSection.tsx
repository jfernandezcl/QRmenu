import { useTranslation } from "react-i18next";
import undraw_special_fool from "../images/undraw_special_fool.svg";

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto flex items-center px-4 py-2 mt-32 pb-32">
      {/* izquierda */}
      <div className="w-1/2 pr-8">
        <h1 className="text-[2em] leading-tight tracking-[-2px] max-w-md">
          {t("homepage_title")}
        </h1>

        <h2 className="mt-4 max-w-md text-textSecondary">
          {t("homepage_description")}
        </h2>

        <button className="mt-8 px-6 py-2 text-textQuaternary bg-buttonPrimary rounded hover:bg-hoverPrimary">
          {t("buttons.start_now")}
        </button>
      </div>

      {/* derecha */}
      <div className="w-1/2 flex justify-end">
        <img src={undraw_special_fool} alt="logo" className="w-82 h-auto" />
      </div>
    </div>
  );
}
