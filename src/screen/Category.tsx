import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";

import { uiText } from "../utils/uiText";
import { PickerItemType } from "../types/pickerItemType";
import { useTheme } from "../hooks/useTheme";

export type CategoryRouteParams = {
  categories: PickerItemType[];
};

type Props = NativeStackScreenProps<RootStackParamList, "Category">;

const Category: React.FC<Props> = ({ navigation, route }) => {
  const { spacing, borderRadius, colors, typography } = useTheme().theme;

  // Home'dan gelen kategori listesi // Categories passed from Home
  const initialList = route.params?.categories ?? [];
  // Kategori listesi state'i // State for category list
  const [categoryList, setCategoryList] =
    useState<PickerItemType[]>(initialList);
  // Yeni kategori adı // New category name
  const [newCategory, setNewCategory] = useState("");

  // Yeni kategori ekle ve Home'a dön // Add new category and return to Home
  const handleSave = () => {
    const trimmed = newCategory.trim();
    if (!trimmed) return;
    const updated = [
      ...categoryList,
      { value: trimmed.toLowerCase(), label: trimmed },
    ];
    // güncellenen listeyi Home'a gönder // send updated list back to Home
    navigation.popTo("Home", { categories: updated });
  };

  // Stil tanımları // Style definitions
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: spacing.medium,
    },
    inputRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.medium,
    },
    textInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.divider,
      borderRadius: borderRadius.medium,
      padding: spacing.small,
      fontSize: typography.sizes.medium,
      color: colors.text,
    },
    saveButton: {
      marginLeft: spacing.small,
      paddingVertical: spacing.small,
      paddingHorizontal: spacing.medium,
      backgroundColor: colors.primary,
      borderRadius: borderRadius.medium,
    },
    saveText: {
      color: colors.background,
      fontWeight: "bold",
    },
    list: {
      flex: 1,
    },
    listContent: {
      paddingVertical: spacing.small,
    },
    listItem: {
      paddingVertical: spacing.small,
      borderBottomWidth: 1,
      borderBottomColor: colors.divider,
    },
    listText: {
      fontSize: typography.sizes.medium,
      color: colors.text,
    },
    backButton: {
      marginTop: spacing.medium,
      padding: spacing.medium,
      backgroundColor: colors.secondary,
      borderRadius: borderRadius.medium,
      alignItems: "center",
    },
    backText: {
      color: colors.background,
      fontSize: typography.sizes.medium,
    },
  });

  // Her öğeyi render eden fonksiyon // Render function for each item
  const renderCategory = ({ item }: { item: PickerItemType }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() =>
        // seçilen kategoriyle Home'a dön // go back to Home with filter
        navigation.popTo("Home", { filterCategory: item.value.toString() })
      }
    >
      <Text style={styles.listText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Yeni kategori ekleme bölümü // Section to add new category */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.textInput}
          placeholder={uiText.addCategoryPlaceholder}
          placeholderTextColor={colors.placeholder}
          value={newCategory}
          onChangeText={setNewCategory}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>{uiText.save}</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList ile kategori listesi // Category list via FlatList */}
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={categoryList}
        keyExtractor={(item) => item.value.toString()}
        renderItem={renderCategory}
        showsVerticalScrollIndicator={false}
      />

      {/* Geri dön butonu // Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>{uiText.back}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
