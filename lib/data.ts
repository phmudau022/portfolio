import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated at Wethinkcode",
    location: "Gauteng",
    description:
      "Wethinkcode Alumni.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Aws Devops",
    location: "Remote",
    description:
      "Exlearn Technologies · Internship for only 3 months",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Software Engineer",
    location: "Remote",
    description:
      "InternCareer · Internship for only 1 months as a android Development.",
    icon: React.createElement(FaReact),
    date: "2024 - 2024",
  },
  {
    title: "Volunteer Assistant",
    location: "Wethinkcode",
    description:
      "I volunteered as a Bootcamp Assistant at WeThinkCode, providing guidance and information about the organization. In this role, I assisted participants by addressing their coding-related queries, contributing to their learning experience. It was fulfilling to share knowledge and support others in their learning journey. I am grateful for the opportunity to have made a positive impact during my time as a Bootcamp Assistant.",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Linux",
  "Android Development",
  "Unit Testing",
  "Agile Methodologies",
  "Web Development",
  "Mobile Applications",
  "Pipelines",
  "Docker",
  "Firebase",
  "React Native",
  "SQL",
  "Flutter",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Software Development",
  "React",
] as const;