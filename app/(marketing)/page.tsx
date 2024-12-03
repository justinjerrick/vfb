import * as React from 'react';

import { CTA } from '@/components/marketing/sections/cta';
import { FAQ } from '@/components/marketing/sections/faq';
import { Hero } from '@/components/marketing/sections/hero';
import { Logos } from '@/components/marketing/sections/logos';
import { Problem } from '@/components/marketing/sections/problem';
import { Solution } from '@/components/marketing/sections/solution';
import { Stats } from '@/components/marketing/sections/stats';
import { Testimonials } from '@/components/marketing/sections/testimonials';

export default function IndexPage(): React.JSX.Element {
  return (
    <>
      <Hero />
      <Logos />
      <Problem />
      <Solution />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
