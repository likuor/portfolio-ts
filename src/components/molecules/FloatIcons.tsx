import { FC, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { BsListNested, BsList } from 'react-icons/bs';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';
import styled from 'styled-components';

type Props = {
  isDarkMode: boolean;
  isSkew: boolean;
};

const FloatSection = styled.ul<Props>`
  list-style: none;
  z-index: 10;
  position: fixed;
  bottom: 0.8rem;
  right: 1.5rem;
  transform: ${(props) => (props.isSkew ? 'skewY(15deg)' : 'none')};

  li {
    cursor: pointer;
    padding: 0.5rem;
    margin: 2rem 0;

    transition: box-shadow 0.4s ease-in-out;
    :hover {
      transition: box-shadow 0.4s ease-in-out;
      box-shadow: 0 0 0;
    }

    ${(props) => {
      const darkTheme = props.theme.dark.colors;
      const lightTheme = props.theme.light.colors;

      return props.isDarkMode
        ? `
            color: ${darkTheme.black};
            box-shadow: 0 0 ${darkTheme.green}, 0.4rem 0.4rem 0 0 ${darkTheme.black}, 0.4rem 0.4rem 0 2px ${darkTheme.green};
            background: ${darkTheme.green};
            :hover{
              color: ${darkTheme.black};
              background: ${darkTheme.orange};
            }
          `
        : `
            color: ${lightTheme.white};
            box-shadow: 0 0 ${lightTheme.green}, 0.4rem 0.4rem 0 0 ${lightTheme.white}, 0.4rem 0.4rem 0 2px ${lightTheme.green};
            background: ${lightTheme.green};
            :hover{
              background: ${lightTheme.orange};
            }
          `;
    }};
  }

  svg {
    transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
    font-size: x-large;
  }

  @media (min-width: 768px) {
    li {
      margin: 5rem 1.5rem;
      svg {
        font-size: xx-large;
      }
    }
  }
`;

const FloatIcons: FC = (Props) => {
  const { isDarkMode, setIsDarkMode, isSkew, setIsSkew } =
    useContext(GlobalContext);

  const handleState = (stateVal: boolean, setState: Function) => {
    return setState(!stateVal);
  };

  return (
    <FloatSection isDarkMode={isDarkMode} isSkew={isSkew}>
      <li
        onClick={() => {
          handleState(isSkew, setIsSkew);
        }}
      >
        {isSkew ? (
          <BsListNested />
        ) : (
          <BsList
            onClick={() => {
              handleState(isSkew, setIsSkew);
            }}
          />
        )}
      </li>
      <li
        onClick={() => {
          handleState(isDarkMode, setIsDarkMode);
        }}
      >
        <WiMoonAltThirdQuarter />
      </li>
    </FloatSection>
  );
};

export default FloatIcons;
