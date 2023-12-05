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
  title: string;
  foundationName: string;
  image: string;
  category: CategoryName;
  price: string;
  noOfNFTs: number;
}
