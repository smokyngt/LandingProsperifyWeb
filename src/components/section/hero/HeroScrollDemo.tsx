"use client";
import { ContainerScroll } from "./container-scroll-animation";
import { AIChatInterface } from "./ai-chat-interface";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";

import Script from "next/script";

export function HeroScrollDemo() {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Calendly link widget begin */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      {/* Calendly link widget end */}

      <ContainerScroll
        titleComponent={
          <AnimatePresence mode="wait">
            <motion.div
              key={i18n.language}
              className="sm:mt-6 pt-6 sm:pt-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white text-center px-4">
                {t("hero.titleLine1")} <br />
                <span className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[6rem] font-bold mt-1 leading-none block">
                  {t("hero.titleLine2Prefix")} <span className="text-orange-500">{t("hero.titleLine2Highlight")}</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto px-4 text-center">
                {t("hero.subtitle")}
              </p>
              
              <div className="mt-8 flex justify-center">
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    // @ts-ignore
                    if (window.Calendly) {
                      // @ts-ignore
                      window.Calendly.initPopupWidget({url: 'https://calendly.com/prosperify-ai'});
                    }
                  }}
                  className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-orange-500 bg-[linear-gradient(110deg,#ff6a13,45%,#ff8c42,55%,#ff6a13)] bg-[length:200%_100%] px-8 font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 hover:scale-105"
                >
                  Schedule time with me
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        }
      >
        <AIChatInterface />
      </ContainerScroll>
    </div>
  );
}