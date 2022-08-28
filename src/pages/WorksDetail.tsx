import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import WorksData from '../components/WorksData';
import { GlobalContext } from '../context/GlobalContext';
import { motion } from 'framer-motion';

type Props = {
  isDarkMode?: boolean;
  isSkew: boolean;
};

const WrapperSection = styled.section<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  > div {
    margin: 0 3vw;
    ${(props) => {
      const darkTheme = props.theme.dark.colors;
      const lightTheme = props.theme.light.colors;
      return props.isDarkMode
        ? `
      border-top: 0.3px solid ${darkTheme.lightGreen};
      border-bottom: 0.3px solid ${darkTheme.lightGreen};;

      `
        : `
      border-top: 0.3px solid ${lightTheme.orange};
      border-bottom: 0.3px solid ${lightTheme.orange};
      `;
    }}

    > div {
      padding: 3vw 0;

      h2 {
        transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
        font-size: medium;
        padding-bottom: 0.5rem;
      }

      > ul {
        font-size: small;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};

        :first-child {
          justify-content: space-evenly;

          > a {
            font-size: large;

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
            transition: transform 0.4s ease-in-out;

            :hover {
              transition: transform 0.4s ease-in-out;
              transform: skew(180deg);
              color: ${(props) => props.theme.light.colors.orange};
            }
          }
        }

        > li {
          margin: 0.3rem 0;
          padding: 0.5rem;
          margin-left: 1em;
          :first-child {
            margin-left: 0;
          }

          ${(props) => {
            const darkTheme = props.theme.dark.colors;
            const lightTheme = props.theme.light.colors;
            return props.isDarkMode
              ? `
              background: ${darkTheme.secondaryBlack};
              color: ${darkTheme.green};
              `
              : `
              background: ${lightTheme.brown};
              color: ${lightTheme.black};
              `;
          }};
        }
      }
    }
    p {
      font-size: small;
      line-height: 1.5;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin: 2vw 0;

    > div {
      width: 100%;

      > div {
        h2 {
          font-size: x-large;
        }

        > ul {
          > li {
            font-size: large;
          }

          :first-child {
            a {
              font-size: x-large;
            }
          }
        }
      }
      p {
        font-size: large;
      }
    }
  }
`;

const ImageContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;

  img {
    object-fit: contain;
    width: 100%;
  }
`;

const MotionWrapper = styled(motion.div)``;

const WorksDetail: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);
  const params: string | undefined = useParams<string>().worksId;
  const selectedWork = WorksData.find((work) => work.id === Number(params));

  return (
    <WrapperSection isDarkMode={isDarkMode} isSkew={isSkew}>
      <div>
        <h1>{selectedWork?.title}</h1>
        <FlexWrapper isSkew={isSkew} isDarkMode={isDarkMode}>
          <MotionWrapper
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
            <ImageContainer>
              <img
                src={selectedWork?.imageThumbnail}
                alt={selectedWork?.title}
              />
            </ImageContainer>
          </MotionWrapper>
          <MotionWrapper
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
            <div>
              <h2>Techs</h2>
              <ul>
                {selectedWork?.technologiesNames.map((techName, index) => {
                  return <li key={index}>{techName}</li>;
                })}
              </ul>
            </div>
            <div>
              <h2>Story</h2>
              <p>{selectedWork?.description.story}</p>
            </div>
            <div>
              <ul>
                {selectedWork?.links.map((link, index) => {
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <li>{link.icon}</li>
                    </a>
                  );
                })}
              </ul>
            </div>
          </MotionWrapper>
        </FlexWrapper>
        <FlexWrapper isSkew={isSkew} isDarkMode={isDarkMode}>
          <MotionWrapper
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
            <ImageContainer>
              <img src={selectedWork?.images[1]} alt={selectedWork?.title} />
            </ImageContainer>
          </MotionWrapper>
          <MotionWrapper
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
            <div>
              <h2>Features</h2>
              <p>{selectedWork?.description.features[0]}</p>
            </div>
          </MotionWrapper>
        </FlexWrapper>
        <FlexWrapper isSkew={isSkew} isDarkMode={isDarkMode}>
          <MotionWrapper
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
            <ImageContainer>
              <img src={selectedWork?.images[2]} alt={selectedWork?.title} />
            </ImageContainer>
          </MotionWrapper>
          <MotionWrapper
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
            <div>
              <h2>Features</h2>
              <p>{selectedWork?.description.features[1]}</p>
            </div>
          </MotionWrapper>
        </FlexWrapper>
      </div>
    </WrapperSection>
  );
};

export default WorksDetail;
