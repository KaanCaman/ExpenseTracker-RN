import React from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigation";

import { uiText } from "../utils/uiText";

import AppButton from "../components/buttons/AppButton";
import { getExpenseIcon } from "../utils/getIconByCategory";
import { useTheme } from "../hooks/useTheme";

type Props = NativeStackScreenProps<RootStackParamList, "ExpenseDetail">;

const ExpenseDetail: React.FC<Props> = ({ navigation, route }) => {
  const { spacing, typography, colors, borderRadius } = useTheme().theme;
  const { expense } = route.params;
  const icon = getExpenseIcon(
    expense.category,
    typography.sizes.xlarge,
    colors.primary
  );

  // Silme onayı ve Home'a deleteExpenseId ile dönme
  // Ask for confirmation, then navigate back with deleteExpenseId
  const confirmDelete = () => {
    Alert.alert(
      uiText.confirmDeleteTitle, // "Gideri Sil"
      uiText.confirmDeleteMessage, // "Bu gideri silmek istediğinizden emin misiniz?"
      [
        { text: uiText.cancel, style: "cancel" }, // "İptal"
        {
          text: uiText.delete, // "Sil"
          style: "destructive",
          onPress: () => {
            navigation.popTo("Home", {
              deleteExpenseId: expense.id,
            });
          },
        },
      ]
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    content: {
      padding: spacing.medium,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: spacing.medium,
    },
    label: {
      flex: 1,
      fontSize: typography.sizes.small,
      color: colors.textSecondary,
    },
    value: {
      flex: 2,
      fontSize: typography.sizes.medium,
      color: colors.text,
      fontWeight: "500",
    },
    amount: {
      fontSize: typography.sizes.xlarge,
      color: colors.primary,
      fontWeight: "700",
      marginBottom: spacing.large,
    },
    note: {
      fontSize: typography.sizes.medium,
      color: colors.text,
      padding: spacing.medium,
      backgroundColor: colors.surface,
      borderRadius: borderRadius.medium,
    },
    iconWrapper: {
      width: 48,
      height: 48,
      borderRadius: borderRadius.full,
      backgroundColor: colors.surface,
      justifyContent: "center",
      alignItems: "center",
      marginRight: spacing.medium,
    },
    deleteButton: {
      marginTop: spacing.huge,
    },
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Tutar / Amount */}
      <Text style={styles.amount}>{expense.amount}₺</Text>

      {/* Kategori / Category */}
      <View style={styles.row}>
        <Text style={styles.label}>{uiText.category}:</Text>
        <View style={styles.iconWrapper}>{icon}</View>
        <Text style={styles.value}>{expense.category}</Text>
      </View>

      {/* Başlık / Title */}
      <View style={styles.row}>
        <Text style={styles.label}>{uiText.expenseName}:</Text>
        <Text style={styles.value}>{expense.title}</Text>
      </View>

      {/* Tarih / Date */}
      <View style={styles.row}>
        <Text style={styles.label}>{uiText.date}:</Text>
        <Text style={styles.value}>{expense.date}</Text>
      </View>

      {/* Not (isteğe bağlı) / Note (optional) */}
      {expense.note ? (
        <>
          <Text style={[styles.label, { marginBottom: spacing.tiny }]}>
            {uiText.note}:
          </Text>
          <Text style={styles.note}>{expense.note}</Text>
        </>
      ) : null}

      {/* Gideri Sil butonu / Delete Expense button */}
      <AppButton title={uiText.delete} onPress={confirmDelete} />
    </ScrollView>
  );
};

export default ExpenseDetail;
