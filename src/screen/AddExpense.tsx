import React, { useState } from "react";
import { View, StyleSheet, Alert, ScrollView, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";
import { ThemeProps } from "../types/theme";

// UI
import AppTextInput from "../components/inputs/AppTextInput";
import AppDatetimePicker from "../components/inputs/AppDatetimePicker";
import AppPicker from "../components/inputs/AppPicker";
import AppButton from "../components/buttons/AppButton";

import { ExpenseItem } from "../types/expenseItemType";

import { uiText } from "../utils/uiText";
import { categories as initialCategory } from "../data/mock/categories";

type Props = ThemeProps &
  NativeStackScreenProps<RootStackParamList, "AddExpense"> & {};

const AddExpense = ({ navigation, theme, route }: Props) => {
  const { spacing, colors, typography, borderRadius } = theme;

  // Form alanları için state'ler
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [category, setCategory] = useState("all");
  const [note, setNote] = useState(""); // Not ekleme alanı
  const categories = route.params.categories ?? initialCategory;

  const handleSave = () => {
    if (!name || !amount || isNaN(Number(amount))) {
      Alert.alert(uiText.error, uiText.addValidateError);
      return;
    }
    if (category === "all") {
      Alert.alert(uiText.error, uiText.addValidateAllError);
      return;
    }

    const newExpense: ExpenseItem = {
      id: Date.now().toString(), // simple ID crated.
      title: name,
      amount: Number(amount),
      date: date.toDateString(),
      category: category,
      note,
    };

    navigation.popTo("Home", { newExpense });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    contentContainer: {
      padding: spacing.medium,
    },
    inputContainer: {
      marginBottom: spacing.medium,
    },
    amountContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: borderRadius.medium,
      paddingVertical: spacing.small,
      marginBottom: spacing.medium,
    },
    amountInput: {
      flex: 1,
      fontSize: typography.sizes.medium,
      color: colors.text,
    },
    noteContainer: {
      marginBottom: spacing.medium,
    },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.inputContainer}>
        <AppTextInput
          placeholder={uiText.expenseName}
          value={name}
          onChangeText={setName}
          theme={theme}
        />
      </View>
      <View style={styles.amountContainer}>
        <AppTextInput
          placeholder={uiText.amount}
          value={amount}
          onChangeText={(text) => {
            // Sadece şu formatlara izin ver // match:
            // 1          (tam sayı)
            // 1.9        (1 ondalık)
            // 1.99       (2 ondalık)
            // 1234.56    (geçerli)
            // "." gibi yanlışları engelle // unmatch
            const valid = text.match(/^(?:\d+)(?:\.\d{0,2})?$/);
            if (valid || text === "") {
              setAmount(text);
            }
          }}
          style={styles.amountInput}
          theme={theme}
        />
        <Text
          style={{
            fontSize: typography.sizes.medium,
            color: colors.text,
            marginLeft: spacing.small,
          }}
        >
          ₺
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <AppDatetimePicker
          value={date}
          onChange={(newDate) => setDate(newDate)}
          theme={theme}
          label={uiText.selectDateAndTime}
        />
      </View>
      <View style={styles.inputContainer}>
        <AppPicker
          items={categories}
          selectedValue={category}
          onValueChange={(value) => setCategory(value.toString())}
          placeholder={uiText.selectCategory}
          searchable={true}
          theme={theme}
        />
      </View>
      <View style={styles.noteContainer}>
        <AppTextInput
          placeholder="Not ekleyin (isteğe bağlı)"
          value={note}
          onChangeText={setNote}
          theme={theme}
        />
      </View>
      <AppButton title="Gideri Kaydet" onPress={handleSave} theme={theme} />
    </ScrollView>
  );
};

export default AddExpense;
