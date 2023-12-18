import { Button } from '@/components/ui/button';
import { siteImage } from '@/config/image';
import Image from 'next/image';

export function PlanetFundingSection() {
  return (
    <section className=" w-full bg-foreground py-[100px]">
      <Image src={siteImage.hand} alt="" width={134} height={120} />
      <div className="my-[174px] space-y-4 px-[186px] text-center">
        <h3 className="text-[2.6rem]/[4.4rem] font-bold">
          Planet positive project funding
        </h3>
        <p className="text-[1rem] font-light">
          Every NFT purchase is not just a transaction; it&apos;s a step towards a greener
          future. Join us in the journey of making a positive impact on our planet while
          collecting beautiful, eco-conscious digital art.
        </p>
        <Button>Learn more</Button>
      </div>
    </section>
  );
}
