import { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';
import Button from '../components/Button';

type Props = {
  isDarkMode: boolean;
  isSkew: boolean;
};

const WrapperSection = styled.section<Props>`
  transform: ${(props) => (props.isSkew ? 'skewY(15deg)' : 'none')};
  width: 100%;
  padding: 4vw 0;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

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

  div {
    margin: 0 auto;
    padding: 2vw 0;
    width: 80%;
    text-align: center;

    > h1 {
      transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
      font-size: large;
      padding: 1vw 0;
    }

    > p {
      transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
      text-align: center;
    }

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
  }

  @media (min-width: 768px) {
    height: auto;

    > div {
      > h1 {
        font-size: x-large;
      }
    }
  }
`;

const Contact: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);

  return (
    <WrapperSection isDarkMode={isDarkMode} isSkew={isSkew}>
      <div>
        <h1>Get in touch</h1>
        <p>
          I am looking forward to chating with you! Feel free to say hello. See
          you later!
        </p>
        <a href='mailto:soloexkokisakai@gmail.com'>
          <Button text='Contact' />
        </a>
      </div>
    </WrapperSection>
  );
};

export default Contact;
