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
        <IoMoonOutline  />
      ) : (
        <IoSunnyOutline  />
      )}
    </button>
  )
}