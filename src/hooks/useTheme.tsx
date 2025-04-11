import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProviderContext";

/**
 * Tema hook'u / Theme hook
 * - Tema bağlamına erişim sağlar / Provides access to theme context
 * - Provider dışında kullanılırsa hata fırlatır / Throws error if used outside provider
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};