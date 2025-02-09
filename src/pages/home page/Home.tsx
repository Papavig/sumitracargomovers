import React from 'react';
import { HeroSection } from './HeroSection';
import { ProcessSection } from './ProcessSection';
import { StatsSection } from './StatsSection';
import InfiniteScrollingServices from '@/components/InfiniteScrollingServices';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InfiniteScrollingServices />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ProcessSection />
          <StatsSection />
        </div>
      </section>
    </div>
  );
};

export default Home;