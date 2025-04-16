import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { PickerItemType } from "../../types/pickerItemType";
import { ThemeProps } from "../../types/theme";

type PickerProps = ThemeProps & {
  items: PickerItemType[];
  selectedValue?: string | number;
  onValueChange: (value: string | number) => void;
  placeholder?: string;
  searchable?: boolean;
  style?: ViewStyle;
  children?: React.ReactNode; // Özel içerik desteği
};

/**
 * Picker bileşeni başlangıcı. Props olarak veri listesi, seçili değer ve stil alır.
 * Beginning of Picker component. Accepts list, selected value, and styling as props.
 */
const Picker = ({
  items,
  selectedValue,
  onValueChange,
  placeholder = "Seçiniz...",
  searchable = false,
  style,
  children,
  theme,
}: PickerProps) => {
  // @Deprecated
  // Global state will not be used. / Global state kullanılmayacak.
  // const { theme } = useTheme();

  //
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  /**
   * Seçili değere karşılık gelen öğeyi bulur.
   * Finds the item matching the selected value.
   */
  const selectedItem = items.find(
    (item: PickerItemType) => item.value === selectedValue
  );

  /**
   * Arama metnine göre öğeleri filtreler.
   * Filters the items based on search text.
   */
  const filteredItems = items.filter((item: PickerItemType) =>
    item.label?.toLowerCase().includes(searchText.toLowerCase())
  );

  /**
   * Tema değiştiğinde yeniden hesaplanan stilleri tanımlar.
   * Defines styles recalculated on theme change.
   */
  const themedStyles = useMemo(() => {
    return StyleSheet.create({
      pickerButton: {
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.divider,
        padding: theme.spacing.medium,
        borderRadius: theme.borderRadius.medium,
        marginVertical: theme.spacing.small,
        borderWidth: 1,
        width: "100%",
      },
      buttonContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      labelText: {
        flex: 1,
        fontSize: theme.typography.sizes.medium,
      },
      modalOverlay: {
        flex: 1,
        backgroundColor: theme.colors.modalOverlay,
        justifyContent: "flex-end",
      },
      modalContainer: {
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: theme.borderRadius.large,
        borderTopRightRadius: theme.borderRadius.large,
        padding: theme.spacing.medium,
        maxHeight: Platform.OS === "ios" ? "60%" : "80%",
      },
      searchInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: theme.spacing.small,
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        marginBottom: theme.spacing.small,
      },
      searchInput: {
        flex: 1,
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text,
      },
      itemButton: {
        padding: theme.spacing.medium,
        borderRadius: theme.borderRadius.small,
        marginVertical: theme.spacing.tiny,
      },
      itemText: {
        color: theme.colors.text,
        fontSize: theme.typography.sizes.medium,
      },
    });
  }, [theme]);

  /**
   * Bileşenin kullanıcıya görünen kısmı. Picker butonunu ve modal yapısını içerir.
   * Main render section including the picker button and modal.
   */
  return (
    <View style={{ width: "100%" }}>
      <TouchableOpacity
        style={[themedStyles.pickerButton, style]}
        onPress={() => setModalVisible(true)}
      >
        <View style={themedStyles.buttonContent}>
          {children ??
            (selectedValue ? (
              selectedItem?.display ?? (
                <Text
                  style={[themedStyles.labelText, { color: theme.colors.text }]}
                >
                  {selectedItem?.label}
                </Text>
              )
            ) : (
              <Text
                style={[
                  themedStyles.labelText,
                  { color: theme.colors.placeholder },
                ]}
              >
                {placeholder}
              </Text>
            ))}
        </View>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={themedStyles.modalOverlay}>
          <View style={themedStyles.modalContainer}>
            {searchable && (
              <View style={themedStyles.searchInputContainer}>
                <TextInput
                  style={themedStyles.searchInput}
                  placeholder="Ara..."
                  placeholderTextColor={theme.colors.placeholder}
                  value={searchText}
                  onChangeText={setSearchText}
                />
              </View>
            )}
            <ScrollView>
              {filteredItems.map((item) => (
                <TouchableOpacity
                  key={item.value}
                  style={[
                    themedStyles.itemButton,
                    {
                      backgroundColor:
                        item.value === selectedValue
                          ? theme.colors.primary + "20"
                          : "transparent",
                    },
                  ]}
                  /**
                   * Bir öğe seçildiğinde değeri iletir ve modal'ı kapatır.
                   * When an item is selected, it passes the value and closes the modal.
                   */
                  onPress={() => {
                    onValueChange(item.value);
                    setModalVisible(false);
                  }}
                >
                  {item.display ?? (
                    <Text style={themedStyles.itemText}>{item.label}</Text>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Picker;
