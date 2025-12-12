import { useTranslation } from "react-i18next";
import undraw_special_fool from "../images/undraw_special_fool.svg";

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center px-4 py-2 mt-20 md:mt-32 pb-20 gap-12 md:gap-0">
      <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left">
        <h1 className="text-xl sm:text-2xl md:text-[2em] leading-tight tracking-[-2px] max-w-md mx-auto md:mx-0">
          {t("homepage_title")}
        </h1>

        <h2 className="mt-4 text-sm sm:text-base max-w-md text-textSecondary mx-auto md:mx-0">
          {t("homepage_description")}
        </h2>

        <button className="mt-8 px-6 py-2 text-textQuaternary bg-buttonPrimary rounded hover:bg-hoverPrimary">
          {t("buttons.start_now")}
        </button>
      </div>

      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={undraw_special_fool}
          alt="logo"
          className="max-w-[380px] sm:max-w-[300px] w-full h-auto"
        />
      </div>
    </div>
  );
}
