import { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';
import SocialMediaData from './SocialMediaData';

type Props = {
  isDarkMode: boolean;
  isSkew: boolean;
};

const WrapperFooter = styled.div<Props>`
  transform: ${(props) => (props.isSkew ? 'skewY(15deg)' : 'none')};
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  ${(props) => {
    const darkTheme = props.theme.dark.colors;
    const lightTheme = props.theme.light.colors;
    return props.isDarkMode
      ? `
      background: ${darkTheme.secondaryBlack};
      color: ${darkTheme.green};
      `
      : `
      background: ${lightTheme.green};
      color: ${lightTheme.white};
      `;
  }};

  > div {
    transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
    margin: 0 auto;
    width: 80%;

    > ul {
      width: 100%;
      display: flex;
      justify-content: center;
      list-style: none;

      > li {
        list-style: none;
        padding: 0 1rem;
        font-size: medium;

        a {
          display: block;
          padding: 15px 0.8rem;
          transition: transform 0.4s ease-in-out;

          :hover {
            transition: transform 0.4s ease-in-out;
            transform: skew(-20deg);
            color: ${(props) => props.theme.light.colors.orange};
          }
        }
      }
    }

    p {
      display: flex;
      justify-content: center;
      font-size: xx-small;
      padding-top: 0.5rem;
    }
  }

  @media (min-width: 768px) {
    div > ul > li {
      font-size: large;
    }

    div > p {
      font-size: x-small;
    }
  }
`;

const renderSocialMediaData = () => {
  return SocialMediaData.map((socialMediaData) => {
    return (
      <li key={socialMediaData.id}>
        <a href={socialMediaData.url} target='_blank' rel='noopener noreferrer'>
          {socialMediaData.icon}
        </a>
      </li>
    );
  });
};

const Footer: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);

  return (
    <WrapperFooter isDarkMode={isDarkMode} isSkew={isSkew}>
      <div>
        <ul>{renderSocialMediaData()}</ul>
        <p>© 2022 Koki Sakai, All Rights Reserved.</p>
      </div>
    </WrapperFooter>
  );
};

export default Footer;
