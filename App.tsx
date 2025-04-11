import React from "react";
import { View, Text } from "react-native";
import appTheme from "./src/theme";
import { ThemeProvider } from "./src/context/ThemeProviderContext";
import TestScreen from "./src/screen/TestScreen";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <TestScreen />
    </ThemeProvider>
  );
}

export default App;
