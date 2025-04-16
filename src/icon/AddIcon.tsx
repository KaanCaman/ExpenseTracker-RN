import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

type MyProps = SvgProps & {
  color: string;
};

const AddIcon = (props: MyProps) => (
  <Svg
    viewBox="0 0 512 512"
    width={props.width || 24}
    height={props.height || 24}
    fill="none"
    {...props}
  >
    <Path
      d="M256 512C114.625 512 0 397.391 0 256C0 114.609 114.625 0 256 0C397.391 0 512 114.609 512 256C512 397.391 397.391 512 256 512Z"
      stroke={props.color}
      strokeWidth={32}
    />

    <Path
      d="M256 448C149.969 448 64 362.031 64 256C64 149.969 149.969 64 256 64C362.047 64 448 149.969 448 256C448 362.031 362.047 448 256 448Z"
      stroke={props.color}
      strokeWidth={16}
    />

    <Path
      d="M288 384H224V288H128V224H224V128H288V224H384V288H288V384Z"
      fill={props.color}
    />
  </Svg>
);

export default AddIcon;
