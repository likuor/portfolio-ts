import { FC } from 'react';
import styled from 'styled-components';

const WrapperSection = styled.section`
  transform: skewY(15deg);
  width: 100%;
  padding: 2vw;
  background-color: #f5f5f5;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 83, 61, 0.3);
  border-bottom: 1px solid rgba(255, 83, 61, 0.3);

  @media (min-width: 768px) {
    background-color: #ff533d;
  }
`;

const SecitonTitle = styled.h1`
  font-size: x-large;
  transform: skew(-15deg);
`;

const H1 = styled.h1`
  transform: skew(-15deg);
  font-size: x-large;
`;

const Hero: FC = () => {
  return (
    <WrapperSection>
      <Container>
        <SecitonTitle>Hi there</SecitonTitle>
        <H1>I'm Koki,</H1>
        <H1>Web Developer</H1>
      </Container>
    </WrapperSection>
  );
};

export default Hero;
