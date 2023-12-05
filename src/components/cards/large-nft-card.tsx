import Image from 'next/image';
import Link from 'next/link';
import { BaseButton } from '../ui/base-button';
import { Icons } from '../icons';
import { Project, ProjectCategory } from '@/types';
import { formatNumber, formatPrice, slugify } from '@/lib/utils';

interface LargeNftCardProps {
  project: Project;
}

const category: ProjectCategory = {
  ['ecology']: {
    title: 'ecology',
    icon: <Icons.ecology className="h-[25px] w-8" />
  },
  ['environment']: {
    title: 'environment',
    icon: <Icons.environment className="h-[25px] w-8" />
  },
  ['social']: {
    title: 'social',
    icon: <Icons.social className="h-[25px] w-8" />
  },
  ['housing']: {
    title: 'housing',
    icon: <Icons.housing className="h-[25px] w-8" />
  }
};

export function LargeNftCard({ project }: LargeNftCardProps) {
  return (
    <div className="my-[43px] inline-flex h-[634px] w-[531px] flex-col items-start gap-7 rounded-lg bg-background px-3.5 pb-7 pt-3.5 shadow-feature-card">
      <Link href={`/project/${slugify(project.title)}`} className="w-full space-y-7">
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={502}
            height={378}
            priority
          />
          <div className=" absolute bottom-4 right-4 flex items-center justify-center gap-2 rounded-[20px] bg-background/[0.24] px-2 py-[6px] text-[0.75rem] font-light text-primary-light/[0.64]">
            {category[project.category].title}
          </div>
        </div>

        <div className="flex w-full items-start justify-between gap-[13px] border-b pb-2.5">
          <h3 className="truncate text-[1.6rem]  font-medium">{project.title}</h3>
          {category[project.category].icon}
        </div>
      </Link>

      <div className="flex w-full justify-between text-[1.4rem] font-light">
        <dl>
          <dt className="text-foreground/[0.6]">Price</dt>
          <dd>{formatPrice(project.price, { currency: 'USD' })}</dd>
        </dl>
        <dl>
          <dt className="text-foreground/[0.6]">NFTs</dt>
          <dd>{formatNumber(project.noOfNFTs)}</dd>
        </dl>
      </div>
    </div>
  );
}
