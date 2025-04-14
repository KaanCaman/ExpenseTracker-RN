import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

/**
 * SvgProps ile birleşmiş özel prop tipi
 * Custom prop type extending SvgProps
 */
type MyProps = SvgProps & {
  color: string;
  width?: number;
  height?: number;
};

/**
 * FoodIcon bileşeni – Gıda kategorisi için SVG ikon.
 * FoodIcon component – SVG icon for food category.
 */
const FoodIcon = ({ color, width = 24, height = 24, ...props }: MyProps) => (
  <Svg width={width} height={height} viewBox="0 0 64 64" {...props}>
    <Path d="M0 0h64v64H0z" fill="none" />
    <Path
      d="M35.986 27H8.36l2.822 25.009A2.242 2.242 0 0 0 13.41 54h17.525a2.243 2.243 0 0 0 2.229-1.991L35.986 27z"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />

    <Path
      d="M38.346 23.266a2.244 2.244 0 0 0-2.243-2.243H8.243A2.24 2.24 0 0 0 6 23.266v1.491A2.24 2.24 0 0 0 8.243 27h27.86a2.242 2.242 0 0 0 2.243-2.243v-1.491z"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />

    <Path
      d="M33.276 21.023H11.07v-1.762a2.243 2.243 0 0 1 2.243-2.243h17.72a2.243 2.243 0 0 1 2.243 2.243v1.762zM21.221 35.019c.468 2.843 1.048 3.492-.255 7.305-.592 1.733-.382 3.373.105 4.727l-.105.016c-2.224 0-4.029-2.708-4.029-6.043s1.805-6.043 4.029-6.043l.255.038zm2.413-.038c2.103.166 3.775 2.794 3.775 6.004 0 3.288-1.755 5.967-3.925 6.027-.487-1.354-.697-2.993-.105-4.726 1.303-3.813.723-4.462.255-7.305zM37.662 52l14.98 1.477a4.691 4.691 0 0 0 5.118-4.101c.709-5.916-.657-15.745-17.063-17.362-1.897-.187-3.624-.228-5.197-.145"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />

    <Path
      d="M47.05 33.708c.657 1.217 1.786 4.066 1.762 9.249m-10.15-10.753s2.254 2.669 2.22 9.971M22 17.018 23 10l8 1"
      fill="none"
      stroke={color}
      strokeWidth={2}
    />
  </Svg>
);

export default FoodIcon;
