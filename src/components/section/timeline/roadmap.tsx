"use client";
import React from "react";
import { Timeline } from "../../ui/timeline";
import { useTranslation } from "react-i18next";

interface RoadmapItem {
  date: string;
  title?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  lead?: string;
  body?: string;
  bodyPart1?: string;
  bodyPart2?: string;
  bodyPart3?: string;
  bodyPart4?: string;
  bodyPart5?: string;
  bodyHighlight1?: string;
  bodyHighlight2?: string;
  bodyHighlight3?: string;
  bodyHighlight4?: string;
  imageAlt: string;
  imageSrc: string;
  imageClass?: string;
}

export function TimelineDemo() {
  const { t } = useTranslation();

  const rawItems = t("roadmap.items", { returnObjects: true }) as unknown;
  const items: RoadmapItem[] = Array.isArray(rawItems)
    ? (rawItems as RoadmapItem[])
    : rawItems && typeof rawItems === "object"
      ? (Object.values(rawItems) as RoadmapItem[])
      : [];

  const data = items.map((item) => ({
    title: item.date,
    content: (
      <div>
        <h1 className="text-2xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
          {item.title ? (
            item.title
          ) : (
            <>
              {item.titlePrefix}{" "}
              <span className="text-orange-500 font-bold">{item.titleHighlight}</span>
            </>
          )}
        </h1>

        {item.lead && (
          <p className="text-sm font-medium text-gray-500 dark:text-neutral-300 mb-2">
            {item.lead}
          </p>
        )}

        {item.body && (
          <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
            {item.body}
          </p>
        )}

        {!item.body && (
          <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed mb-4">
            {item.bodyPart1 && <>{item.bodyPart1} </>}
            {item.bodyHighlight1 && (
              <span className="font-semibold">{item.bodyHighlight1}</span>
            )}
            {item.bodyPart2 && <>{" "}{item.bodyPart2} </>}
            {item.bodyHighlight2 && (
              <span className="font-semibold">{item.bodyHighlight2}</span>
            )}
            {item.bodyPart3 && <>{" "}{item.bodyPart3} </>}
            {item.bodyHighlight3 && (
              <span className="font-semibold">{item.bodyHighlight3}</span>
            )}
            {item.bodyPart4 && <>{" "}{item.bodyPart4} </>}
            {item.bodyHighlight4 && (
              <span className="font-semibold">{item.bodyHighlight4}</span>
            )}
            {item.bodyPart5 && <>{" "}{item.bodyPart5}</>}
          </p>
        )}

        <img
          src={item.imageSrc}
          alt={item.imageAlt}
          className={item.imageClass || "h-40"}
        />
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;