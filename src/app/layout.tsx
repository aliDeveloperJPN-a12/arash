import './globals.css';
import React from 'react';
import { Providers } from './redux/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
