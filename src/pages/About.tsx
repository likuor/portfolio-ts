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

      @media (min-width: 768px) {
        font-size: x-large;
      }
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
  }
`;

const FlexWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;

    > p {
      font-size: medium;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const ImageContainer = styled.div<Props>`
  display: flex;
  justify-content: center;

  > img {
    width: 80%;
    object-fit: cover;
    transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
  }
`;

const SkillsWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;

  > div {
    padding: 1vh;
    margin: 1vw 0;
    :first-child {
      margin-top: 0px;
    }

    :last-child {
      margin-bottom: 0px;
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
      padding-bottom: 0.3vh;
    }

    > ul {
      display: flex;
      padding: 0.3vw 0;
      font-size: large;
      list-style: none;

      > li {
        transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};

        list-style: none;
        padding: 0 5px;

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

      ul {
        font-size: x-large;
      }
    }
  }
`;

const About: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);

  return (
    <WrapperSection isDarkMode={isDarkMode} isSkew={isSkew}>
      <div>
        <h1>About</h1>
        <FlexWrapper>
          <div>
            <p>
              ABOUT my self.ABOUT my selfABOUT my self ABOUT my self.ABOUT my
              self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my self.
              ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT
              my self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my
              self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my self.
              ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT
              my self. ABOUT my self. ABOUT my self.ABOUT my self.ABOUT my
              self.ABOUT my self.ABOUT my self.ABOUT my self.ABOUT my self.ABOUT
              my self.ABOUT my self.ABOUT my self.ABOUT my self.ABOUT my self.
            </p>
          </div>
          <div>
            <ImageContainer isSkew={isSkew}>
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
            <ul>
              {SkillsData.languages.map((skill: any, index) => {
                return <li key={index}>{skill.technologiesIcons}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>Frameworks & Libraries</h3>
            <ul>
              {SkillsData.frameworks.map((skill: any, index) => {
                return <li key={index}>{skill.technologiesIcons}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>Database</h3>
            <ul>
              {SkillsData.db.map((skill: any, index) => {
                return <li key={index}>{skill.technologiesIcons}</li>;
              })}
            </ul>
          </div>
        </SkillsWrapper>
      </div>
    </WrapperSection>
  );
};

export default About;
