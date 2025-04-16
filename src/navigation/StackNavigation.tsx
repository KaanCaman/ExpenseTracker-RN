import { useState } from "react";
import { AppTheme, ThemeProps } from "../types/theme";
import Home from "../screen/Home";
import appTheme from "../theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { uiText } from "../utils/uiText";

import AddExpense from "../screen/AddExpense";
import { ExpenseItem } from "../types/expenseItemType";
import Category from "../screen/Category";
import { PickerItemType } from "../types/pickerItemType";
import ExpenseDetail from "../screen/ExpenseDetail";

export type RootStackParamList = {
  Home: {
    newExpense?: ExpenseItem;
    filterCategory?: string;
    categories?: PickerItemType[];
    deleteExpenseId?: string;
  };
  AddExpense: { categories?: PickerItemType[] }; // Gider ekle sayfası // Add expense screen
  ExpenseDetail: { expense: ExpenseItem }; // Gider detayı sayfası // Expense detail screen
  Category: { categories?: PickerItemType[] }; // Kategoriler sayfası // Category screen
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
      <Stack.Screen name="AddExpense">
        {(props) => <AddExpense {...props} theme={theme} />}
      </Stack.Screen>
      <Stack.Screen name="Category">
        {(props) => <Category {...props} theme={theme} />}
      </Stack.Screen>
      <Stack.Screen name="ExpenseDetail">
        {(props) => <ExpenseDetail {...props} theme={theme} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootStack;
