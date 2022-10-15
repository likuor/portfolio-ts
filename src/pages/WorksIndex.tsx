import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WorksData from '../components/WorksData';
import { GlobalContext } from '../context/GlobalContext';
import { motion } from 'framer-motion';
import SectionLayout from '../layout/SectionLayout';
import DivLayout from '../layout/DivLayout';
import H1Title from '../layout/H1Title';

type Props = {
  isDarkMode: boolean;
  isSkew?: boolean;
};

const FlexWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 2vw 0;
`;

const FlexMotionChildren = styled(motion.div)`
  width: 50%;
  height: 50vw;
  display: flex;

  @media (min-width: 768px) {
    width: 33.3%;
    height: 15vw;
  }
`;

const DescriptionHover = styled.div<Props>`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  background-color: ${(props) =>
    props.isDarkMode
      ? props.theme.dark.colors.ligthSecondaryBlack
      : props.theme.light.colors.lightBrown};
`;

const DescriptionContainer = styled.div<Props>`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) =>
    props.isDarkMode
      ? props.theme.dark.colors.black
      : props.theme.light.colors.white};

  div {
    width: 90%;
    height: 80%;
    padding: 0.8rem;
    background-color: ${(props) =>
      props.isDarkMode
        ? props.theme.dark.colors.green
        : props.theme.light.colors.green};

    > h2 {
      transform: skew(-15deg);
      font-size: 3vw;
      padding: 0.3vw 0;
    }

    > p {
      font-size: 0.7rem;
      line-height: 1.4;
      word-wrap: break-word;
    }

    > ul {
      font-size: 2vw;
      padding: 0.5rem 0;
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
        font-size: 1.2vw;
      }

      > p {
        font-size: 1vw;
      }

      > ul {
        font-size: 1.3vw;
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  transition: 0.3s ease-in-out;
  object-fit: cover;
`;

const ImageContainer = styled.div<Props>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  ${(props) => {
    const darkTheme = props.theme.dark.colors;
    const lightTheme = props.theme.light.colors;
    return props.isDarkMode
      ? `
      border: 3px ${darkTheme.secondaryBlack} solid;
      `
      : `
      border: 3px ${lightTheme.black} solid;
      `;
  }};

  :hover > ${DescriptionHover} {
    opacity: 1;
  }

  :hover > ${Image} {
    transform: scale(1.1);
  }
`;

const WorksIndex: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);

  const renderData = () => {
    return WorksData.map((workData) => {
      return (
        <FlexMotionChildren
          key={workData.id}
          variants={{
            offscreen: {
              y: 100,
              opacity: 0,
            },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            },
          }}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0 }}
        >
          <ImageContainer isDarkMode={isDarkMode}>
            <Image src={workData.imageThumbnail} alt='ProfileImage' />
            <DescriptionHover isDarkMode={isDarkMode} isSkew={isSkew}>
              <Link to={`/work/${workData.id}`}>
                <DescriptionContainer isDarkMode={isDarkMode} isSkew={isSkew}>
                  <div>
                    <h2>{workData.title}</h2>
                    <p>{workData.caption}</p>
                    <ul>
                      {workData.technologies?.map((tech, index) => {
                        return <li key={index}>{tech.icon}</li>;
                      })}
                    </ul>
                  </div>
                </DescriptionContainer>
              </Link>
            </DescriptionHover>
          </ImageContainer>
        </FlexMotionChildren>
      );
    });
  };

  return (
    <SectionLayout>
      <DivLayout>
        <H1Title>Work</H1Title>
        <FlexWrapper>{renderData()}</FlexWrapper>
      </DivLayout>
    </SectionLayout>
  );
};

export default WorksIndex;
