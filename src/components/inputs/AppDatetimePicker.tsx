import React, { memo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Platform,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from "react-native";
import DatePicker from "react-native-ui-datepicker";
import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isBetween from "dayjs/plugin/isBetween"; // isBetween eklentisi import edildi // Import isBetween plugin
import { ThemeProps } from "../../types/theme";
import { uiText } from "../../utils/uiText";

// Dayjs eklentilerini etkinleştiriyoruz // Enable dayjs comparison and isBetween plugins
dayjs.extend(isSameOrAfter); // isSameOrAfter eklentisini etkinleştir // Enable isSameOrAfter plugin
dayjs.extend(isSameOrBefore); // isSameOrBefore eklentisini etkinleştir // Enable isSameOrBefore plugin
dayjs.extend(isBetween); // isBetween eklentisini etkinleştir // Enable isBetween plugin

type Props = ThemeProps & {
  value: Date; // Seçili tarih // Selected date
  onChange: (date: Date) => void; // Tarih değiştiğinde çağrılır // Called when date changes
  onSelect?: (date: Date) => void; // Seç butonuna basıldığında çağrılır // Called when "Select" button is pressed
  onReset?: () => void; // Sıfırla butonuna basıldığında çağrılır // Called when "Reset" button is pressed
  label?: string; // Başlık metni // Label text
  error?: string; // Hata mesajı // Error message
  disabled?: boolean; // Pasif duruma alma // Disable control
  minimumDate?: Date; // Minimum tarih // Minimum allowed date
  maximumDate?: Date; // Maksimum tarih // Maximum allowed date
  style?: any; // Dış stil // External container style
};

/**
 * AppDateTimePicker Bileşeni
 * AppDateTimePicker Component
 * - Seçili tarihi input gibi gösterir // Displays selected date like an input field
 * - Dokunulduğunda modal açılır, tarih seçimi yapılır // Opens modal on touch for date selection
 */
const AppDateTimePicker = memo(
  ({
    value,
    onChange,
    onSelect,
    onReset,
    label = uiText.selectDateAndTime, // Varsayılan başlık // Default label
    error,
    disabled = false, // Pasif kontrol // Disable control
    minimumDate = dayjs().subtract(7, "day").startOf("day").toDate(), // 7 gün öncesi // 7 days before
    maximumDate = dayjs().add(7, "day").endOf("day").toDate(), // 7 gün sonrası // 7 days after
    theme,
    style,
  }: Props) => {
    // Modal görünürlüğü ve geçici tarih state'i // State for modal visibility and temporary date
    const [modalVisible, setModalVisible] = useState(false);
    const [tempDate, setTempDate] = useState(dayjs(value)); // Geçici tarih // Temporary date

    const selectedDate = dayjs(value); // Mevcut seçili tarih // Currently selected date
    const minDate = dayjs(minimumDate); // Minimum tarih objesi // Minimum date reference
    const maxDate = dayjs(maximumDate); // Maksimum tarih objesi // Maximum date reference

    // DatePicker'dan tarih seçildiğinde çalışır // Triggered on date change from DatePicker
    const handleChange = (params: {
      date?: string | number | Date | Dayjs | null;
    }) => {
      if (!disabled && params?.date) {
        const selected = dayjs(params.date); // Seçilen tarihi dayjs'e dönüştür // Convert selected date to dayjs
        if (
          selected.isBefore(minDate, "day") ||
          selected.isAfter(maxDate, "day")
        )
          return; // Aralık kontrolü // Range check
        setTempDate(selected); // Geçici tarihi güncelle // Update temporary date
      }
    };

    // Seçimi onayla, parent state'i güncelle ve modalı kapat // Confirm selection, update parent state and close modal
    const handleConfirm = () => {
      onChange(tempDate.toDate()); // Parent state'i tetikle // Trigger parent state update
      onSelect?.(tempDate.toDate()); // Opsiyonel callback // Optional callback
      setModalVisible(false); // Modalı kapat // Close modal
    };

    // Tarihi bugüne sıfırla ve parent state'i güncelle, ardından modalı kapat // Reset to today's date and update state, then close modal
    const handleReset = () => {
      const today = dayjs(); // Bugünün tarihi // Today's date
      setTempDate(today);
      onChange(today.toDate());
      onReset?.(); // Opsiyonel reset callback // Optional reset callback
      setModalVisible(false);
    };

    // Seçili tarihi input alanında göstermek için formatla // Format date for display
    const formattedDate = selectedDate.format("DD/MM/YYYY HH:mm");

    // DatePicker stillerini dışarıya aldık // Extracted DatePicker styles
    const datePickerStyles = {
      selected: { backgroundColor: theme.colors.primary },
      selected_label: { color: theme.colors.background, fontWeight: "700" },
      day_label: { color: theme.colors.text },
      weekday_label: { color: theme.colors.textSecondary },
      month_selector_label: {
        color: theme.colors.text,
        fontSize: theme.typography.sizes.medium,
      },
      year_selector_label: {
        color: theme.colors.text,
        fontSize: theme.typography.sizes.medium,
      },
      year: { backgroundColor: theme.colors.surface },
      year_label: { color: theme.colors.text },
      selected_year: { backgroundColor: theme.colors.primary },
      selected_year_label: {
        color: theme.colors.background,
        fontWeight: "bold",
      },
      header: { backgroundColor: theme.colors.surface },
      days: { backgroundColor: theme.colors.surface },
      today: { borderColor: theme.colors.primary, borderWidth: 1 },
      today_label: { color: theme.colors.primary },
      time_selector_label: { color: theme.colors.text },
      time_label: { color: theme.colors.text },
      time_selected_indicator: { backgroundColor: theme.colors.primary },
      disabled_label: { color: theme.colors.placeholder, opacity: 0.4 },
    } satisfies Partial<Record<string, ViewStyle | TextStyle | ImageStyle>>;
    /**
     * TypeScript 'satisfies' açıklaması:
     * pickerStyles nesnesinin key'leri string ve değerleri stil tipi olmalıdır (ViewStyle, TextStyle, ImageStyle)
     * This ensures pickerStyles object keys are strings and values are valid style types
     */

    const styles = StyleSheet.create({
      inputContainer: {
        padding: theme.spacing.medium,
        backgroundColor: disabled ? theme.colors.divider : theme.colors.surface,
        borderRadius: theme.borderRadius.medium,
        borderWidth: 1,
        borderColor: error ? theme.colors.error : theme.colors.divider,
        marginVertical: theme.spacing.small,
      },
      label: {
        color: theme.colors.text,
        fontSize: theme.typography.sizes.medium,
        fontWeight: "500",
        marginBottom: theme.spacing.tiny,
      },
      dateInput: {
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text,
      },
      modalContainer: {
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: theme.borderRadius.large,
        borderTopRightRadius: theme.borderRadius.large,
        padding: theme.spacing.large, // Modal içi ekstra padding // Extra padding inside modal
        maxHeight: Platform.OS === "ios" ? "70%" : "85%", // Modal yüksekliği artırıldı // Increased modal height
      },
      modalPreview: {
        fontSize: theme.typography.sizes.medium,
        color: theme.colors.text,
        textAlign: "center",
        marginBottom: theme.spacing.medium,
      },
      buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: theme.spacing.medium,
      },
      button: {
        paddingVertical: theme.spacing.small,
        paddingHorizontal: theme.spacing.medium,
        borderRadius: theme.borderRadius.small,
        backgroundColor: theme.colors.primary,
      },
      buttonText: {
        color: theme.colors.background,
        fontWeight: "bold",
      },
      infoText: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.sizes.small,
        marginTop: theme.spacing.tiny,
        fontStyle: "italic",
      },
      errorText: {
        color: theme.colors.error,
        fontSize: theme.typography.sizes.small,
        marginTop: theme.spacing.tiny,
      },
    });

    return (
      <View>
        {label && <Text style={styles.label}>{label}</Text>}
        <TouchableOpacity
          style={[styles.inputContainer, style]}
          onPress={() => setModalVisible(true)}
          disabled={disabled}
        >
          <Text style={styles.dateInput}>{formattedDate}</Text>
        </TouchableOpacity>
        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: theme.colors.modalOverlay,
            }}
          >
            <View style={styles.modalContainer}>
              <Text style={styles.modalPreview}>
                {uiText.selectedDate}: {tempDate.format("DD/MM/YYYY HH:mm")}
              </Text>
              <DatePicker
                mode="single"
                calendar="gregory"
                date={tempDate}
                onChange={handleChange}
                timePicker
                styles={datePickerStyles}
                enabledDates={(date) =>
                  !!date && dayjs(date).isBetween(minDate, maxDate, "day", "[]")
                }
                minDate={minDate.toDate()}
                maxDate={maxDate.toDate()}
              />
              <View style={styles.buttonGroup}>
                <TouchableOpacity onPress={handleConfirm} style={styles.button}>
                  <Text style={styles.buttonText}>{uiText.select}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleReset} style={styles.button}>
                  <Text style={styles.buttonText}>{uiText.reset}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.infoText}>{uiText.before7after}</Text>
            </View>
          </View>
        </Modal>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
);

export default AppDateTimePicker;
