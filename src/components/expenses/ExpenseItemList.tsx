import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ExpenseItem } from "../../types/expenseItemType";

import { getExpenseIcon } from "../../utils/getIconByCategory";
import { useTheme } from "../../hooks/useTheme";

type ExpenseListItemProps = {
  item: ExpenseItem;
  onPress: () => void;
};

const ExpenseListItem = ({ item, onPress }: ExpenseListItemProps) => {
  const { spacing, borderRadius, typography, colors } = useTheme().theme;
  const icon = getExpenseIcon(
    item.category,
    typography.sizes.xlarge,
    colors.primary
  );

  const styles = StyleSheet.create({
    item: {
      flexDirection: "row",
      alignItems: "center",
      padding: spacing.medium,
      borderRadius: borderRadius.medium,
      marginVertical: spacing.small,
      justifyContent: "space-between",
    },
    iconContainer: {
      marginRight: spacing.small,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: typography.sizes.medium,
      fontWeight: "500",
      color: colors.text,
    },
    amount: {
      fontSize: typography.sizes.medium,
      fontWeight: "700",
      color: colors.primary,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: colors.surface }]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{ color: colors.textSecondary }}>{item.note}</Text>
      </View>
      <Text style={styles.amount}>{item.amount}₺</Text>
    </TouchableOpacity>
  );
};

export default ExpenseListItem;
