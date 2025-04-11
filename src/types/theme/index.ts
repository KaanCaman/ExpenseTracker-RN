import appTheme from "../../theme";

/**
 * Spacing Size - Aralık Boyutları
 * @property tiny - 4px   (Çok küçük boşluklar)
 * @property small - 8px  (Küçük boşluklar)
 * @property medium - 16px (Orta boşluk)
 * @property large - 24px  (Büyük boşluk)
 * @property huge - 32px   (Çok büyük boşluk)
 */
export type SpacingSize = "tiny" | "small" | "medium" | "large" | "huge";
/**
 * HEX color code type / HEX renk kodu türü
 * Format: #RRGGBB veya #RRGGBBAA
 */
export type HexColor = `#${string}`;
/**
 * Border Radius Size - Kenar Yuvarlaklığı
 * @property small - 4px  (Inputlar, butonlar)
 * @property medium - 8px (Kartlar)
 * @property large - 16px (Büyük bileşenler)
 * @property full - 999px (Tam yuvarlak)
 */
export type BorderRadiusSize = "small" | "medium" | "large" | "full";

/**
 * Font Size - Yazı Boyutları
 * @property xsmall - 12px (Küçük etiketler)
 * @property small - 14px  (Açıklamalar)
 * @property medium - 16px (Normal metin)
 * @property large - 24px  (Alt başlıklar)
 * @property xlarge - 32px (Ana başlıklar)
 */
export type FontSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

/**
 * Font Weight - Yazı Kalınlığı
 * @property regular - 400 (Normal)
 * @property medium - 500  (Orta)
 * @property bold - 700    (Kalın)
 */
export type FontWeight = "regular" | "medium" | "bold";

// ================= TEMA TİPLERİ ================= //
export interface SpacingType {
  /**
   * Tüm spacing değerleri (4'ün katları)
   * Örnek: spacing.medium = 16px
   */
  tiny: number;
  small: number;
  medium: number;
  large: number;
  huge: number;
}

export interface BorderRadiusType {
  /**
   * Kenar yuvarlaklığı değerleri
   */
  small: number;
  medium: number;
  large: number;
  full: number;
}

export interface FontSizesType {
  /**
   * Yazı boyutları
   */
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
}

export interface FontWeightsType {
  /**
   * Yazı kalınlıkları
   */
  regular: number;
  medium: number;
  bold: number;
}

export interface ColorPalette {
  /**
   * Primary brand color / Ana marka rengi
   * @default #FF6C47
   */
  primary: HexColor;

  /**
   * Secondary color for accents / İkincil vurgu rengi
   * @default #3A3A3A
   */
  secondary: HexColor;

  /**
   * Background color / Arkaplan rengi
   * @default #FFFFFF
   */
  background: HexColor;

  /**
   * Surface color for components / Bileşenler için yüzey rengi
   * @default #F8F9FA
   */
  surface: HexColor;

  /**
   * Primary text color / Ana metin rengi
   * @default #2D2D2D
   */
  text: HexColor;

  /**
   * Accent color for highlights / Vurgular için aksan rengi
   * @default #00C9B7
   */
  accent: HexColor;

  /**
   * Error state color / Hata durum rengi
   * @default #FF3B30
   */
  error: HexColor;

  /**
   * Success state color / Başarı durum rengi
   * @default #34C759
   */
  success: HexColor;

  /**
   * Warning state color / Uyarı durum rengi
   * @default #FF9500
   */
  warning: HexColor;

  /**
   * Divider color / Ayırıcı çizgi rengi
   * @default #E5E5EA
   */
  divider: HexColor;
}

// Diğer tipler aynı kalacak...
export interface TypographyType {
  fontFamily: string;
  sizes: FontSizesType;
  weights: FontWeightsType;
}

export interface ThemeType {
  colors: {
    light: ColorPalette;
    dark: ColorPalette;
  };
  typography: TypographyType;
  spacing: SpacingType;
  borderRadius: BorderRadiusType;
}

// Context App Theme
export interface AppTheme {
  colors: ColorPalette;
  typography: TypographyType;
  spacing: SpacingType;
  borderRadius: BorderRadiusType;
}
