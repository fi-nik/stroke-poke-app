import Svg, { Circle } from "react-native-svg";

type Props = {
  lineColor: string;

  fillColor: string;
  filled: boolean;
};
export function RadioCircle({ lineColor, filled = false, fillColor }: Props) {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <Circle
        cx="12.5"
        cy="12.5"
        r="11.5"
        stroke={filled ? fillColor : lineColor}
        strokeWidth="2"
      />
      {filled && <Circle cx="12.5" cy="12.5" r="7.5" fill={fillColor} />}
    </Svg>
  );
}
