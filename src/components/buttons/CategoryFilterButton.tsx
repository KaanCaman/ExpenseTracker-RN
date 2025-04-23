import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/useTheme";

type CategoryFilterButtonProps = {
  label: string;
  active: boolean;
  onPress: () => void;
};

const CategoryFilterButton = ({
  label,
  active,
  onPress,
}: CategoryFilterButtonProps) => {
  const { spacing, borderRadius, colors, typography } = useTheme().theme;

  const styles = StyleSheet.create({
    button: {
      height: "100%",
      paddingHorizontal: spacing.medium,
      borderRadius: borderRadius.medium,
      borderWidth: 1,
      borderColor: colors.divider,
      marginRight: spacing.small,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: active ? colors.primary : "transparent",
    },
    text: {
      fontSize: typography.sizes.medium,
      color: active ? colors.background : colors.text,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CategoryFilterButton;
