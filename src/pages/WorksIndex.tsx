import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WorksData from '../components/WorksData';

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
  border-top: 1px solid rgba(255, 83, 61, 0.3);
  border-bottom: 1px solid rgba(255, 83, 61, 0.3);

  @media (min-width: 768px) {
    background-color: #ff533d;
  }
`;

const SecitonTitle = styled.h2`
  transform: skew(-15deg);
  font-size: x-large;
  padding-bottom: 1vw;
`;

const FlexWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    height: 90%;
  }
`;

const FlexChildren = styled.div`
  width: 50%;
  height: 50vw;
  display: flex;

  @media (min-width: 768px) {
    width: 33.3%;
    height: 15vw;
    background-color: #0f1626;
  }
`;

const DescriptionHover = styled.div`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  background-color: rgba(15, 22, 38, 0.7);
`;

const DescriptionBg = styled.div`
  width: 90%;
  height: 80%;
  background-color: #078080;
  padding: 1vw;

  > h2 {
    transform: skew(-15deg);
    font-size: small;
    padding: 0.3vw 0;
  }

  > p {
    font-size: small;
    padding: 0.3vw 0;
    word-wrap: break-word;
  }

  > ul {
    font-size: xx-small;
    padding: 0.3vw 0;
    > li {
      list-style: none;
      display: inline;
      padding: 0 5px;

      :first-child {
        padding-left: 0px;
      }

      :last-child {
        padding-right: 0px;
      }
    }
  }

  @media (min-width: 768px) {
    > h2 {
      font-size: medium;
    }

    > p {
      font-size: medium;
    }

    > ul {
      font-size: small;
    }
  }
`;

const DescriptionContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #f5f5f5;
`;

const Image = styled.img`
  width: 100%;
  transition: 0.3s ease-in-out;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
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
            <Link to={`/work/${workData.id}`}>
              <DescriptionContainer>
                <DescriptionBg>
                  <h2>{workData.title}</h2>
                  <p>{workData.description}</p>
                  <ul>
                    {workData.technologiesIcons.map((icons, index) => {
                      return <li key={index}>{icons}</li>;
                    })}
                  </ul>
                </DescriptionBg>
              </DescriptionContainer>
            </Link>
          </DescriptionHover>
        </ImageContainer>
      </FlexChildren>
    );
  });
};

const WorksIndex: FC = () => {
  return (
    <div>
      <WrapperSection>
        <Container>
          <SecitonTitle>Work</SecitonTitle>
          <FlexWrapper>{renderData()}</FlexWrapper>
        </Container>
      </WrapperSection>
    </div>
  );
};

export default WorksIndex;
