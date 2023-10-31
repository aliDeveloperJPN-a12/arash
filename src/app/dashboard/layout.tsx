import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'dashboard',
  description: 'zekavat dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
