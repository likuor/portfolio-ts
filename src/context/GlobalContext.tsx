import { createContext, useContext } from 'react';

export type GlobalContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  isSkew: boolean;
  setIsSkew: (isSkew: boolean) => void;
};

export const GlobalContext = createContext<GlobalContextType>({
  isDarkMode: true,
  setIsDarkMode: () => {},
  isSkew: true,
  setIsSkew: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
