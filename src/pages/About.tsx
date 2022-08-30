import { FC, useContext } from 'react';
import styled from 'styled-components';
import SkillsData from '../components/SkillsData';
import { GlobalContext } from '../context/GlobalContext';
import Button from '../components/Button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

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

const MotionWrapper = styled(motion.div)``;

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
          <MotionWrapper
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0 }}
          >
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
          </MotionWrapper>
          <MotionWrapper
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0 }}
          >
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
                href='https://drive.google.com/file/d/1xoy35zCP6fVfVwsUAzQrL3SGAiXtQ2LS/view'
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
          </MotionWrapper>
          <MotionWrapper
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0 }}
          >
            <ImageContainer isSkew={isSkew} isDarkMode={isDarkMode}>
              <img
                src={`${process.env.PUBLIC_URL}/image/ProfileImage.jpg`}
                alt='ProfileImage'
              />
            </ImageContainer>
            <div>
              <h2>I am</h2>
              <TypeAnimation
                sequence={[
                  'keen on creating things & art',
                  2000,
                  'into playing any sports',
                  2000,
                  'huge fun of feeling nature',
                  2000,
                  'relaxed with playing ukulele',
                  2000,
                ]}
                wrapper='h2'
                cursor={true}
                repeat={Infinity}
              />
            </div>
          </MotionWrapper>
        </FlexWrapper>
        <SkillsWrapper isSkew={isSkew} isDarkMode={isDarkMode}>
          <MotionWrapper
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0 }}
          >
            <h3>Languages</h3>
            <ul>{renderSkillsData(SkillsData.languages)}</ul>
          </MotionWrapper>
          <MotionWrapper
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0 }}
          >
            <h3>Frameworks & Libraries</h3>
            <ul>{renderSkillsData(SkillsData.frameworks)}</ul>
          </MotionWrapper>
          <MotionWrapper
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0 }}
          >
            <h3>Database</h3>
            <ul>{renderSkillsData(SkillsData.db)}</ul>
          </MotionWrapper>
          <MotionWrapper
            variants={{
              offscreen: {
                y: 100,
                opacity: 0,
              },
              onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              },
            }}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true, amount: 0 }}
          >
            <h3>Things I like</h3>
            <ul>{renderSkillsData(SkillsData.hobby)}</ul>
          </MotionWrapper>
        </SkillsWrapper>
      </div>
    </WrapperSection>
  );
};

export default About;
