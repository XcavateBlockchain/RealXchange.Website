'use client';

import { Fragment } from 'react';
import NavHeader from '@/components/layouts/nav-header';
import Footer from '@/components/layouts/footer';
import { RootLayoutProps } from '@/types';
import Script from 'next/script';
import SporranContextProvider from '@/context/sporran-context';

export default function PageLayout({ children }: RootLayoutProps) {
  return (
    <SporranContextProvider>
      <NavHeader />
      {children}
      <Footer />
      <Script src="/kilt-script.js" />
    </SporranContextProvider>
  );
}
