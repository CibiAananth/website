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
      animation: {
        'text-gradient': 'text-gradient 1.5s linear infinite',
        'background-shine': 'background-shine 2s linear infinite',
        'pulse-slow': 'pulse 8s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'border-width': 'border-width 3s infinite alternate',
      },
      keyframes: {
        'text-gradient': {
          to: {
            backgroundPosition: '200% center',
          },
        },
        'background-shine': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'border-width': {
          from: { width: '10px', opacity: '0' },
          to: { width: '100px', opacity: '1' },
        },
      },
    },
  },
} satisfies Config;
