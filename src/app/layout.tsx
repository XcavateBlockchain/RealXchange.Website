import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';
import { RootLayoutProps } from '@/types';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
