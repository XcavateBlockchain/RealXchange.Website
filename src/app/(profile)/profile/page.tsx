import { siteImage } from '@/config/image';
import Image from 'next/image';

export default function Profile() {
  return (
    <>
      <section className="container flex w-full items-center justify-between px-[100px] py-16">
        <div className="flex items-center gap-6">
          <Image src={siteImage.avatar} alt="user" width={100} height={100} priority />

          <div className="flex flex-col items-start gap-2">
            <h1 className="text-[1.5rem] font-bold">Trillion_Treesfoundation</h1>
          </div>
        </div>
      </section>
    </>
  );
}
