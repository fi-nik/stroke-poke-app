import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export function ArrowRightIcon() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip0_0_66)">
        <Path
          d="M6 4L10 8L6 12"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_66">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
