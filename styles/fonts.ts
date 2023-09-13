import localFont from 'next/font/local';

// https://github.com/orioncactus/pretendard
export const pretendard = localFont({
  src: './woff2/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

// https://github.com/toss/tossface
export const tossface = localFont({
  src: './ttf/TossFaceFontMac.ttf',
  display: 'swap',
  variable: '--font-tossface',
});
