import Svg, { Path } from 'react-native-svg';

export function CloseIcon() {
  return (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <Path
        d="M27 9L9 27"
        stroke="#F86060"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 9L27 27"
        stroke="#F86060"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
