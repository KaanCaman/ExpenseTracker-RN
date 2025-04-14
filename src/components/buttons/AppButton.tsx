import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { memo } from "react";
import { useTheme } from "../../hooks/useTheme";

/**
 * Button Props Type / Buton Prop Türü
 * @property {string} title - Button text / Buton metni
 * @property {() => void} [onPress] - Click handler / Tıklama işleyicisi
 * @property {StyleProp<ViewStyle>} [buttonStyle] - Container style / Kapsayıcı stili
 * @property {StyleProp<TextStyle>} [textStyle] - Text style / Metin stili
 * @property {boolean} [disabled] - Disabled state / Devre dışı durumu
 * @property {boolean} [loading] - Loading state / Yüklenme durumu
 */
type AppButtonProps = {
  title: string;
  onPress?: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
};

/**
 * Memoized Button Component / Önbelleğe Alınmış Buton Bileşeni
 * - Themed button with loading state / Tema destekli yüklenme durumlu buton
 * - Optimized with React.memo for performance / Performans için React.memo ile optimize edildi
 */
const AppButton = memo(
  ({
    title,
    onPress,
    textStyle,
    buttonStyle,
    disabled = false,
    loading = false,
  }: AppButtonProps) => {
    const { theme } = useTheme();

    // Calculate button opacity / Buton opaklığını hesapla
    const buttonOpacity = disabled || loading ? 0.6 : 1;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          {
            backgroundColor: theme.colors.primary,
            padding: theme.spacing.medium,
            borderRadius: theme.borderRadius.medium,
            opacity: buttonOpacity,
          },
          buttonStyle,
        ]}
        disabled={disabled || loading}
      >
        {loading ? (
          <ActivityIndicator
            color={theme.colors.background}
            testID="loading-indicator"
            size="small"
          />
        ) : (
          <Text
            style={[
              {
                color: theme.colors.background,
                fontSize: theme.typography.sizes.medium,
                fontWeight: "bold",
              },
              textStyle,
            ]}
            numberOfLines={1} // Prevent text overflow / Metin taşmasını önle
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
);

// Style definitions / Stil tanımlamaları
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppButton;
