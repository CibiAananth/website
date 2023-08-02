import React from 'react';

import { Explorer } from './components/explorer';

export default function HomePage(): React.ReactNode {
  return (
    <div className="h-v-calc" style={{ '--h-offset': '100px' }}>
      <Explorer />
    </div>
  );
}
