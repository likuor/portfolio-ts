import { FC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import WorksData from '../components/WorksData';

const WrapperSection = styled.section`
  transform: skewY(15deg);
  width: 100%;
  padding: 2vw;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    background-color: #0f1626;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 90%;
  background-color: #ff533d;

  @media (min-width: 768px) {
    background-color: #0f1626;
  }
`;

const Title = styled.h1`
  font-size: x-large;
  transform: skew(-15deg);
`;

const FlexWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FlexChildren = styled.div`
  width: 100%;
  border: yellow 1px solid;
`;

const Paragraph = styled.p`
  font-size: medium;

  @media (min-width: 768px) {
    font-size: large;
  }
`;

const ImageContainer = styled.div`
  /* width: 100%; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
`;

const WorksDetail: FC = () => {
  const params: string | undefined = useParams<string>().worksId;
  const selectedWork = WorksData.find((work) => work.id === Number(params));

  return (
    <WrapperSection>
      <Container>
        <Title>{selectedWork?.title}</Title>
        <FlexWrapper>
          <FlexChildren>
            <ImageContainer>
              <Image src={selectedWork?.image} alt={selectedWork?.title} />
            </ImageContainer>
          </FlexChildren>
          <FlexChildren>
            <Paragraph>{selectedWork?.description}</Paragraph>
          </FlexChildren>
        </FlexWrapper>
      </Container>
    </WrapperSection>
  );
};

export default WorksDetail;
