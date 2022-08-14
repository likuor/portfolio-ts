import { FC } from 'react';
import styled from 'styled-components';
import WorksData from '../components/WorksData';

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
  width: 90%;
  flex-wrap: wrap;
`;

const FlexChildren = styled.div`
  width: 30%;
  max-height: 15vw;
  display: flex;
  border: yellow 1px solid;
`;

const DescriptionHover = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  background-color: rgba(15, 22, 38, 0.7);
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #0f1626;

  div {
    width: 80%;
    background-color: #ab987a;
    padding: 1vw;
  }
  p {
    word-wrap: break-word;
  }
`;

const Image = styled.img`
  width: 100%;
  transition: 0.3s ease-in-out;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  transform: skew(15deg);
  overflow: hidden;

  :hover > ${DescriptionHover} {
    opacity: 1;
  }

  :hover > ${Image} {
    transform: scale(1.1);
  }
`;

const renderData = () => {
  return WorksData.map((workData) => {
    return (
      <FlexChildren key={workData.id}>
        <ImageContainer>
          <Image src={workData.image} alt='ProfileImage' />
          <DescriptionHover>
            <DescriptionContainer>
              <div>
                <h1>{workData.title}</h1>
                <p>{workData.description}</p>
                <div>
                  {workData.technologiesIcons.map((icons, index) => {
                    return <p key={index}>{icons}</p>;
                  })}
                </div>
              </div>
            </DescriptionContainer>
          </DescriptionHover>
        </ImageContainer>
      </FlexChildren>
    );
  });
};

const Works: FC = () => {
  return (
    <WrapperSection>
      <Container>
        <SecitonTitle>Works</SecitonTitle>
        <FlexWrapper>{renderData()}</FlexWrapper>
      </Container>
    </WrapperSection>
  );
};

export default Works;
