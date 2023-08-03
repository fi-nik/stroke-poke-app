import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export function CheckboxIcon({ checked }) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {checked ? (
        <>
          <Rect width="24" height="24" rx="2" fill="#F86060" />
          <G clipPath="url(#clip0_0_638)">
            <Path
              d="M7.91675 12L10.8334 14.9167L16.6667 9.08333"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_0_638">
              <Rect
                width="14"
                height="14"
                fill="white"
                transform="translate(5 5)"
              />
            </ClipPath>
          </Defs>
        </>
      ) : (
        <>
          <Rect width="24" height="24" rx="2" fill="#FFFBFB" />
          <Rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="1.5"
            stroke="#F86060"
            strokeOpacity="0.3"
          />
        </>
      )}
    </Svg>
  );
}
