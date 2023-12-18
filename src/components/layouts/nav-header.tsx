'use client';

import { siteImage } from '@/config/image';
import Image from 'next/image';
import Link from 'next/link';
import MainNav from './main-nav';
import { useState } from 'react';
import ConnectedWalletButton from './connected-wallet-button';
import dynamic from 'next/dynamic';

import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
// const web3Accounts = dynamic(() => import('@polkadot/extension-dapp'), {
//   ssr: false
// });
// const web3Enable = dynamic(() => import('@polkadot/extension-dapp'), {
//   ssr: false
// });

export default function NavHeader() {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const [account, setAccount] = useState<InjectedAccountWithMeta[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<InjectedAccountWithMeta>();

  async function connectWallet() {
    const { web3Enable, web3Accounts } = await import('@polkadot/extension-dapp');

    const extensions = web3Enable('RealXchange');

    if (!extensions) {
      throw Error('No Extension Found');
    }

    const allAccounts = await web3Accounts();

    console.log(allAccounts);

    if (allAccounts.length === 1) {
      setIsConnected(true);
      setSelectedAccount(allAccounts[0]);
    }
  }

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
          <ConnectedWalletButton onClick={logOut} address={selectedAccount?.address!} />
        ) : (
          <button
            className="flex items-center gap-2.5 rounded-3xl bg-primary px-4 py-2 text-[0.875rem]/[1.25rem] text-primary-light duration-700 hover:bg-primary/90"
            onClick={connectWallet}
          >
            Connect wallet
          </button>
        )}
      </nav>
    </header>
  );
}
