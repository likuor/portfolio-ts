import { ThemeProvider } from 'styled-components';

type ThemeType = {
  children: JSX.Element | JSX.Element[];
};

const theme = {
  colors: {
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    lightBlue: '#AFDBD2',
    onyx: '#36313D',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
  dark: {
    colors: {
      white: '#f5f5f5',
      black: '#0f1626',
      secondaryBlack: '#2C394B',
      orange: '#ff533d',
      lightOrange: 'rgba(255, 83, 61, 0.3)',
      green: '#0cc7ab',
      lightGreen: 'rgba(12, 199, 171, 0.3)',
    },
  },
  light: {
    colors: {
      white: '#f5f5f5',
      black: '#0f1626',
      orange: '#ff533d',
      brown: '#ab987a',
      lightOrange: 'rgba(255, 83, 61, 0.3)',
      green: '#078080',
      lightGreen: 'rgba(12, 199, 171, 0.3)',
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
