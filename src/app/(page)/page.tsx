import Hero from '@/sections/home/hero-header';
import Features from '@/sections/home/features';
import HowItWork from '@/sections/home/how-it-work';

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Features />
      <HowItWork />
    </main>
  );
}
