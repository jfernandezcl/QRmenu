import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import undraw_breakfast from "../images/undraw_breakfast.svg";

export default function HeaderLetter() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: "en" | "es") => {
    i18n.changeLanguage(lng);
  };

  const navigate = useNavigate();

  return (
    <header>
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2 h-20">
        <div className="flex items-center gap-6 md:gap-12 text-2xl md:text-4xl font-normal">
          <img src={undraw_breakfast} alt="logo" className="h-14 w-14" />
          <h1 className="text-textPrimary">
            <a href="/" className="hover:text-buttonPrimary">
              {t("app_name")}
            </a>
          </h1>
        </div>

        <div className="flex flex-wrap justify-end items-center gap-2 md:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-2 py-1 sm:px-4 sm:py-2 border rounded hover:bg-accent text-sm sm:text-base">
              {t("buttons.language")}
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={5}>
              <DropdownMenuItem onClick={() => changeLanguage("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage("es")}>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            className="px-3 py-1 sm:px-8 sm:py-2 text-textQuaternary bg-buttonPrimary rounded hover:bg-hoverPrimary text-sm sm:text-base"
            onClick={() => navigate("/addmenu")}
          >
            {t("buttons.addMenu")}
          </button>

          <button
            className="px-2 py-1 sm:px-6 sm:py-2 text-textQuaternary bg-buttonPrimary rounded hover:bg-hoverPrimary text-sm sm:text-base"
            onClick={() => navigate("/profile")}
          >
            {t("buttons.profile")}
          </button>
        </div>
      </div>
    </header>
  );
}
