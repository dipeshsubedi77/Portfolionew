"use client";
import React from "react";
import { FloatingNav } from "./FloatingNav";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconBriefcase,
  IconFolder,
} from "@tabler/icons-react"; // Import the required icons

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Work with me",
      link: "/work",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ), // Updated icon
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (
        <IconFolder className="h-4 w-4 text-neutral-500 dark:text-white" />
      ), // Updated icon
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}