import React, { FC } from 'react';
import styled from 'styled-components';
import ProfileImage from '../ProfileImage.jpg';

const WrapperSection = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 2vw;
  background-color: #f5f5f5;
  transform: skewY(15deg);
`;

const Container = styled.div`
  transform: skew(-15deg);
  padding: 5vw 0;
  margin: 0 auto;
  width: 90%;
  background-color: #ff533d;
`;

const Title = styled.h1`
  font-size: 3vw;
  padding-bottom: 1vw;
`;

const FlexWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
`;

const FlexChildren = styled.div`
  width: 100%;
  display: flex;
  border: yellow 1px solid;
`;

const Paragraph = styled.p`
  font-size: 1vw;
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  /* border: yellow 1px solid; */
`;

const Image = styled.img`
  width: 80%;
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
              <Image src={ProfileImage} alt='ProfileImage' />
            </ImageContainer>
          </FlexChildren>
        </FlexWrapper>
      </Container>
    </WrapperSection>
  );
};

export default About;
