import React, { useState, useEffect } from "react";
import { FaToggleOn } from "react-icons/fa6";

const ThemeButton = () => {
  // Get the initial theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Apply the theme to the body or root element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <FaToggleOn  onClick={toggleTheme}
    className={`px-4 py-2 rounded-md ${
      theme === "light" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
    }`}/>

  );
};

export default ThemeButton;
