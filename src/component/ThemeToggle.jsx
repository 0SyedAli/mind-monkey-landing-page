'use client'

import { useTheme } from './ThemeProvider'
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`custom-button ${theme}`}
    >
      {theme === 'light' ? (
        <IoMoonOutline className="h-5 w-5 text-gray-800" />
      ) : (
        <IoSunnyOutline className="h-5 w-5 text-yellow-300" />
      )}
    </button>
  )
}