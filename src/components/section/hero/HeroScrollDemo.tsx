"use client";
import { ContainerScroll } from "./container-scroll-animation";
import { AIChatInterface } from "./ai-chat-interface";
import { useTranslation } from "react-i18next";

export function HeroScrollDemo() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="sm:mt-6 pt-6 sm:pt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white text-center px-4">
              {t("hero.titleLine1")} <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] font-bold mt-1 leading-none block">
                {t("hero.titleLine2Prefix")} <span className="text-orange-500">{t("hero.titleLine2Highlight")}</span>
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto px-4 text-center">
              {t("hero.subtitle")}
            </p>
          </div>
        }
      >
        <AIChatInterface />
      </ContainerScroll>
    </div>
  );
}