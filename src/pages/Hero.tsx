import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 2vw;
  background-color: #ab987a;
  transform: skewY(15deg);
`;

const FlexWrapper = styled.div`
  transform: skew(-15deg);
  padding: 5vw 0;
  margin: 0 auto;
  width: 90%;
`;

const H1Greeting = styled.h1`
  font-size: 3vw;
`;

const H1 = styled.h1`
  font-size: 3vw;
  padding-left: 0.9vw;
`;

const Hero: FC = () => {
  return (
    <Wrapper>
      <FlexWrapper>
        <H1Greeting>Hi there,</H1Greeting>
        <H1>I'm Koki</H1>
        <H1>
          Web Developer
          {/* <span>Frontend</span> */}
        </H1>
      </FlexWrapper>
    </Wrapper>
  );
};

export default Hero;
