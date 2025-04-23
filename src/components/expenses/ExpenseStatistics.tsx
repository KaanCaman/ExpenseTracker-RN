import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ExpenseItem } from "../../types/expenseItemType";
import { useTheme } from "../../hooks/useTheme";

type ExpenseStatisticsProps = {
  expenses: ExpenseItem[];
};

const ExpenseStatistics = ({ expenses }: ExpenseStatisticsProps) => {
  const { spacing, borderRadius, colors, typography } = useTheme().theme;

  const totalExpense = expenses.reduce(
    (sum: number, expense: ExpenseItem) => sum + expense.amount,
    0
  );

  const averageExpense =
    expenses.length > 0 ? totalExpense / expenses.length : 0;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      padding: spacing.medium,
      borderRadius: borderRadius.medium,
      marginBottom: spacing.medium,
    },
    statRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: spacing.small,
    },
    statLabel: {
      fontSize: typography.sizes.medium,
      color: colors.textSecondary,
    },
    statValue: {
      fontSize: typography.sizes.medium,
      color: colors.text,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Toplam Harcama:</Text>
        <Text style={styles.statValue}>{totalExpense.toFixed(2)} ₺</Text>
      </View>
      <View style={styles.statRow}>
        <Text style={styles.statLabel}>Ortalama Harcama:</Text>
        <Text style={styles.statValue}>{averageExpense.toFixed(2)} ₺</Text>
      </View>
    </View>
  );
};

export default ExpenseStatistics;
