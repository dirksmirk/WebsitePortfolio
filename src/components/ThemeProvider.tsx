
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Helper function to get the current system preference
const getSystemTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark";
  
  // Primary method: CSS media query
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  
  // Fallback method: Check if explicitly set to light
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "dark";
  }
  
  // Additional fallback: Check computed styles on document
  const computedStyle = window.getComputedStyle(document.documentElement);
  const colorScheme = computedStyle.colorScheme;
  
  if (colorScheme === "dark") {
    return "dark";
  }
  
  // Final fallback: assume light
  return "dark";
}

// Helper function to get the effective theme (resolves "system" to actual preference)
const getEffectiveTheme = (theme: Theme): "dark" | "light" => {
  if (theme === "system") {
    return getSystemTheme()
  }
  return theme
}

// Double check so that theme is set based on system preferences
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    
    // Remove existing theme classes
    root.classList.remove("light", "dark")
    
    // Get the effective theme (resolves "system" to actual preference)
    const effectiveTheme = getEffectiveTheme(theme)
    
    // Apply the effective theme
    root.classList.add(effectiveTheme)
  }, [theme])

  // Listen for system theme changes when theme is set to "system"
  useEffect(() => {
    if (theme !== "system") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = () => {
      const root = window.document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(getSystemTheme())
    }

    // Listen for changes in system preference
    mediaQuery.addEventListener("change", handleChange)
    
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  console.log(theme)

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
