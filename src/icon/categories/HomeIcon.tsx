import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

/**
 * HomeIcon bileşeni – Ev, mülk veya yerleşimle ilgili alanlarda kullanılabilir.
 * HomeIcon component – Suitable for home, property or residence related sections.
 */
type MyProps = SvgProps & {
  color: string;
  width?: number;
  height?: number;
};

const HomeIcon = ({ color, width = 24, height = 24, ...props }: MyProps) => (
  <Svg width={width} height={height} viewBox="0 0 64 64" fill="none" {...props}>
    <Path
      d="M55.579 31.579a2 2 0 0 1 .208 2.583l-1.284 1.781a1.996 1.996 0 0 1-3.036.245A462554.14 462554.14 0 0 1 32 16.722L12.533 36.188a1.996 1.996 0 0 1-3.036-.245l-1.284-1.781a2 2 0 0 1 .208-2.583L32 8l23.579 23.579z"
      stroke={color}
      strokeWidth={2}
    />

    <Path
      d="M13.977 34.745 32 16.722l18.023 18.023v20.002a2.25 2.25 0 0 1-.66 1.593 2.25 2.25 0 0 1-1.593.66H16.23a2.25 2.25 0 0 1-1.593-.66 2.25 2.25 0 0 1-.66-1.593V34.745zm6.759-15.481-7.885 7.885V15.322h7.885v3.942z"
      stroke={color}
      strokeWidth={2}
    />

    <Path
      d="M37 44.5a1.503 1.503 0 0 0-1.5-1.5h-7a1.503 1.503 0 0 0-1.5 1.5V57h10V44.5z"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export default HomeIcon;
