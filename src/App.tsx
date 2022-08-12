import { FC } from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App: FC = () => (
  <>
    <Navbar />
    <Hero />
    <Works />
    <About />
    <Contact />
    <Footer />
  </>
);

export default App;
