import { FC } from 'react';
import './App.css';
import Footer from './components/Footer';
import Router from './router/Router';
import Navbar from './components/Navbar';

const App: FC = () => (
  <>
    <Navbar />
    <Router />
    <Footer />
  </>
);

export default App;
