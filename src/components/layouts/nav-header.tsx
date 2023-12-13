'use client';

import { siteImage } from '@/config/image';
import Image from 'next/image';
import Link from 'next/link';
import MainNav from './main-nav';
import { useState } from 'react';
import ConnectedWalletButton from './connected-wallet-button';

export default function NavHeader() {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  function onConnect() {
    setIsConnected(true);
  }

  const logOut = () => {
    setIsConnected(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-nav-header">
      <nav className="container flex items-center justify-between px-4 pb-4 pt-6 md:px-[100px]">
        <Link href={'/'}>
          <Image src={siteImage.logo} alt="logo" width={236} height={60} priority />
        </Link>
        <MainNav />

        {isConnected ? (
          <ConnectedWalletButton onClick={logOut} />
        ) : (
          <button
            className="flex items-center gap-2.5 rounded-3xl bg-primary px-4 py-2 text-[0.875rem]/[1.25rem] text-primary-light duration-700 hover:bg-primary/90"
            onClick={onConnect}
          >
            Connect wallet
          </button>
        )}
      </nav>
    </header>
  );
}
