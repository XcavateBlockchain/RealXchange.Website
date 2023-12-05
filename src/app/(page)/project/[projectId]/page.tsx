import { LargeNftCard } from '@/components/cards/large-nft-card';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { BaseButton } from '@/components/ui/base-button';
import { Project } from '@/types';
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

export default function ProductPage() {
  return (
    <Fragment>
      <section className="flex flex-col gap-[33px] border-b border-foreground/[0.42] px-[100px] md:flex-row">
        <LargeNftCard project={project} />

        <aside className="flex flex-col gap-10 border-l border-foreground/[0.42] py-[43px] pl-[64px]">
          <PageHeader>
            <PageHeaderHeading>Lets Plant One Million Trees</PageHeaderHeading>
            <div className="flex space-x-2">
              <span className="font-light text-[0.75]"> Created by</span>
              <BaseButton className="text-[1rem]/[1.5rem] text-[#006EAE]">
                @Trillion_Treesfoundation
              </BaseButton>
            </div>
            <div className="mt-6 space-y-4">
              <dl></dl>
            </div>
          </PageHeader>
        </aside>
      </section>
    </Fragment>
  );
}
