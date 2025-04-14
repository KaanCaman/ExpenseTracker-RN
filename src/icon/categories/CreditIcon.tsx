import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

/**
 * CreditIcon bileşeni – Kredi kartı veya ödeme ile ilgili kategorilerde kullanılır.
 * CreditIcon component – Used for credit card or payment-related categories.
 */
type MyProps = SvgProps & {
  color?: string; // Ana renk / Main color
  width?: number;
  height?: number;
};

const CreditIcon = ({
  color = "#231f20",
  width = 24,
  height = 24,
  ...props
}: MyProps) => (
  <Svg width={width} height={height} viewBox="0 0 32 32" fill="none" {...props}>
    <G>
      {/* Kredi kartı dış çerçeve ve bölümleri / Credit card frame and sections */}
      <Path
        d="M27.55 6H4.45A2.45 2.45 0 0 0 2 8.45v15.1A2.45 2.45 0 0 0 4.45 26h23.1A2.45 2.45 0 0 0 30 23.55V8.45A2.45 2.45 0 0 0 27.55 6zM4.45 8h23.1a.45.45 0 0 1 .45.45V12H4V8.45A.45.45 0 0 1 4.45 8zm23.1 16H4.45a.45.45 0 0 1-.45-.45V14h24v9.55a.45.45 0 0 1-.45.45z"
        fill={color}
      />
      {/* Kart içi detaylar / Inner card details */}
      <Path
        d="M24.18 17h-4.36A1.83 1.83 0 0 0 18 18.82v1.36A1.83 1.83 0 0 0 19.82 22h4.36A1.83 1.83 0 0 0 26 20.18v-1.36A1.83 1.83 0 0 0 24.18 17zM24 20h-4v-1h4zM6 18h3a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2zM12 20H6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"
        fill={color}
      />
    </G>
  </Svg>
);

export default CreditIcon;
