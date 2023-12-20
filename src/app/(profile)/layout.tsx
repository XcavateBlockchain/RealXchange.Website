import { Fragment } from 'react';
import NavHeader from '@/components/layouts/nav-header';
import Footer from '@/components/layouts/footer';
import { RootLayoutProps } from '@/types';
import Script from 'next/script';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: RootLayoutProps) {
  return (
    <Fragment>
      <NavHeader />
      {children}
      <Footer />
      <Script src="/kilt-script.js" />
    </Fragment>
  );
}
