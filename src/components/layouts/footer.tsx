import { siteImage } from '@/config/image';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../icons';

export default function Footer() {
  return (
    <footer className="container flex w-full flex-col items-center gap-6 pb-10 pt-6">
      <section className="flex w-full items-center justify-between px-[100px]">
        <Image src={siteImage.logo} alt="logo" width={236} height={60} priority />

        <div className="flex items-center gap-2">
          <Link href={'/'} className="h-[43px] w-[43px]">
            <Icons.instagram />
          </Link>
          <Link href={'/'} className="h-[43px] w-[43px]">
            <Icons.linkedln />
          </Link>
        </div>
      </section>
      <section className="flex w-full items-center justify-between px-[100px]">
        <p className="w-[370px] text-[1rem]/[1.5rem] font-light">
          Where Sustainability Meets Web3 Innovation, Paving the Way for Greener, Smarter
          Real Estate Investments.
        </p>

        <div className="space-y-2">
          <h4 className="text-[1.25rem]/[1.8rem] font-bold capitalize">Explore</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href={'/'}
                className="text-[0.87rem]/[1.22rem] font-light hover:text-primary/60"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="text-[0.87rem]/[1.22rem] font-light hover:text-primary/60"
              >
                Conect a wallet
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-[1.25rem]/[1.8rem] font-bold capitalize">Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href={'/'}
                className="text-[0.87rem]/[1.22rem] font-light hover:text-primary/60"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="text-[0.87rem]/[1.22rem] font-light hover:text-primary/60"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="text-[0.87rem]/[1.22rem] font-light hover:text-primary/60"
              >
                FAQ&apos;s
              </Link>
            </li>
            <li>
              <Link
                href={'/'}
                className="text-[0.87rem]/[1.22rem] font-light hover:text-primary/60"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
