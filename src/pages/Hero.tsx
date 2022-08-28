import { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';

type Props = {
  isDarkMode: boolean;
  isSkew: boolean;
};

const WrapperSection = styled.section<Props>`
  width: 100%;
  height: 80vh;
  padding: 2vw 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) => (props.isSkew ? 'skewY(15deg)' : 'none')};
  ${(props) => {
    const darkTheme = props.theme.dark.colors;
    const lightTheme = props.theme.light.colors;
    return props.isDarkMode
      ? `
      background: ${darkTheme.black};
      color: ${darkTheme.green};
      `
      : `
      background: ${lightTheme.white};
      color: ${lightTheme.black};
      `;
  }};

  > div {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    > div {
      /* border: 1px solid yellow; */
      margin: 0 auto;
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      ${(props) => {
        const darkTheme = props.theme.dark.colors;
        const lightTheme = props.theme.light.colors;
        return props.isDarkMode
          ? `
      border-top: 1px solid ${darkTheme.lightGreen};
      border-bottom: 1px solid ${darkTheme.lightGreen};;
      `
          : `
      border-top: 1px solid ${lightTheme.orange};
      border-bottom: 1px solid ${lightTheme.orange};
      `;
      }}

      > h1 {
        transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
        font-size: x-large;
      }
    }
  }

  @media (min-width: 768px) {
    > div {
      display: flex;
      width: 80%;
      height: 90%;
      flex-direction: row;

      > div {
        width: 50%;

        h1 {
          font-size: 4vw;
        }
      }
    }
  }
`;

const Hero: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);

  return (
    <WrapperSection isDarkMode={isDarkMode} isSkew={isSkew}>
      <div>
        <div>
          <h1>Hi there!</h1>
          <h1>I'm Koki,</h1>
          <h1>Web Developer</h1>
        </div>
        <div>
          <p>Hello</p>
        </div>
      </div>
    </WrapperSection>
  );
};

export default Hero;
