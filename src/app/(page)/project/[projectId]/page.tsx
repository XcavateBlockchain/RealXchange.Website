import { LargeNftCard } from '@/components/cards/large-nft-card';
import { NftCard } from '@/components/cards/nft-card';
import { Icons } from '@/components/icons';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import {
  SectionDescription,
  SectionHeader,
  SectionTitle
} from '@/components/section-header';
import { BaseButton } from '@/components/ui/base-button';
import { projects } from '@/config/project';
import { ProjectDescription } from '@/sections/product/product-description';
import { Project, ProjectCategory } from '@/types';
import { Fragment } from 'react';

const project: Project = {
  id: 2,
  title: 'Let’s plant one million tre...',
  foundationName: 'GreenHaven',
  image: '/images/projects/project-six.png',
  category: 'environment',
  price: '550000',
  noOfNFTs: 100,
  description: ''
};

const category: ProjectCategory = {
  ['ecology']: {
    title: 'ecology',
    icon: <Icons.ecology className="h-[14px] w-[18px]" />
  },
  ['environment']: {
    title: 'environment',
    icon: <Icons.environment className="h-[14px] w-[18px]" />
  },
  ['social']: {
    title: 'social',
    icon: <Icons.social className="h-[14px] w-[18px]" />
  },
  ['housing']: {
    title: 'housing',
    icon: <Icons.housing className="h-[14px] w-[18px]" />
  }
};

export default function ProductPage({
  params: { projectId }
}: {
  params: { projectId: string };
}) {
  return (
    <Fragment>
      <section className="flex w-full flex-col gap-[33px] border-b border-foreground/[0.42] px-[100px] md:flex-row">
        {projectId === '1' ? (
          <LargeNftCard project={project} />
        ) : (
          <div className="my-[53px] grid w-[600px] grid-cols-2 gap-[18px]">
            <NftCard project={project} />
            <NftCard project={project} />
            <NftCard project={project} />
            <NftCard project={project} />
          </div>
        )}

        <ProjectDescription
          category={{
            title: category[project.category].title,
            icon: category[project.category].icon
          }}
        />
      </section>
    </Fragment>
  );
}
