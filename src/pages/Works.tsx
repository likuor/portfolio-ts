import { FC } from 'react';
import styled from 'styled-components';
import Homepage from '../Hoempage.jpg';

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
  padding-bottom: 1vw;
`;

const FlexWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: 85%;
`;

const FlexChildren = styled.div`
  display: flex;
  border: yellow 1px solid;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  transform: skew(15deg);
  overflow: hidden;
  background: #000;
`;

const Image = styled.img`
  width: 100%;
  /* filter: grayscale(50%); */
  transition: 0.3s ease-in-out;
  opacity: 0.5;
  /* width: 80%; */

  :hover {
    /* filter: grayscale(0); */
    transform: scale(1.1);
    opacity: 1;
  }
`;

const Works: FC = () => {
  return (
    <WrapperSection>
      <Container>
        <SecitonTitle>Works</SecitonTitle>
        <FlexWrapper>
          <FlexChildren>
            <ImageContainer>
              <Image src={Homepage} alt='ProfileImage' />
            </ImageContainer>
          </FlexChildren>
          <FlexChildren>
            <ImageContainer>
              <Image src={Homepage} alt='ProfileImage' />
            </ImageContainer>
          </FlexChildren>
          <FlexChildren>
            <ImageContainer>
              <Image src={Homepage} alt='ProfileImage' />
            </ImageContainer>
          </FlexChildren>
        </FlexWrapper>
      </Container>
    </WrapperSection>
  );
};

export default Works;
