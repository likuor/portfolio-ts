import { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';

type ButtonProps = {
  isDarkMode: boolean;
  width: string;
};

const WrapperButton = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;
  text-align: center;
  width: ${(props) => props.width}%;
  height: 3rem;
  margin: 2rem 0;
  transition: box-shadow 0.4s ease-in-out;

  :hover {
    transition: transform 0.2s ease-in-out;
    transition: box-shadow 0.4s ease-in-out;
    box-shadow: 0 0 0;
  }

  ${(props) => {
    const darkTheme = props.theme.dark.colors;
    const lightTheme = props.theme.light.colors;
    return props.isDarkMode
      ? `
      background: ${darkTheme.orange};
      color: ${darkTheme.black};
      box-shadow: 0 0 ${darkTheme.orange}, 12px 12px 0 0 ${darkTheme.black}, 12px 12px 0 2px ${darkTheme.orange};
      transition:box-shadow 0.4s ease-in-out;

      :hover{
        background: ${darkTheme.green};
        color: ${darkTheme.black};
      }
      `
      : `
      background: ${lightTheme.orange};
      color: ${lightTheme.white};
      box-shadow: 0 0 ${lightTheme.orange}, 12px 12px 0 0 ${lightTheme.white}, 12px 12px 0 2px ${lightTheme.orange};

      :hover{
        background: ${lightTheme.green};
        color: ${lightTheme.white};
      }
      `;
  }};
`;

type Props = {
  text: string;
  width: string;
};

const Button: FC<Props> = (props) => {
  const { isDarkMode } = useContext(GlobalContext);
  const { text, width } = props;

  return (
    <WrapperButton isDarkMode={isDarkMode} width={width}>
      {text}
    </WrapperButton>
  );
};

export default Button;
