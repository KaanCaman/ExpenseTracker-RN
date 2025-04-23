import Home from "../screen/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { uiText } from "../utils/uiText";

import AddExpense from "../screen/AddExpense";
import { ExpenseItem } from "../types/expenseItemType";
import Category from "../screen/Category";
import { PickerItemType } from "../types/pickerItemType";
import ExpenseDetail from "../screen/ExpenseDetail";
import { useTheme } from "../hooks/useTheme";
import { Switch } from "react-native";

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
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { theme, toggleThemeMode, isDark } = useTheme();

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
        headerRight: () => (
          <Switch
            onValueChange={toggleThemeMode}
            value={isDark}
            ios_backgroundColor={theme.colors.primary}
            trackColor={{
              false: theme.colors.primary,
              true: theme.colors.primary,
            }}
            thumbColor={`${theme.colors.background}`}
          />
        ),
      }}
    >
      <Stack.Screen name="Home">{(props) => <Home {...props} />}</Stack.Screen>
      <Stack.Screen name="AddExpense">
        {(props) => <AddExpense {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Category">
        {(props) => <Category {...props} />}
      </Stack.Screen>
      <Stack.Screen name="ExpenseDetail">
        {(props) => <ExpenseDetail {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default RootStack;
