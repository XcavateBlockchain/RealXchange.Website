import type { Metadata } from 'next';
import NavHeader from '@/components/layouts/nav-header';
import '@/styles/globals.css';
import Footer from '@/components/layouts/footer';

export const metadata: Metadata = {
  title: 'RealXchange',
  description:
    'Re-defining environmental, ecological and social project funding through an interactive NFT marketplace. '
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
