import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/StackNavigation";
import { ThemeProvider } from "./src/context/ThemeProviderContext";

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <RootStack />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
