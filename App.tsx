import React, { useState, useMemo } from "react";
import { View } from "react-native";
import appTheme from "./src/theme";
import TestScreen from "./src/screen/TestScreen";
import { AppTheme } from "./src/types/theme";

const themes = {
  dark: {
    ...appTheme,
    colors: { ...appTheme.colors.dark },
  },
  light: {
    ...appTheme,
    colors: { ...appTheme.colors.light },
  },
};

function App(): React.JSX.Element {
  const { dark, light } = themes;

  const [theme, setTheme] = useState<AppTheme>(light);

  const toggleTheme = () =>
    setTheme((prev) => (prev.colors.scheme === "dark" ? light : dark));

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <TestScreen theme={theme} toggleTheme={toggleTheme} />
    </View>
  );
}

export default App;
