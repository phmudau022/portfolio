import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import shoeImg from "@/public/shoe.png";
import { BsLaptop } from "react-icons/bs";


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
    "Wethinkcode Alumni. Being a student at Wethinkcode had a profoundly positive impact on my life. It provided me with valuable skills, knowledge, and opportunities that have shaped my career and personal growth.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Aws Devops",
    location: "Remote",
    description:
    "Exlearn Technologies · Internship for only 3 months. This was an internship at Exlearn Technologies, focusing on AWS DevOps practices. During the three-month duration, I gained hands-on experience with various AWS services and learned about DevOps principles and tools.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Software Engineer",
    location: "Remote",
    description:
    "InternCareer · Internship for only 1 month as an Android Development. This internship at InternCareer lasted for one month and primarily involved Android development. During this short period, I worked on Android projects, gaining valuable experience in mobile app development and honing my skills as a software engineer.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Bootcamp Volunteer Assistant",
    location: "Wethinkcode",
    description:
      "I volunteered as a Bootcamp Assistant at WeThinkCode, providing guidance and information about the organization. In this role, I assisted participants by addressing their coding-related queries, contributing to their learning experience. It was fulfilling to share knowledge and support others in their learning journey. I am grateful for the opportunity to have made a positive impact during my time as a Bootcamp Assistant.",
    icon: React.createElement(BsLaptop),
    date: "2023 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Shoe shop",
    description:
      "I worked as a full-stack developer to build a shoe shop website.",
    tags: ["Html", "css", "JavaScript"],
    imageUrl: shoeImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind"],
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