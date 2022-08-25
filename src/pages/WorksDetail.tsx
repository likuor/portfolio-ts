import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import WorksData from '../components/WorksData';
import { GlobalContext } from '../context/GlobalContext';

type Props = {
  isDarkMode?: boolean;
  isSkew: boolean;
};

const WrapperSection = styled.section<Props>`
  width: 100%;
  display: flex;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  padding: 4vw 0;
  transform: ${(props) => (props.isSkew ? 'skewY(15deg)' : 'none')};
  ${(props) => {
    const darkTheme = props.theme.dark.colors;
    const lightTheme = props.theme.light.colors;
    return props.isDarkMode
      ? `
      background: ${darkTheme.black};
      color: ${darkTheme.green};
      `
      : `
      background: ${lightTheme.white};
      color: ${lightTheme.black};
      `;
  }};

  > div {
    margin: 0 auto;
    padding: 2vw 0;
    width: 80%;

    > h1 {
      transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
      font-size: large;
      padding: 1vw 0;
    }

    ${(props) => {
      const darkTheme = props.theme.dark.colors;
      const lightTheme = props.theme.light.colors;
      return props.isDarkMode
        ? `
      border-top: 1px solid ${darkTheme.lightGreen};
      border-bottom: 1px solid ${darkTheme.lightGreen};;
      `
        : `
      border-top: 1px solid ${lightTheme.orange};
      border-bottom: 1px solid ${lightTheme.orange};
      `;
    }}
  }

  @media (min-width: 768px) {
    height: auto;

    > div > h1 {
      font-size: x-large;
    }
  }
`;

const FlexWrapper = styled.div<Props>`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;

    h2 {
      transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
      font-size: large;
    }

    p {
      font-size: medium;
      line-height: 1.5;

      > span {
        font-size: 0.8rem;
      }
    }

    > div {
      padding: 2rem 0 0;

      :first-child {
        padding-top: 0vw;
      }

      :last-child {
        padding-bottom: 0px;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      border: 1px yellow solid;

      > div {
        /* padding: 2vw 0 0 2vw; */

        :first-child {
          padding-top: 0vw;
        }

        :last-child {
          padding-bottom: 0px;
        }
      }

      > p {
        font-size: medium;
        line-height: 1.5;
      }
    }
  }
`;

const ImageContainer = styled.div`
  /* width: 100%; */
  margin: 0 auto;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const WorksDetail: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);
  const params: string | undefined = useParams<string>().worksId;
  const selectedWork = WorksData.find((work) => work.id === Number(params));

  return (
    <WrapperSection isDarkMode={isDarkMode} isSkew={isSkew}>
      <div>
        <h1>{selectedWork?.title}</h1>
        <FlexWrapper isSkew={isSkew}>
          <div>
            {/* <ImageContainer>
              <img src={selectedWork?.image} alt={selectedWork?.title} />
            </ImageContainer> */}
          </div>
          <div>
            <p>{selectedWork?.description}</p>
          </div>
        </FlexWrapper>
      </div>
    </WrapperSection>
  );
};

export default WorksDetail;
