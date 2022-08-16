import { FC } from 'react';
import styled from 'styled-components';
import SkillsData from '../components/SkillsData';

const WrapperSection = styled.section`
  transform: skewY(15deg);
  width: 100%;
  min-height: 80vh;
  padding: 2vw;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    height: auto;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 80vh;
  border-top: 1px solid rgba(255, 83, 61, 0.3);
  border-bottom: 1px solid rgba(255, 83, 61, 0.3);

  ul {
    list-style: none;
  }
`;

const Title = styled.h1`
  transform: skew(-15deg);
  font-size: x-large;
  padding-bottom: 1vw;
`;

const FlexWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const FlexChildren = styled.div`
  width: 100%;
  display: flex;
`;

const Paragraph = styled.p`
  font-size: medium;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  object-fit: cover;
  transform: skew(-15deg);
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    ul {
      display: flex;
    }
    flex-direction: row;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const About: FC = () => {
  return (
    <WrapperSection>
      <Container>
        <Title>About</Title>
        <FlexWrapper>
          <FlexChildren>
            <Paragraph>
              ABOUT my self.ABOUT my selfABOUT my self ABOUT my self.ABOUT my
              self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my self.
              ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT
              my self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my
              self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my self.
              ABOUT my self. ABOUT my self. ABOUT my self. ABOUT my self. ABOUT
              my self. ABOUT my self. ABOUT my self.ABOUT my self.ABOUT my
              self.ABOUT my self.ABOUT my self.ABOUT my self.ABOUT my self.ABOUT
              my self.ABOUT my self.ABOUT my self.ABOUT my self.ABOUT my self.
            </Paragraph>
          </FlexChildren>
          <FlexChildren>
            <ImageContainer>
              <Image
                src={`${process.env.PUBLIC_URL}/image/ProfileImage.jpg`}
                alt='ProfileImage'
              />
            </ImageContainer>
          </FlexChildren>
        </FlexWrapper>
        <SkillsWrapper>
          <div>
            <h3>Languages</h3>
            <ul>
              {SkillsData.languages.map((skill: any, index) => {
                return <li key={index}>{skill.technologiesIcons}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>Frameworks / Library</h3>
            <ul>
              {SkillsData.frameworks.map((skill: any, index) => {
                return <li key={index}>{skill.technologiesIcons}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>DB</h3>
            <ul>
              {SkillsData.db.map((skill: any, index) => {
                return <li key={index}>{skill.technologiesIcons}</li>;
              })}
            </ul>
          </div>
        </SkillsWrapper>
      </Container>
    </WrapperSection>
  );
};

export default About;
