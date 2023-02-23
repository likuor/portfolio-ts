import { FC, useContext } from 'react';
import styled from 'styled-components';
import SkillsData from '../components/pages/about/data/SkillsData';
import { GlobalContext } from '../context/GlobalContext';
import Button from '../components/atoms/Button';
import TypingAnimation from '../components/atoms/TypingAnimation';
import SectionLayout from '../layout/SectionLayout';
import DivLayout from '../layout/DivLayout';
import H1Title from '../layout/H1Title';
import MotionDiv from '../layout/MotionDiv';
import WorkExperiencesData from '../components/pages/about/data/WorkExperienceData';
import EducationsData from '../components/pages/about/data/EducationData';
import HackathonsData from '../components/pages/about/data/HackathonData';
import AboutData from '../components/pages/about/data/About.json';

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

const renderExperiencesData = () => {
  return WorkExperiencesData.map((experience) => (
    <div key={experience.id}>
      <h3>
        - {experience.role} / {experience.dateStart} - {experience.dateEnd}
      </h3>
      <p>
        {experience.company} / {experience.location}
      </p>
      <br />
    </div>
  )).reverse();
};

const renderEducationsData = () => {
  return EducationsData.map((education) => (
    <div key={education.id}>
      <h3>
        - {education.major} / {education.dateStart} - {education.dateEnd}
      </h3>
      <p>
        {education.school} / {education.location}
      </p>
      <br />
    </div>
  )).reverse();
};

const renderHackathonsData = () => {
  return HackathonsData.map((hackathon) => (
    <div key={hackathon.id}>
      <h3>
        - {hackathon.title} / {hackathon.date}
      </h3>
      <p>
        {hackathon.organization} / {hackathon.location}
      </p>
      <br />
      <h4>The app name is 'Restarea'</h4>
      <a href={hackathon.url} target='_blank' rel='noopener noreferrer'>
        <Button text='Article' width='100' />
      </a>
    </div>
  )).reverse();
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
            <p>{AboutData.introduce}</p>
          </MotionDiv>
          <MotionDiv>
            <div>
              <h2>Work Experience</h2>
              {renderExperiencesData()}
            </div>
          </MotionDiv>
          <MotionDiv>
            <div>
              <h2>Hackathon</h2>
              {renderHackathonsData()}
            </div>
            <div>
              <h2>Education</h2>
              {renderEducationsData()}
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
              <a
                href={AboutData.resumeURL}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button text='Resume' width='100' />
              </a>
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
