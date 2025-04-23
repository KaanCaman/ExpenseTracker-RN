import { createContext, useState } from "react";
import { AppTheme } from "../types/theme";
import appTheme from "../theme";
import { StatusBar } from "react-native";

/**
 * Tema bağlamı (Theme Context) / Context for theme management
 * - `theme`: Aktif tema nesnesi / Active theme object
 * - `toggleThemeMode`: Dark/Light mod geçiş fonksiyonu / Toggles dark/light mode
 */
export const ThemeContext = createContext<
  | {
      theme: AppTheme;
      toggleThemeMode: () => void;
      isDark: boolean;
    }
  | undefined
>(undefined);

interface ThemeProviderProps {
  children?: React.ReactNode;
}

/**
 * Tema sağlayıcı bileşeni / Theme provider component
 * - Uygulamayı tema ve mod değiştirme fonksiyonu ile sarmalar
 * - Wraps app with theme and theme switching logic
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Dark mod state'i / Dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true); // Boolean daha optimize

  // Mod değiştirme fonksiyonu / Toggle function
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  // Aktif renk paleti / Active color palette
  const activeColors = isDarkMode
    ? appTheme.colors.dark
    : appTheme.colors.light;

  return (
    <ThemeContext.Provider
      value={{
        theme: { ...appTheme, colors: activeColors },
        toggleThemeMode: toggleTheme,
        isDark: isDarkMode,
      }}
    >
      <StatusBar
        animated={true}
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
      {children}
    </ThemeContext.Provider>
  );
};
