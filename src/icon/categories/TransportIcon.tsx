import * as React from "react";
import Svg, { SvgProps, Path, G } from "react-native-svg";

/**
 * TransportIcon bileşeni – Ulaşım kategorisi için SVG ikon.
 * TransportIcon component – SVG icon for transport category.
 */
type MyProps = SvgProps & {
  color: string;
  width?: number;
  height?: number;
};

const TransportIcon = ({
  color,
  width = 24,
  height = 24,
  ...props
}: MyProps) => (
  <Svg width={width} height={height} viewBox="0 0 6.827 6.827" {...props}>
    <G>
      <Path
        d="M1.23 2.845h4.367a.375.375 0 0 1 .376.377v1.536a.375.375 0 0 1-.376.377h-.085a.49.49 0 0 0-.024-.214h.11a.162.162 0 0 0 .114-.048.16.16 0 0 0 .048-.115V3.222a.162.162 0 0 0-.163-.163H1.23a.162.162 0 0 0-.163.163v1.536a.162.162 0 0 0 .163.163h.109a.483.483 0 0 0-.025.214H1.23a.375.375 0 0 1-.377-.377V3.222a.375.375 0 0 1 .377-.377zm1.023 2.076h2.321a.483.483 0 0 0-.024.214H2.277a.49.49 0 0 0-.024-.214z"
        fill={color}
      />
      <Path
        d="M.96 3.196h4.907v.213H.96zM.96 3.95h4.907v.214H.96z"
        fill={color}
      />
      <Path
        d="M1.72 3.303v.754h-.213v-.754zM2.36 3.303v.754h-.213v-.754zM3.002 3.303v.754h-.214v-.754zM3.642 3.303v.754H3.43v-.754zM4.283 3.303v.754H4.07v-.754zM4.924 3.303v.754H4.71v-.754z"
        fill={color}
      />
      <Path
        d="M5.03 4.598a.483.483 0 0 1 .343.826.483.483 0 0 1-.826-.342.483.483 0 0 1 .484-.484zm.192.292a.27.27 0 0 0-.462.192.27.27 0 0 0 .462.191.27.27 0 0 0 0-.383zM1.796 4.598a.483.483 0 0 1 .342.826.483.483 0 0 1-.826-.342.483.483 0 0 1 .484-.484zm.191.292a.27.27 0 0 0-.462.192.27.27 0 0 0 .462.191.27.27 0 0 0 0-.383z"
        fill={color}
      />
      <Path
        d="M5.478 4.382a.107.107 0 0 0 0 .213h.389a.107.107 0 0 0 0-.213h-.39z"
        fill={color}
      />
      <Path
        d="M1.23 1.26h4.367a.375.375 0 0 1 .376.377v1.53H5.76v-1.53a.162.162 0 0 0-.163-.163H1.23a.162.162 0 0 0-.163.163V3.11H.853V1.636a.375.375 0 0 1 .377-.375z"
        fill={color}
      />
      <Path
        d="M.96 1.611h4.907v.213H.96zM.96 2.366h4.907v.213H.96z"
        fill={color}
      />
      <Path
        d="M1.72 1.718v.755h-.213v-.755zM2.36 1.718v.755h-.213v-.755zM3.002 1.718v.755h-.214v-.755zM3.642 1.718v.755H3.43v-.755zM4.283 1.718v.755H4.07v-.755zM4.924 1.718v.755H4.71v-.755zM.853 3.003h.214v.213H.853z"
        fill={color}
      />
    </G>
    <Path d="M0 0h6.827v6.827H0z" fill="none" />
  </Svg>
);

export default TransportIcon;
