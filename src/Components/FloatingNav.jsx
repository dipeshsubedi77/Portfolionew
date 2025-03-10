// FloatingNav.jsx
import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const FloatingNav = ({ navItems }) => {
  return (
    <nav className="fixed top-0 inset-x-0 max-w-2xl mx-auto z-50">
    <ul className="flex justify-center space-x-2 sm:space-x-4 bg-white dark:bg-black p-2 rounded-none sm:rounded-full shadow-lg border border-neutral-200 dark:border-white/[0.2]">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.link}
            className="flex items-center p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            {item.icon}
            <span className="hidden sm:inline-block ml-2 text-neutral-500 dark:text-white">
              {item.name}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
  );
};