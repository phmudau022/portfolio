"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 flex flex-col self-center"
    >
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline
        lineColor=""
        className="w-1/2 self-center gap-y-4 flex flex-col gap-y-8"
        layout="1-column"
      >
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={
              index % 2 === 0
                ? "vertical-timeline-element--left rounded-lg"
                : "rounded-lg vertical-timeline-element--right"
            }
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              columnGap: '10px'
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem", 
              }}
            >
              <div
                className="icon"
                style={{
                  background:
                  theme === "light" ? "transparent" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.8rem",
                  marginRight: "1rem",
                  borderRadius: "50%",
                  width: "fit",
                  height: "fit",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: 'gray'
                }}
              >
                {item.icon} {}
              </div>
              <div>
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal text-gray-500 !mt-0">{item.location}</p>
              </div>
            </div>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
