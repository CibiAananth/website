import { Inter, Josefin_Sans } from 'next/font/google';
import LocalFont from 'next/font/local';

export const font_inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const font_josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin',
});

export const font_cal_sans = LocalFont({
  src: './calsans.ttf',
  variable: '--font-cal',
});
