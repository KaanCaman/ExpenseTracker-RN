import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { PickerItemType } from "../types/pickerItemType";
import { useTheme } from "../hooks/useTheme";


/**
 * PickerItem bileşeni, bir seçim listesindeki tek bir öğeyi temsil eder.
 * The PickerItem component represents a single item in the picker list.
 */
type Props ={
  item: PickerItemType; // Seçim öğesi verisi / Picker item data
};

const PickerItem = ({ item }: Props) => {
  // @Deprecated
  // Global state will not be used. / Global state kullanılmayacak.
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    item: {
      flexDirection: "row",
      alignItems: "center",
      gap: theme.spacing.small,
    },
    label: {
      fontSize: theme.typography.sizes.medium,
      color: theme.colors.text,
    },
  });

  return (
    <View style={styles.item}>
      <Text>Icon</Text>
      <Text>Text</Text>
    </View>
  );
};

/**
 * Memoize edilmiş sürüm performansı artırır.
 * Memoized version improves performance.
 */
export default memo(PickerItem);
