import { FC } from 'react';
import './App.css';
import Hero from './pages/Hero';
import Navbar from './pages/Navbar';

const App: FC = () => (
  <>
    <Navbar />
    <Hero />
  </>
);

export default App;
