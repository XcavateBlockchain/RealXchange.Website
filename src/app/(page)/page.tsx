import Hero from '@/sections/home/hero-header';
import Features from '@/sections/home/features';
import HowItWork from '@/sections/home/how-it-work';
import { PlanetFundingSection } from '@/sections/home/planet-funding';

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Features />
      <HowItWork />
      <PlanetFundingSection />
    </main>
  );
}
