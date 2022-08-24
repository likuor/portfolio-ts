import { FC, useContext } from 'react';
import styled from 'styled-components';
import SkillsData from '../components/SkillsData';
import { GlobalContext } from '../context/GlobalContext';

type Props = {
  isDarkMode?: boolean;
  isSkew: boolean;
};

const WrapperSection = styled.section<Props>`
  width: 100%;
  display: flex;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  padding: 4vw 0;
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
    margin: 0 auto;
    padding: 2vw 0;
    width: 80%;

    > h1 {
      transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
      font-size: large;
      padding: 1vw 0;
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

    > div > h1 {
      font-size: x-large;
    }
  }
`;

const FlexWrapper = styled.div<Props>`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2vw 0;

    h2 {
      transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
      font-size: large;
    }

    p {
      font-size: medium;
      line-height: 1.5;

      > span {
        font-size: 0.8rem;
      }
    }

    > div {
      padding: 2rem 0 0;

      :first-child {
        padding-top: 0vw;
      }

      :last-child {
        padding-bottom: 0px;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    > div {
      width: 100%;
      display: flex;
      padding: 2vw 0;
      flex-direction: column;

      > div {
        padding: 2vw 0 0 2vw;

        :first-child {
          padding-top: 0vw;
        }

        :last-child {
          padding-bottom: 0px;
        }
      }

      > p {
        font-size: medium;
        line-height: 1.5;
      }
    }
  }
`;

const ImageContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  > img {
    width: 80%;
    object-fit: cover;
    transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
    box-shadow: ${(props) =>
      props.isDarkMode
        ? `0 0 ${props.theme.dark.colors.orange}, 12px 12px 0 0 ${props.theme.dark.colors.black}, 12px 12px 0 2px ${props.theme.dark.colors.orange}`
        : `0 0 ${props.theme.light.colors.orange}, 12px 12px 0 0 ${props.theme.light.colors.white}, 12px 12px 0 2px ${props.theme.light.colors.green}`};
  }

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const SkillsWrapper = styled.div<Props>`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 2vw;

  > div {
    padding: 1.5vh;
    margin: 2vw 0;
    :first-child {
      margin-top: 0px;
    }

    ${(props) => {
      const darkTheme = props.theme.dark.colors;
      const lightTheme = props.theme.light.colors;
      return props.isDarkMode
        ? `
      background: ${darkTheme.secondaryBlack};
      color: ${darkTheme.green};
      `
        : `
      background: ${lightTheme.brown};
      color: ${lightTheme.black};
      `;
    }};

    > h3 {
      transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
      padding-bottom: 0.4rem;
    }

    > ul {
      display: flex;
      padding: 0.3vw 0;
      font-size: large;
      list-style: none;
      flex-wrap: wrap;

      > li {
        transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
        list-style: none;
        padding: 0 0.5rem;

        :first-child {
          padding-left: 0px;
        }

        :last-child {
          padding-right: 0px;
        }
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    div {
      padding: 1vw;
      margin: 0 2vw;

      :first-child {
        margin-left: 0px;
      }

      :last-child {
        margin-right: 0px;
      }
    }
  }
`;

type SkillsDataType = {
  name: string;
  icons: JSX.Element;
};

const renderSkillsData = (skillTitle: SkillsDataType[]) => {
  return skillTitle.map((skill, index) => {
    return <li key={index}>{skill.icons}</li>;
  });
};

const About: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);

  return (
    <WrapperSection isDarkMode={isDarkMode} isSkew={isSkew}>
      <div>
        <h1>About</h1>
        <FlexWrapper isSkew={isSkew}>
          <div>
            <h2>Story</h2>
            <p>
              When I was a university student , I backpacked to cross the States
              from NewYork to Seattle by hitchhiking and using sharerides by my
              self for 3 months. At the time, I experienced that apps have an
              incredibly helpful power and made us connect with each other
              easily to make us happy, make our dreams come true. That was the
              first step to make me big fun of the amazing IT world. After the
              survival traveling, I am always pleased that I would like to
              efficiently learn technologies to help people in the world with my
              huge passion!
            </p>
          </div>
          <div>
            <div>
              <h2>Work Experience</h2>
              <p>
                - Web Application Developer & Customer Solution Leader
                <br />
                anyCarry Inc.
                <br />
                <span>2019 - 2021, Tokyo, Japan</span>
              </p>
              <p>
                - Programming Teaching Assistant
                <br />
                TECH I.S.
                <br />
                <span>2020 - 2021, Tokyo, Japan</span>
              </p>
            </div>
            <div>
              <h2>Education</h2>
              <p>
                - Web & Mobile Application Development Diploma
                <br />
                Cornerstone International Community College of Canada
                <br />
                <span>2022 - Present, Vancouver, Canada</span>
              </p>
            </div>
          </div>
          <div>
            <ImageContainer isSkew={isSkew} isDarkMode={isDarkMode}>
              <img
                src={`${process.env.PUBLIC_URL}/image/ProfileImage.jpg`}
                alt='ProfileImage'
              />
            </ImageContainer>
          </div>
        </FlexWrapper>
        <SkillsWrapper isSkew={isSkew} isDarkMode={isDarkMode}>
          <div>
            <h3>Languages</h3>
            <ul>{renderSkillsData(SkillsData.languages)}</ul>
          </div>
          <div>
            <h3>Frameworks & Libraries</h3>
            <ul>{renderSkillsData(SkillsData.frameworks)}</ul>
          </div>
          <div>
            <h3>Database</h3>
            <ul>{renderSkillsData(SkillsData.db)}</ul>
          </div>
          <div>
            <h3>Things I like</h3>
            <ul>{renderSkillsData(SkillsData.hobby)}</ul>
          </div>
        </SkillsWrapper>
      </div>
    </WrapperSection>
  );
};

export default About;
