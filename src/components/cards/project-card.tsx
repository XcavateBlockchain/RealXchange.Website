import Image from 'next/image';
import Link from 'next/link';
import { BaseButton } from '../ui/base-button';
import { Icons } from '../icons';
import { Project, ProjectCategory } from '@/types';
import { formatNumber, formatPrice, slugify } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

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

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex h-[352px] w-[295px] flex-col items-start gap-4 rounded-lg bg-[##F3F3F3] px-2 pb-4 pt-2 shadow-feature-card">
      <Link href={`/project/${slugify(project.title)}`} className="w-full space-y-3.5">
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={279}
            height={210}
            priority
          />
          <div className=" absolute bottom-4 right-4 flex items-center justify-center gap-2 rounded-[20px] bg-background/[0.24] px-2 py-[6px] text-[0.75rem] font-light text-primary-light/[0.64]">
            {category[project.category].title}
          </div>
        </div>

        <div className="flex w-full items-start justify-between gap-[13px] border-b pb-2.5">
          <div className="flex w-[225px] flex-col items-start gap-2">
            <h3 className="truncate text-[0.875rem] font-medium">{project.title}</h3>
            <BaseButton className="text-[0.75rem] font-light underline-offset-4 hover:underline">
              @{project.foundationName}
            </BaseButton>
          </div>
          {category[project.category].icon}
        </div>
      </Link>

      <div className="flex w-full justify-between text-[0.75rem] font-light">
        <dl>
          <dt>Price</dt>
          <dd>{formatPrice(project.price, { currency: 'USD' })}</dd>
        </dl>
        <dl>
          <dt>NFTs</dt>
          <dd>{formatNumber(project.noOfNFTs)}</dd>
        </dl>
      </div>
    </div>
  );
}
