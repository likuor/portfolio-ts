import { FC, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Router from './router/Router';
import Navbar from './components/navbar/Navbar';
import { GlobalContext } from './context/GlobalContext';
import { ThemesProvider } from './theme/Theme';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme/Theme';

type Props = {
  isDarkMode?: boolean;
  theme: typeof theme;
};

const GlobalStyle = createGlobalStyle<Props>`
    body {
      background: ${(props) =>
        props.isDarkMode
          ? props.theme.dark.colors.secondaryBlack
          : props.theme.light.colors.green};
    }
  `;

const App: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isSkew, setIsSkew] = useState<boolean>(true);

  return (
    <>
      <GlobalContext.Provider
        value={{ isDarkMode, setIsDarkMode, isSkew, setIsSkew }}
      >
        <ThemesProvider>
          <GlobalStyle isDarkMode={isDarkMode} />
          <Navbar />
          <Router />
          <Footer />
        </ThemesProvider>
      </GlobalContext.Provider>
    </>
  );
};

export default App;
