import Image from 'next/image';
import Link from 'next/link';
import { BaseButton } from '../ui/base-button';
import { Icons } from '../icons';
import { Project, ProjectCategory } from '@/types';
import { formatNumber, formatPrice, slugify } from '@/lib/utils';

interface NftCardProps {
  project: Project;
}

const category: ProjectCategory = {
  ['ecology']: {
    title: 'ecology',
    icon: <Icons.ecology className="h-[12px] w-[15px]" />
  },
  ['environment']: {
    title: 'environment',
    icon: <Icons.environment className="h-[12px] w-[15px]" />
  },
  ['social']: {
    title: 'social',
    icon: <Icons.social className="h-[12px] w-[15px]" />
  },
  ['housing']: {
    title: 'housing',
    icon: <Icons.housing className="h-[12px] w-[15px]" />
  }
};

export function NftCard({ project }: NftCardProps) {
  return (
    <div className="flex h-[282px] w-[240px] flex-col items-start gap-[13px] rounded-lg bg-background px-[6px] pb-[13px] pt-[7px] shadow-feature-card">
      <Link href={`/project/${slugify(project.title)}`} className="w-full space-y-3.5">
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={240}
            height={180}
            priority
          />
          <BaseButton className="absolute bottom-4 right-4 flex w-[88px] items-center justify-center gap-2 rounded-[17px] border border-background bg-primary/50 px-2 py-[6px] text-[0.75rem] font-light text-primary-light">
            Buy now
          </BaseButton>
        </div>

        <div className="flex w-full items-start justify-between gap-[13px] border-b pb-2.5">
          <div className="flex w-[225px] flex-col items-start gap-2">
            <h3 className="truncate text-[0.75rem] font-medium">{project.title}</h3>
          </div>
          {category[project.category].icon}
        </div>
      </Link>

      <div className="flex w-full justify-between text-[0.6rem] font-light">
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
