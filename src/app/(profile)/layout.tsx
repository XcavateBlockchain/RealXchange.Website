import { Fragment } from 'react';
import NavHeader from '@/components/layouts/nav-header';
import Footer from '@/components/layouts/footer';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <Fragment>
      <NavHeader />
      {children}
      <Footer />
    </Fragment>
  );
}
