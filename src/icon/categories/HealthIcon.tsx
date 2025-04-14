import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

/**
 * HealthIcon bileşeni – Sağlık kategorisi için ikon.
 * HealthIcon component – SVG icon for health category.
 */
type MyProps = SvgProps & {
  color?: string;
  width?: number;
  height?: number;
};

const HealthIcon = ({
  color = "#222a33",
  width = 24,
  height = 24,
  ...props
}: MyProps) => (
  <Svg width={width} height={height} viewBox="0 0 64 64" fill="none" {...props}>
    <Path d="M22 10h2m18 0h-2" stroke={color} strokeWidth={2} />

    <Circle cx={32} cy={32} r={3} stroke={color} strokeWidth={2} />
    <Path
      d="M42 8.833v13.334c0 4.482-2.949 8.276-7.014 9.546m-5.972 0C24.949 30.443 22 26.649 22 22.167V8.833M32 35.75V47.5a7.497 7.497 0 0 0 7.5 7.5h0a7.5 7.5 0 0 0 7.5-7.5V34M26 13.369c0-.598.485-1.083 1.083-1.083h2.12c.598 0 1.083-.485 1.083-1.083v-2.12c0-.598.485-1.083 1.083-1.083h1.262c.598 0 1.083.485 1.083 1.083v2.12c0 .598.485 1.083 1.083 1.083h2.12c.598 0 1.083.485 1.083 1.083v1.262c0 .598-.485 1.083-1.083 1.083h-2.12c-.598 0-1.083.485-1.083 1.083v2.12c0 .598-.485 1.083-1.083 1.083h-1.262a1.083 1.083 0 0 1-1.083-1.083v-2.12c0-.598-.485-1.083-1.083-1.083h-2.12A1.083 1.083 0 0 1 26 14.631v-1.262z"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export default HealthIcon;
