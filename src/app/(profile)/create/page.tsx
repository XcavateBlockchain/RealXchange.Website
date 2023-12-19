import { Icons } from '@/components/icons';
import { SectionHeader, SectionTitle } from '@/components/section-header';
import { Shell } from '@/components/shells/shell';
import { Button } from '@/components/ui/button';
import { siteImage } from '@/config/image';
import PageContextProvider from '@/context/page-contex';
import { CreateNftForm } from '@/sections/create/create-nft-form';
import { CreateProjectForm } from '@/sections/create/create-project-form';
import Image from 'next/image';

export default function Page() {
  return (
    <Shell variant="divided">
      <div className="my-[40px] flex flex-col items-start gap-y-8">
        <Button variant="plain" size="text">
          <Icons.back className="h-6 w-6" /> Back
        </Button>

        <Image
          src={siteImage.place_holder}
          alt="place_holder"
          width={464}
          height={570}
          priority
        />
      </div>
      <PageContextProvider index="create-project">
        <CreateProjectForm />
        <CreateNftForm />
      </PageContextProvider>
      {/* <section className="flex flex-col gap-6 border-l border-foreground py-[90px] pl-[84px]">
        <SectionHeader>
          <SectionTitle size={'lg'}>Create project</SectionTitle>
          <div className="flex items-center space-x-2">
            <dt className="text-[0.75rem] font-light text-[0.6]"> Created by:</dt>
            <dd className="text-[1rem]/[1.5rem]">@Trillion_Treesfoundation</dd>
          </div>
        </SectionHeader>
        <CreateProjectForm />
      </section> */}
    </Shell>
  );
}
