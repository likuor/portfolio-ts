import { FC } from 'react';
import styled from 'styled-components';

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
      </Container>
    </WrapperSection>
  );
};

export default About;
