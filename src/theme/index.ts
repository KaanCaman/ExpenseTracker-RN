import { ThemeType } from "../types/theme";

const appTheme: ThemeType = {
  colors: {
    light: {
      scheme: "light",
      // Primary brand color / Ana marka rengi
      primary: "#FF6C47",
      // Secondary color for accents / İkincil vurgu rengi
      secondary: "#3A3A3A",
      // Background color / Arkaplan rengi
      background: "#FFFFFF",
      // Surface color for components / Bileşenler için yüzey rengi
      surface: "#F8F9FA",
      // Primary text color / Ana metin rengi
      text: "#2D2D2D",
      // Accent color for highlights / Vurgular için aksan rengi
      accent: "#00C9B7",
      // Error state color / Hata durum rengi
      error: "#FF3B30",
      // Success state color / Başarı durum rengi
      success: "#34C759",
      // Warning state color / Uyarı durum rengi
      warning: "#FF9500",
      // Divider color / Ayırıcı çizgi rengi
      divider: "#E5E5EA",

      // Light mode Secondary text / ikincil text rengi
      textSecondary: "#757575",

      // Light mode placholder / placeholder rengi
      placeholder: "#A0A0A0",

      modalOverlay: "rgba(0,0,0,0.5)", // Modal dış overlay rengi
    },
    dark: {
      scheme: "dark",
      // Dark mode primary color / Karanlık mod ana renk
      primary: "#FF8C6A",
      // Dark mode secondary color / Karanlık mod ikincil renk
      secondary: "#E0E0E0",
      // Dark background color / Karanlık arkaplan rengi
      background: "#121212",
      // Dark surface color / Karanlık yüzey rengi
      surface: "#1E1E1E",
      // Dark mode text color / Karanlık mod metin rengi
      text: "#F5F5F5",
      // Accent color (same as light) / Aksan rengi (aynı)
      accent: "#00C9B7",
      // Dark error color / Karanlık mod hata rengi
      error: "#FF453A",
      // Dark success color / Karanlık mod başarı rengi
      success: "#30D158",
      // Dark warning color / Karanlık mod uyarı rengi
      warning: "#FF9F0A",
      // Dark divider color / Karanlık mod ayırıcı rengi
      divider: "#2C2C2E",

      // Dark mode Secondary text / Karanlık ikincil text rengi
      textSecondary: "#9E9E9E",

      // Dark mode placholder / Karanlık için placeholder rengi
      placeholder: "#B0B0B0",

      modalOverlay: "rgba(0,0,0,0.5)", // Modal dış overlay rengi
    },
  },
  typography: {
    // Font family stack / Yazı tipi ailesi
    fontFamily: "'TT Commons', 'Inter', sans-serif",
    sizes: {
      // Extra small text (labels) / Çok küçük metin (etiketler)
      xsmall: 12,
      // Small text (captions) / Küçük metin (açıklamalar)
      small: 14,
      // Medium text (body) / Orta metin (ana içerik)
      medium: 16,
      // Large text (subheadings) / Büyük metin (alt başlıklar)
      large: 24,
      // Extra large text (headings) / Çok büyük metin (başlıklar)
      xlarge: 32,
    },
    weights: {
      // Regular weight / Normal kalınlık
      regular: 400,
      // Medium weight / Orta kalınlık
      medium: 500,
      // Bold weight / Kalın
      bold: 700,
    },
  },
  spacing: {
    // Tiny spacing (4px) / Çok küçük boşluk
    tiny: 4,
    // Small spacing (8px) / Küçük boşluk
    small: 8,
    // Medium spacing (16px) / Orta boşluk
    medium: 16,
    // Large spacing (24px) / Büyük boşluk
    large: 24,
    // Huge spacing (32px) / Çok büyük boşluk
    huge: 32,
  },
  borderRadius: {
    // Small radius (buttons) / Küçük yuvarlak (butonlar)
    small: 4,
    // Medium radius (cards) / Orta yuvarlak (kartlar)
    medium: 8,
    // Large radius (modals) / Büyük yuvarlak (modallar)
    large: 16,
    // Full circle / Tam yuvarlak
    full: 999,
  },
} as const; // Freezes the object for type safety / Nesneyi tip güvenliği için dondurur

export default appTheme;
