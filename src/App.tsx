import { FC } from 'react';
import './App.css';

import Navbar from './pages/Navbar';
import Footer from './components/Footer';
import Router from './router/Router';
const App: FC = () => (
  <>
    <Navbar />
    <Router />
    <Footer />
  </>
);

export default App;
