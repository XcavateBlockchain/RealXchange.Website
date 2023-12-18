export interface RootLayoutProps {
  children: React.ReactNode;
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
}

export type CategoryName = 'ecology' | 'housing' | 'environment' | 'social';

export interface Category {
  title: CategoryName;
  icon: React.ReactNode;
}

export type ProjectCategory = {
  [key: string]: Category;
};

export interface Project {
  id: string | number;
  title: string;
  foundationName: string;
  image: string;
  category: CategoryName;
  price: string;
  price_per_nft?: number;
  noOfNFTs: number;
  description: string;
}
