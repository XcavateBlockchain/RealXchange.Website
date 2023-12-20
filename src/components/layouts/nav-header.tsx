'use client';

import { siteImage } from '@/config/image';
import Image from 'next/image';
import Link from 'next/link';
import MainNav from './main-nav';
import { Types, getExtensions, watchExtensions } from 'kilt-extension-api';
import { useCallback, useState } from 'react';
// import ConnectedWalletButton from './connected-wallet-button';
// import { Session } from '@/lib/session';
import ConnectWalletButton from './connect-wallet-button';
import ConnectedWalletButton from './connected-wallet-button';

export default function NavHeader() {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [session, setSession] = useState();
  const [extensions, setExtensions] = useState<
    Types.InjectedWindowProvider<Types.PubSubSessionV1 | Types.PubSubSessionV2>[]
  >([]);

  const handleConnect = useCallback((session: any) => {
    setSession(session);
  }, []);

  const logOut = () => {
    setIsConnected(false);
  };

  watchExtensions(extensions => {
    setExtensions(getExtensions());
  });

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-nav-header">
      <nav className="container flex items-center justify-between px-4 pb-4 pt-6 md:px-[100px]">
        <Link href={'/'}>
          <Image src={siteImage.logo} alt="logo" width={236} height={60} priority />
        </Link>
        <MainNav />

        {/* <ConnectWalletButton /> */}

        {!session ? (
          <ConnectWalletButton onConnect={handleConnect} />
        ) : (
          <ConnectedWalletButton onClick={logOut} />
        )}
      </nav>
    </header>
  );
}
