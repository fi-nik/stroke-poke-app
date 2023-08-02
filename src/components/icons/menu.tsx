import { TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export function MenuIcon({ onPress }: { onPress?: () => void }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <Path
          d="M4.5 18H31.5"
          stroke="#F86060"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.5 9H31.5"
          stroke="#F86060"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.5 27H31.5"
          stroke="#F86060"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
}
