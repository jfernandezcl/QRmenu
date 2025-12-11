import { useTranslation } from "react-i18next";
import icon_instagram from "../images/icon_instagram.svg";
import icon_facebook from "../images/icon_facebook.svg";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-bgTertiary text-textQuaternary mt-24 py-8">
      <div className="max-w-5xl mx-auto mb-6">
        {/* MISMA ALTURA QUE HEADER */}
        <div className="flex justify-between items-center h-20">
          <h1 className="text-4xl">
            <a href="/home" className="hover:text-buttonPrimary">
              {t("app_name")}
            </a>
          </h1>

          {/* ICONOS AGRUPADOS (como los botones del header) */}
          <div className="flex items-center gap-6">
            <img
              src={icon_instagram}
              alt="instagram"
              className="h-9 w-9 hover:opacity-80 cursor-pointer"
            />
            <img
              src={icon_facebook}
              alt="facebook"
              className="h-8 w-8 hover:opacity-80 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex justify-center items-center py-4">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
