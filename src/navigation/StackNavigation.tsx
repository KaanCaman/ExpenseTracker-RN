import { useState } from "react";
import { AppTheme, ThemeProps } from "../types/theme";
import Home from "../screen/Home";
import appTheme from "../theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { uiText } from "../utils/uiText";
import { Button, TouchableOpacity } from "react-native";

export type RootStackParamList = {
  Home: {
    navigation: any;
  };

  ThemeProp: ThemeProps;
};

type ScreenOptions = {};

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
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        title: uiText.appName,
      }}
    >
      <Stack.Screen name="Home">
        {(props) => <Home {...props} theme={theme} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootStack;
