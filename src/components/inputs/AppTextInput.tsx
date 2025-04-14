import React, { memo, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Text,
  StyleProp,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../hooks/useTheme";

/**
 * Custom TextInput Props / Özel Metin Girişi Özellikleri
 * @property {string} [error] - Error message / Hata mesajı
 * @property {StyleProp<ViewStyle>} [containerStyle] - Outer container style / Dış kapsayıcı stili
 */
type AppTextInputProps = TextInputProps & {
  error?: string;
  containerStyle?: StyleProp<ViewStyle>;
};

/**
 * Themed TextInput Component / Tema Destekli Metin Girişi Bileşeni
 * - Dynamic border color based on focus and error state / Odak ve hata durumuna göre dinamik kenarlık rengi
 * - Full theme integration / Tam tema entegrasyonu
 * - Memoized for performance optimization / Performans için önbellekleme
 */
const AppTextInput = memo(
  ({
    error,
    containerStyle,
    style,
    placeholder,
    ...props
  }: AppTextInputProps) => {
    const { theme } = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    /**
     * Calculate border color / Kenarlık rengini hesapla
     * - Priority: Error > Focus > Default / Öncelik: Hata > Odak > Varsayılan
     */
    const getBorderColor = () => {
      if (error) return theme.colors.error;
      if (isFocused) return theme.colors.primary;
      return theme.colors.divider;
    };

    return (
      <View style={[styles.container, containerStyle]}>
        {/* Main Input / Ana Giriş Alanı */}
        <TextInput
          {...props}
          cursorColor={theme.colors.primary}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.placeholder}
          style={[
            {
              borderWidth: 1,
              borderColor: getBorderColor(),
              color: theme.colors.text,
              padding: theme.spacing.small,
              borderRadius: theme.borderRadius.medium,
              fontSize: theme.typography.sizes.medium,
            },
            styles.layout,
            style,
          ]}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e); // Propagate original onFocus / Orijinal onFocus'u ilet
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e); // Propagate original onBlur / Orijinal onBlur'u ilet
          }}
        />

        {/* Error Message / Hata Mesajı */}
        {error && (
          <Text
            style={[
              {
                color: theme.colors.error,
                marginTop: theme.spacing.tiny,
                fontSize: theme.typography.sizes.small,
              },
            ]}
          >
            {error}
          </Text>
        )}
      </View>
    );
  }
);

// Component Styles / Bileşen Stilleri
const styles = StyleSheet.create({
  /**
   * Base container style / Temel kapsayıcı stili
   * - 90% width of parent / Ebeveyn genişliğinin %90'ı
   */
  container: {
    width: "90%",
  },

  /**
   * Layout settings / Düzen ayarları
   * - Fixed height for consistent appearance / Tutarlı görünüm için sabit yükseklik
   */
  layout: {
    height: 60,
  },
});

export default AppTextInput;
