import { FC } from 'react';
import Hero from './Hero';
import WorksIndex from './WorksIndex';
import About from './About';
import Contact from './Contact';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <WorksIndex />
      <About />
      <Contact />
    </>
  );
};

export default Home;
