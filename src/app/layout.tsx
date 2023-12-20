import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { siteConfig } from '@/config/site';
import { RootLayoutProps } from '@/types';
import Script from 'next/script';
import '@/styles/globals.css';

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
      <Toaster position="bottom-right" />
      <body className="min-h-screen antialiased">
        {children}
        <Script src="/kilt-script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
