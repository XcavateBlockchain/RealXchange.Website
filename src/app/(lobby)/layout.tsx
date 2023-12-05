import { Fragment } from 'react';
import NavHeader from '@/components/layouts/nav-header';
import Footer from '@/components/layouts/footer';

interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LobbyLayoutProps) {
  return (
    <Fragment>
      <NavHeader />
      {children}
      <Footer />
    </Fragment>
  );
}
