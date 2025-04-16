// Home.tsx
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { ExpenseItem } from "../types/expenseItemType";
import { expenses } from "../data/mock/expenses";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import { ThemeProps } from "../types/theme";

import AddIcon from "../icon/AddIcon";
import CategoryIcon from "../icon/CategoryIcon";
import { categories } from "../data/mock/categories";
import CategoryFilterButton from "../components/buttons/CategoryFilterButton";
import ExpenseListItem from "../components/expenses/ExpenseItemList";
import ExpenseStatistics from "../components/expenses/ExpenseStatistics";

type Props = ThemeProps & NativeStackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation, theme }: Props) => {
  const { spacing, borderRadius, colors, typography } = theme;
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredExpenses =
    selectedCategory === "all"
      ? expenses
      : expenses.filter(
          (expense) =>
            expense.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const renderItem = ({ item }: { item: ExpenseItem }) => (
    <ExpenseListItem
      theme={theme}
      onPress={() =>
        navigation.navigate("ExpenseDetail", { expenseId: item.id })
      }
      item={item}
    />
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: spacing.medium,
      backgroundColor: colors.background,
    },
    listContainer: {
      paddingBottom: spacing.medium,
    },
    addButton: {
      position: "absolute",
      bottom: spacing.huge,
      right: spacing.huge,
      paddingVertical: spacing.medium,
      paddingHorizontal: spacing.medium,
      borderRadius: borderRadius.full,
      backgroundColor: colors.primary,
    },
    categoryButton: {
      position: "absolute",
      bottom: spacing.huge,
      left: spacing.huge,
      paddingVertical: spacing.medium,
      paddingHorizontal: spacing.medium,
      borderRadius: borderRadius.full,
      backgroundColor: colors.secondary,
    },
    filterWrapper: {
      height: 60,
    },
    filterContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 0,
      marginBottom: spacing.small,
    },
  });

  return (
    <View style={styles.container}>
      <ExpenseStatistics expenses={expenses} theme={theme} />

      <View style={styles.filterWrapper}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.filterContainer}
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category, index) => (
            <CategoryFilterButton
              key={index}
              label={`${category.label}`}
              active={selectedCategory === category.value}
              theme={theme}
              onPress={() => setSelectedCategory(category.value.toString())}
            />
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredExpenses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate("AddExpense")}
      >
        <AddIcon
          color={colors.text}
          width={typography.sizes.xlarge}
          height={typography.sizes.xlarge}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigation.navigate("Category")}
      >
        <CategoryIcon
          color={colors.background}
          width={typography.sizes.xlarge}
          height={typography.sizes.xlarge}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
