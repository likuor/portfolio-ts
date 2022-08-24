import { ThemeProvider } from 'styled-components';

type ThemeType = {
  children: JSX.Element | JSX.Element[];
};

const theme = {
  dark: {
    colors: {
      black: '#0f1626',
      secondaryBlack: '#2C394B',
      ligthSecondaryBlack: 'rgba(44, 57, 75, 0.7)',
      green: '#0cc7ab',
      lightGreen: 'rgba(12, 199, 171, 0.3)',
      orange: '#ff533d',
    },
  },
  light: {
    colors: {
      white: '#fffffe',
      black: '#0f1626',
      orange: '#ff533d',
      brown: '#f8f5f2',
      lightBrown: 'rgba(248, 245, 242, 0.7)',
      green: '#078080',
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
      small: '1em',
      medium: '2em',
      large: '3em',
    },
  },
};

const Theme = ({ children }: ThemeType) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
