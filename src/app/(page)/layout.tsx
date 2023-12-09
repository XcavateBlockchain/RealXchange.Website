import { Fragment } from 'react';
import NavHeader from '@/components/layouts/nav-header';
import Footer from '@/components/layouts/footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Fragment>
      <NavHeader />
      {children}
      <Footer />
    </Fragment>
  );
}
