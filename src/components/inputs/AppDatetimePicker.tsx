import React, { memo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import DatePicker from "react-native-ui-datepicker";
import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import { useTheme } from "../../hooks/useTheme";

// dayjs için karşılaştırma eklentilerini aktif et / enable dayjs comparison plugins
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

// Bileşen özelliklerinin tipi / Component props type definition
type Props = {
  value: Date; // Seçili tarih / selected date
  onChange: (date: Date) => void; // Tarih değişiminde çağrılır / called when date changes
  onSelect?: (date: Date) => void; // Seç butonunda çağrılır / called when "select" button pressed
  onReset?: () => void; // Sıfırla butonunda çağrılır / called when "reset" button pressed
  label?: string; // Başlık metni / label text
  error?: string; // Hata mesajı / error message
  disabled?: boolean; // Pasif duruma alma / disable control
  minimumDate?: Date; // Minimum tarih / minimum date allowed
  maximumDate?: Date; // Maksimum tarih / maximum date allowed
  style?: ViewStyle; // Dış stil / external container style
};

/**
 * AppDateTimePicker bileşeni
 * React.memo ile sarmalanarak yalnızca gerekli durumlarda yeniden render edilir
 * Wrapped with React.memo to avoid unnecessary re-renders unless props change
 */
const AppDateTimePicker = memo(
  ({
    value,
    onChange,
    onSelect,
    onReset,
    label = "Tarih & Saat Seç",
    error,
    disabled = false,
    minimumDate = dayjs().subtract(7, "day").startOf("day").toDate(),
    maximumDate = dayjs().add(7, "day").endOf("day").toDate(),
    style,
  }: Props) => {
    const { theme } = useTheme(); // Tema hook'u / Theme hook

    const selectedDate = dayjs(value); // Seçili tarihi dayjs'e çevir / convert selected date to dayjs
    const minDate = dayjs(minimumDate);
    const maxDate = dayjs(maximumDate);

    const [tempDate, setTempDate] = useState(selectedDate); // Geçici tarih / temporary date

    /**
     * Takvimden tarih seçildiğinde çalışır
     * Triggered when date is selected from calendar
     */
    const handleChange = (params: {
      date?: string | number | Date | Dayjs | null;
    }) => {
      if (!disabled && params?.date) {
        const selected = dayjs(params.date);
        if (
          selected.isBefore(minDate, "day") ||
          selected.isAfter(maxDate, "day")
        )
          return;
        setTempDate(selected);
        onChange(selected.toDate());
      }
    };

    /**
     * Belirli bir tarihin seçilebilir olup olmadığını kontrol eder
     * Checks if a given date is within min-max range
     */
    const isDateEnabled = (
      date: string | number | Date | Dayjs | null | undefined
    ) => {
      if (!date) return false;
      const d = dayjs(date);
      return (
        d.isSameOrAfter(minDate, "day") && d.isSameOrBefore(maxDate, "day")
      );
    };

    /**
     * Seç butonuna basıldığında çağrılır
     * Triggered when the user confirms date selection
     */
    const handleConfirm = () => {
      onChange(tempDate.toDate());
      onSelect?.(tempDate.toDate());
    };

    /**
     * Sıfırla butonuna basıldığında çalışır
     * Resets selected date to today
     */
    const handleReset = () => {
      const today = dayjs();
      setTempDate(today);
      onChange(today.toDate());
      onReset?.();
    };

    /**
     * Bileşen içi stiller (tema bazlı)
     * Component styles based on theme
     */
    const styles = StyleSheet.create({
      container: {
        padding: theme.spacing.medium,
        backgroundColor: disabled ? theme.colors.divider : theme.colors.surface,
        borderRadius: theme.borderRadius.medium,
        borderWidth: 1,
        borderColor: error ? theme.colors.error : theme.colors.divider,
        marginVertical: theme.spacing.small,
        opacity: disabled ? 0.5 : 1,
      },
      label: {
        color: theme.colors.text,
        fontSize: theme.typography.sizes.medium,
        fontWeight: "500",
        marginBottom: theme.spacing.tiny,
      },
      errorText: {
        color: theme.colors.error,
        fontSize: theme.typography.sizes.small,
        marginTop: theme.spacing.tiny,
      },
      infoText: {
        color: theme.colors.textSecondary,
        fontSize: theme.typography.sizes.small,
        marginTop: theme.spacing.tiny,
        fontStyle: "italic",
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
    });

    /**
     * DatePicker özel stil nesnesi
     * Themed style overrides for DatePicker
     */
    const pickerStyles = {
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
      button_prev_image: { tintColor: theme.colors.text },
      button_next_image: { tintColor: theme.colors.text },
      disabled_label: { color: theme.colors.placeholder, opacity: 0.4 },
    } satisfies Partial<
      Record<
        string,
        | import("react-native").ViewStyle
        | import("react-native").TextStyle
        | import("react-native").ImageStyle
      >
    >;

    /**
     * TypeScript 'satisfies' açıklaması:
     * pickerStyles nesnesinin key'leri string ve değerleri stil tipi olmalıdır (ViewStyle, TextStyle, ImageStyle)
     * This ensures pickerStyles object keys are strings and values are valid style types
     */

    return (
      <View style={style}>
        {/* Başlık varsa göster / Show label if exists */}
        {label && <Text style={styles.label}>{label}</Text>}

        {/* Tarih seçici ve butonlar / Picker and buttons */}
        <View style={styles.container}>
          <DatePicker
            mode="single"
            calendar="gregory"
            date={tempDate}
            onChange={handleChange}
            timePicker
            styles={pickerStyles}
            enabledDates={isDateEnabled}
            minDate={minDate.toDate()}
            maxDate={maxDate.toDate()}
          />

          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={handleConfirm} style={styles.button}>
              <Text style={styles.buttonText}>Seç</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReset} style={styles.button}>
              <Text style={styles.buttonText}>Sıfırla</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bilgilendirme ve hata / Info and error messages */}
        <Text style={styles.infoText}>
          Bugünden itibaren 7 gün öncesi ve sonrası seçilebilir.
        </Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
);

export default AppDateTimePicker;
