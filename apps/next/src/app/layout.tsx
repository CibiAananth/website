import '@/styles/globals.css';
import 'neon/styles.css';

import React from 'react';

import { ThemeProvider } from '@/components/theme-provider';

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <head>
          <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="white"
          />
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="black"
          />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            enableColorScheme
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
