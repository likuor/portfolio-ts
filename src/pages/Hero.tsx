import { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';
import Hero3D from '../components/Hero3D';
import MotionDiv from '../layout/MotionDiv';

type Props = {
  isDarkMode: boolean;
  isSkew: boolean;
};

const WrapperSection = styled.section<Props>`
  width: 100%;
  height: 80vh;
  padding: 2rem 0;
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
      padding: 2rem 0;
      margin: 0 auto;
      width: 80%;
      height: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > h1 {
        transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
        font-size: x-large;
      }

      span {
        display: inline-block;
        transition: transform 1s ease-in-out;

        ${(props) => {
          const darkTheme = props.theme.dark.colors;
          const lightTheme = props.theme.light.colors;
          return props.isDarkMode
            ? `
              color: ${darkTheme.green};
              text-shadow: 0.5rem 0.5rem 1rem ${darkTheme.green};
            `
            : `
              color: ${lightTheme.black};
              text-shadow: 0.5rem 0.5rem 1rem ${lightTheme.orange};
            `;
        }}

        :hover {
          transition: transform 0.1s ease-in-out;
          transform: rotate(360deg);

          ${(props) => {
            const darkTheme = props.theme.dark.colors;
            const lightTheme = props.theme.light.colors;
            return props.isDarkMode
              ? `
                color: ${darkTheme.orange};
                text-shadow: 0 0 20px ${darkTheme.orange};
                `
              : `
                color: ${lightTheme.green};
                text-shadow: 0 0 20px ${lightTheme.green};
              `;
          }}
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 2vw 0;

    > div {
      display: flex;
      width: 80%;
      height: 90%;
      flex-direction: row;

      > div {
        padding: 0;
        width: 50%;
        height: 100%;

        h1 {
          font-size: 4vw;
          transition: transform 2s;
          text-indent: 0.3rem;
        }
      }
    }
  }
`;

const Hero: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);

  return (
    <WrapperSection isDarkMode={isDarkMode} isSkew={isSkew}>
      <MotionDiv>
        <div>
          <h1>
            <span>H</span>
            <span>i</span>
            <span>,</span>
            <span>t</span>
            <span>h</span>
            <span>e</span>
            <span>r</span>
            <span>e</span>
            <span>!</span>
          </h1>
          <h1>
            <span>I</span>
            <span>'</span>
            <span>m</span>
            <span>&nbsp;</span>
            <span>K</span>
            <span>o</span>
            <span>k</span>
            <span>i</span>
          </h1>
          <h1>
            <span>W</span>
            <span>e</span>
            <span>b</span>
            <span>&nbsp;</span>
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
          </h1>
        </div>
        <div>
          <Hero3D />
        </div>
      </MotionDiv>
    </WrapperSection>
  );
};

export default Hero;
