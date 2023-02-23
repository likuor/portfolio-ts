import { FC, useContext } from 'react';
import styled from 'styled-components';
import SkillsData from '../components/pages/about/SkillsData';
import { GlobalContext } from '../context/GlobalContext';
import Button from '../components/atoms/Button';
import TypingAnimation from '../components/atoms/TypingAnimation';
import SectionLayout from '../layout/SectionLayout';
import DivLayout from '../layout/DivLayout';
import H1Title from '../layout/H1Title';
import MotionDiv from '../layout/MotionDiv';

type Props = {
  isDarkMode?: boolean;
  isSkew: boolean;
};

const FlexWrapper = styled.div<Props>`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: large;
  }

  > div {
    > div {
      margin: 1rem 0;
    }

    h3 {
      font-size: medium;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    h2 {
      font-size: x-large;
    }

    > div {
      width: 100%;
      display: flex;
      padding: 2vw 0;
      flex-direction: column;

      > div {
        margin: 0;
        h3 {
          font-size: large;
        }
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
    transition: box-shadow 3s ease-in;

    box-shadow: ${(props) =>
      props.isDarkMode
        ? `0 0 ${props.theme.dark.colors.orange}, 1rem 1rem 0 0 ${props.theme.dark.colors.black}, 1rem 1rem 0 2px ${props.theme.dark.colors.orange}`
        : `0 0 ${props.theme.light.colors.orange}, 1rem 1rem 0 0 ${props.theme.light.colors.white}, 1rem 1rem 0 2px ${props.theme.light.colors.orange}`};
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
  padding: 2vw 0;

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
          transition: background 3s ease-in;
          background: ${darkTheme.secondaryBlack};
          color: ${darkTheme.green};
        `
        : `
          transition: background 3s ease-in;
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

      > ul {
        font-size: x-large;
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
    <SectionLayout>
      <DivLayout>
        <H1Title>About</H1Title>
        <FlexWrapper isSkew={isSkew}>
          <MotionDiv>
            <h2>Why to be a developer?</h2>
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
          </MotionDiv>
          <MotionDiv>
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
              <a
                href='https://drive.google.com/file/d/1s9eg9lmZtpHqhbghRjSRmnoUbjcf1vfU/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button text='Resume' width='100' />
              </a>
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
          </MotionDiv>
          <MotionDiv>
            <ImageContainer isSkew={isSkew} isDarkMode={isDarkMode}>
              <img
                src={`${process.env.PUBLIC_URL}/image/ProfileImage.jpg`}
                alt='ProfileImage'
              />
            </ImageContainer>
            <div>
              <h3>I am</h3>
              <TypingAnimation />
            </div>
          </MotionDiv>
        </FlexWrapper>
        <SkillsWrapper isSkew={isSkew} isDarkMode={isDarkMode}>
          <MotionDiv>
            <h3>Languages</h3>
            <ul>{renderSkillsData(SkillsData.languages)}</ul>
          </MotionDiv>
          <MotionDiv>
            <h3>Frameworks & Libraries</h3>
            <ul>{renderSkillsData(SkillsData.frameworks)}</ul>
          </MotionDiv>
          <MotionDiv>
            <h3>Database</h3>
            <ul>{renderSkillsData(SkillsData.db)}</ul>
          </MotionDiv>
          <MotionDiv>
            <h3>Things I like</h3>
            <ul>{renderSkillsData(SkillsData.hobby)}</ul>
          </MotionDiv>
        </SkillsWrapper>
      </DivLayout>
    </SectionLayout>
  );
};

export default About;
