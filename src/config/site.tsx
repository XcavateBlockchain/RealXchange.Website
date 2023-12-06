import { NavItem } from '@/types';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'RealXchange',
  description:
    'Re-defining environmental, ecological and social project funding through an interactive NFT marketplace. ',
  mainNav: [
    {
      title: 'MARKETPLACE',
      href: '/marketplace'
    },
    {
      title: 'HOW IT WORKS',
      href: '#how-it-works'
    },
    {
      title: 'Bond',
      href: '/bond'
    }
  ] satisfies NavItem[]
};
