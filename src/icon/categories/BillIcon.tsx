import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

/**
 * BillIcon bileşeni – Fatura kategorisi için SVG ikon.
 * BillIcon component – SVG icon for bill category.
 */
type MyProps = SvgProps & {
  color: string;
  width?: number;
  height?: number;
};

const BillIcon = ({ color, width = 24, height = 24, ...props }: MyProps) => (
  <Svg width={width} height={height} viewBox="0 0 128 128" {...props}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
    >
      <Path d="M99.67 128.67H21.05A19.06 19.06 0 0 1 2 109.61v-.79h81.9v4.07a15.78 15.78 0 0 0 15.77 15.78z" />

      <Path d="M115.45 14v98.85a15.78 15.78 0 1 1-31.55.794q-.011-.4 0-.794v-4.07H33.69V14h1l10-12 10 12 10-12 10 12 10-12 10 12 10-12 10 12zM46.43 34.46h37.92m11.25 0h10.37M46.43 49.41h37.92m11.25 0h10.37M46.43 64.36h37.92m11.25 0h10.37M46.43 79.31h37.92m11.25 0h10.37M46.43 94.25h37.92m11.25 0h10.37" />
    </G>
  </Svg>
);

export default BillIcon;
