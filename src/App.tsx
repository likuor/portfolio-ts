import { FC } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Router from './router/Router';
import Nav from './components/Navbar';

const App: FC = () => (
  <>
    <Nav />
    <Router />
    <Footer />
  </>
);

export default App;
