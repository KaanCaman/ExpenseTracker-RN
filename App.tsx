import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation/StackNavigation";
import { ThemeProvider } from "./src/context/ThemeProviderContext";
import { GlobalStateProvider } from "./src/context/GlobalStateProviderContext";

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <GlobalStateProvider>
        <ThemeProvider>
          <RootStack />
        </ThemeProvider>
      </GlobalStateProvider>
    </NavigationContainer>
  );
}

export default App;
