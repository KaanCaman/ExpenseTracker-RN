import { useState } from "react";
import { AppTheme } from "../types/theme";
import Home from "../screen/Home";
import appTheme from "../theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

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

const RootStack = () => {
  const { dark, light } = themes;

  const [theme, setTheme] = useState<AppTheme>(light);

  const toggleTheme = () =>
    setTheme((prev) => (prev.colors.scheme === "dark" ? light : dark));

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootStack;
