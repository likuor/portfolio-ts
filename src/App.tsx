import { FC, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Router from './router/Router';
import Navbar from './components/Navbar';
import { GlobalContext } from './context/GlobalContext';
import Theme from './theme/Theme';

const App: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isSkew, setIsSkew] = useState<boolean>(true);

  return (
    <>
      <GlobalContext.Provider
        value={{ isDarkMode, setIsDarkMode, isSkew, setIsSkew }}
      >
        <Theme>
          <Navbar />
          <Router />
          <Footer />
        </Theme>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
