import HeroSection from '@/components/HomeComps/HeroSection/HeroSection';
import Unravel from '@/components/HomeComps/Unravel/Unravel';
import { WhatWeOffer } from '@/components/HomeComps/WhatWeOffer/WhatWeOffer';

export default function Home() {
  return (
    <main className=''>
      <HeroSection />
      <Unravel />
      <WhatWeOffer />
    </main>
  );
}
