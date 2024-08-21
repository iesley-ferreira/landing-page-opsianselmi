import React from 'react';
import About from '../../components/About';
import Faq from '../../components/Faq';
import HowItWorks from '../../components/HowItWorks';
import Intro from '../../components/Intro';
import ReadMore from '../../components/ReadMore';
import Testimonials from '../../components/Testimonials';
import WhyGoToTherapy from '../../components/WhyGoToTherapy';

const Home: React.FC = () => {
  return (
    <main className="w-full min-w-screen">
      <Intro />
      <About />
      <Testimonials />
      <HowItWorks />
      <WhyGoToTherapy />
      <Faq />
      <ReadMore />
    </main>
  );
};

export default Home;
