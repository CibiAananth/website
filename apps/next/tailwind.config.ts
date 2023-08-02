import baseConfig from 'tailwind-config';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [...baseConfig.content, '../../packages/neon/src/**/*.{ts,tsx}'],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['var(--font-josefin)', ...fontFamily.sans],
      },
    },
  },
} satisfies Config;
