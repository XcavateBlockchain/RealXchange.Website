import { NavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'RealXchange',
  description: 'A sustainable web3 future',
  mainNav: [
    {
      title: 'MARKETPLACE',
      href: '/marketplace'
    },
    {
      title: 'HOW IT WORKS',
      href: '/how-it-works'
    },
    {
      title: 'STAKE',
      href: 'stake'
    }
  ] satisfies NavItem[]
};
