import { Icons } from '@/components/icons';
import { Category, Project, ProjectCategory } from '@/types';

export const featuredProjects = [
  {
    title: 'Let’s plant 1 million trees',
    foundationName: '@Trillion_Treesfoundation',
    image: '/images/projects/project-one.png',
    category: 'environment'
  },
  {
    title: 'Wildlife',
    foundationName: '@Trillion_Treesfoundation',
    image: '/images/projects/project-two.png',
    category: 'ecology'
  },
  {
    title: 'Save the trees',
    foundationName: '@Trillion_Treesfoundation',
    image: '/images/projects/project-three.png',
    category: 'housing'
  }
  // {
  //   title: 'GreenSynergy',
  //   foundationName: '@Trillion_Treesfoundation',
  //   image: '/images/projects/project-four.png',
  //   category: 'social'
  // }
] satisfies Omit<Project, 'price' | 'noOfNFTs'>[];
