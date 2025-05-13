import React from 'react';
import Providers from './providers';


export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className="grid">
      <h1>layouts examples</h1>
      <Providers>
        {children}
      </Providers>
    </div>
  );
}