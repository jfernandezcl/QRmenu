import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import undraw_breakfast from "../images/undraw_breakfast.svg";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="w-full bg-background mb-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2 h-20">
        <div className="flex items-center gap-12 text-4xl font-normal">
          <img src={undraw_breakfast} alt="logo" className="h-14 w-14" />
          <h1 className="text-textPrimary">
            <a href="/home" className="hover:text-buttonPrimary">
              {t("app_name")}
            </a>
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-4 py-2 border rounded hover:bg-accent">
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
          <button className="relative px-8 py-2 text-textQuaternary bg-buttonPrimary rounded hover:bg-hoverPrimary">
            {t("login")}
          </button>
          <button className="relative px-6 py-2 text-textQuaternary bg-buttonPrimary rounded hover:bg-hoverPrimary">
            {t("register")}
          </button>
        </div>
      </div>
    </header>
  );
}
