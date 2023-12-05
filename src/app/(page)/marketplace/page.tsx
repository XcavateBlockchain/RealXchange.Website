import { Icons } from '@/components/icons';
import { PageHeader, PageHeaderHeading } from '@/components/page-header';
import { Shell } from '@/components/shells/shell';
import { BaseButton } from '@/components/ui/base-button';
import { Projects } from '@/sections/projects/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <Shell>
      <PageHeader className=" gap-[36px]">
        <PageHeaderHeading>Active projects.</PageHeaderHeading>
      </PageHeader>
      <Projects />
      {/* 
      <div className="flex w-[295px] flex-col items-start gap-4 rounded-lg bg-[##F3F3F3] px-2 pb-4 pt-2 shadow-feature-card">
        <Link href={''} className="w-full space-y-3.5">
          <div className="relative">
            <Image
              src={'/images/projects/project-one.png'}
              alt=""
              width={279}
              height={210}
              priority
            />
            <div className=" absolute bottom-4 right-4 flex items-center justify-center gap-2 rounded-[20px] bg-background/[0.24] px-2 py-[6px] text-[0.75rem] font-light text-primary-light/[0.64]">
              Housing
            </div>
          </div>

          <div className="flex w-full items-start justify-between gap-[13px] border-b pb-2.5">
            <div className="flex w-[203px] flex-col items-start gap-2">
              <h3 className="text-[0.875rem] font-medium">Sustainable Living</h3>
              <BaseButton className="text-[0.75rem] font-light underline-offset-4 hover:underline">
                @GreenHaven
              </BaseButton>
            </div>
            <Icons.housing className="h-[14px] w-[18px]" />
          </div>
        </Link>

        <div className="flex w-full justify-between text-[0.75rem] font-light">
          <dl>
            <dt>Price</dt>
            <dd>£250,000</dd>
          </dl>
          <dl>
            <dt>NFTs</dt>
            <dd>100</dd>
          </dl>
        </div>
      </div> */}
    </Shell>
  );
}
