import '@/styles/globals.css';
import 'neon/styles.css';

import React from 'react';
import { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

import Header from './components/header';
import { font_cal_sans, font_inter, font_josefin_sans } from './fonts';

export const metadata: Metadata = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen antialiased',
            font_inter.variable,
            font_cal_sans.variable,
            font_josefin_sans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            enableColorScheme
          >
            <Header />
            <div className="p-3">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
