import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import AppButton from "../components/buttons/AppButton";
import AppDateTimePicker from "../components/inputs/AppDatetimePicker";
import Picker from "../components/inputs/AppPicker";
const categoryItems = [
  { label: "Gıda", value: "food" },
  { label: "Ulaşım", value: "transport" },
  { label: "Fatura", value: "bill" },
  {
    label: "Eğlence",
    value: "entertainment",
    display: <Text style={{ fontSize: 48 }}>Ge</Text>,
  },
];

const TestScreen = () => {
  const [date, setDate] = useState<Date>(new Date());
  const { theme, toggleThemeMode } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState<string | number>("");
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          padding: theme.spacing.small,
        },
      ]}
    >
      <Picker
        items={categoryItems}
        selectedValue={selectedCategory}
        onValueChange={(value) => setSelectedCategory(value)}
        placeholder="Kategori seçiniz"
        searchable={true}
      />
      <AppDateTimePicker value={date} onChange={(date) => setDate(date)} />
      <AppButton title="Test Button" onPress={toggleThemeMode} />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
