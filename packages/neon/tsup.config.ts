import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: true,
  sourcemap: true,
  entry: ['src/styles.css', 'src/**/*.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  clean: false,
  external: ['react'],
  banner: {
    js: '"use client";',
  },
  ...options,
}));
