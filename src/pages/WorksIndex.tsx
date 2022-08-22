import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WorksData from '../components/WorksData';
import { GlobalContext } from '../context/GlobalContext';

type Props = {
  isDarkMode: boolean;
  isSkew: boolean;
};

const WrapperSection = styled.section<Props>`
  width: 100%;
  display: flex;
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

      @media (min-width: 768px) {
        font-size: x-large;
      }
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
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 2vw 0;
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
  const { isDarkMode, isSkew } = useContext(GlobalContext);

  return (
    <WrapperSection isDarkMode={isDarkMode} isSkew={isSkew}>
      <div>
        <h1>Work</h1>
        <FlexWrapper>{renderData()}</FlexWrapper>
      </div>
    </WrapperSection>
  );
};

export default WorksIndex;
