import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/StackNavigation";
import { ExpenseItem } from "../types/expenseItemType";
import { expenses } from "../data/mock/expenses";
import { categories as InitalCategories } from "../data/mock/categories";

import CategoryFilterButton from "../components/buttons/CategoryFilterButton";
import AddIcon from "../icon/AddIcon";
import CategoryIcon from "../icon/CategoryIcon";
import ExpenseListItem from "../components/expenses/ExpenseItemList";
import ExpenseStatistics from "../components/expenses/ExpenseStatistics";
import { useTheme } from "../hooks/useTheme";

// Route param tipi // Route prop type
type HomeRouteProp = RouteProp<RootStackParamList, "Home">;

// Props tipi: tema, navigation ve route // Props type: theme, navigation and route
type Props = NativeStackScreenProps<RootStackParamList, "Home"> & {
  route: HomeRouteProp;
};

const Home: React.FC<Props> = ({ navigation, route }) => {
  const { spacing, borderRadius, colors, typography } = useTheme().theme;

  // Yeni giderleri saklamak için state // State to hold dynamic expense list
  const [expenseList, setExpenseList] = useState<ExpenseItem[]>(expenses);

  const [categoryList, setCategoryList] = useState([
    { value: "all", label: "Hepsi" },
    ...InitalCategories,
  ]);

  // Seçili kategori state'i // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // AddExpense ekranından gelen yeni gider // New expense coming from AddExpense screen
  const { newExpense, filterCategory, categories, deleteExpenseId } =
    route.params || {};

  // newExpense değiştiğinde listeye ekle ve parametreyi temizle // Add newExpense to list and reset param
  useEffect(() => {
    // 1) Yeni eklenen gideri listeye ekle
    // If there's a newExpense, prepend it
    if (newExpense) {
      setExpenseList((prev) => [newExpense, ...prev]);
    }
    // 2) Silinecek gider ID’si gelmişse, listeden çıkar
    //  If deleteExpenseId is provided, filter it out
    if (deleteExpenseId) {
      setExpenseList((prev) => prev.filter((e) => e.id !== deleteExpenseId));
    }
    // parametreleri temizle / clear params
    navigation.setParams({
      newExpense: undefined,
      deleteExpenseId: undefined,
    });
  }, [newExpense, deleteExpenseId, navigation]);

  useEffect(() => {
    if (filterCategory) {
      setSelectedCategory(filterCategory);
      navigation.setParams({ filterCategory: undefined });
    }
  }, [filterCategory, navigation]);

  useEffect(() => {
    if (categories) {
      setCategoryList(categories);
      navigation.setParams({ categories: undefined });
    }
  }, [categories, navigation]);

  // Filtrelenmiş giderler // Filtered expenses based on selected category
  const filteredExpenses =
    selectedCategory === "all"
      ? expenseList
      : expenseList.filter(
          (exp) => exp.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // Her öğeyi render eden fonksiyon // Function to render each item
  const renderItem = ({ item }: { item: ExpenseItem }) => (
    <ExpenseListItem
      onPress={() => navigation.navigate("ExpenseDetail", { expense: item })}
      item={item}
    />
  );

  // Stil tanımlamaları // Style definitions
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: spacing.medium,
      backgroundColor: colors.background,
    },
    filterWrapper: {
      height: 60, // Sabit yükseklik, butonlar için // Fixed height for filter buttons
    },
    filterContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.small,
    },
    listContainer: {
      paddingBottom: spacing.medium,
    },
    addButton: {
      position: "absolute",
      bottom: spacing.huge,
      right: spacing.huge,
      padding: spacing.medium,
      borderRadius: borderRadius.full,
      backgroundColor: colors.primary,
    },
    categoryButton: {
      position: "absolute",
      bottom: spacing.huge,
      left: spacing.huge,
      padding: spacing.medium,
      borderRadius: borderRadius.full,
      backgroundColor: colors.secondary,
    },
  });

  return (
    <View style={styles.container}>
      {/* Show statistics / Istatistik göster   */}
      <View>
        <ExpenseStatistics expenses={expenseList} />
      </View>

      {/* Kategori filtre barı // Category filter bar */}
      <View style={styles.filterWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterContainer}
        >
          {categoryList.map((category, index) => (
            <CategoryFilterButton
              key={index}
              label={category.label ?? "undefineds"}
              active={selectedCategory === category.value}
              onPress={() => setSelectedCategory(category.value.toString())}
            />
          ))}
        </ScrollView>
      </View>

      {/* Gider listesi // Expense list */}
      <FlatList
        data={filteredExpenses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      {/* Gider ekle butonu // Add expense button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("AddExpense", { categories: categoryList })
        }
      >
        <AddIcon
          color={colors.text}
          width={typography.sizes.xlarge}
          height={typography.sizes.xlarge}
        />
      </TouchableOpacity>

      {/* Kategori ekranına git butonu // Navigate to category screen button */}
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() =>
          navigation.navigate("Category", {
            categories: categoryList,
          })
        }
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
