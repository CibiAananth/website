import 'react';

declare module 'react' {
  interface CSSProperties {
    '--h-offset'?: string;
    '--w-offset'?: string;
  }
}
