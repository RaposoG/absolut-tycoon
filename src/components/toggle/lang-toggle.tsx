"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Cookies from "js-cookie";
import { Check } from "lucide-react";
import { languages } from "@/i18n/config";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function ToggleLanguage() {
  const router = useRouter();
  const currentLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    Cookies.set("NEXT_LOCALE", newLocale, { path: "/" });
    router.refresh();
  };

  const getCurrentLanguage = () => {
    return languages.find((lang) => lang.code === currentLocale) || languages[0];
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="w-auto px-3 gap-2">
          <span>{getCurrentLanguage().flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem key={language.code} className="flex items-center justify-between cursor-pointer px-3 py-1 hover:bg-gray-100" onClick={() => changeLanguage(language.code)}>
            <div className="flex items-center gap-2">
              <span className="text-base">{language.flag}</span>
              <span>{language.name}</span>
            </div>
            {currentLocale === language.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
