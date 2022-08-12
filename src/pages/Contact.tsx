import { FC } from 'react';
import styled from 'styled-components';

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

const SecitonTitle = styled.h1`
  font-size: 3vw;
`;

const Contact: FC = () => {
  return (
    <WrapperSection>
      <Container>
        <SecitonTitle>Get in touch</SecitonTitle>
      </Container>
    </WrapperSection>
  );
};

export default Contact;
