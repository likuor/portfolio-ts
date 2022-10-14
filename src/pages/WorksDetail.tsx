import { FC, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import WorksData from '../components/WorksData';
import { GlobalContext } from '../context/GlobalContext';
import SectionLayout from '../layout/SectionLayout';
import DivLayout from '../layout/DivLayout';
import H1Title from '../layout/H1Title';
import MotionDiv from '../layout/MotionDiv';

type Props = {
  isDarkMode?: boolean;
  isSkew: boolean;
};

const FlexWrapper = styled.div<Props>`
  > div {
    margin: 0 3vw;

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
            display: block;
            padding: 15px 0.8rem;
            transition: transform 0.4s ease-in-out;

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

            :hover {
              transition: transform 0.4s ease-in-out;
              transform: skew(-20deg);
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

          > span {
            padding-left: 0.5rem;
            vertical-align: middle;
          }
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

const WorksDetail: FC = () => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);
  const params: string | undefined = useParams<string>().worksId;
  const selectedWork = WorksData.find((work) => work.id === Number(params));

  return (
    <SectionLayout>
      <DivLayout>
        <H1Title>{selectedWork?.title}</H1Title>
        <FlexWrapper isSkew={isSkew} isDarkMode={isDarkMode}>
          <MotionDiv>
            <ImageContainer>
              <img
                src={selectedWork?.imageThumbnail}
                alt={selectedWork?.title}
              />
            </ImageContainer>
          </MotionDiv>
          <MotionDiv>
            <div>
              <h2>Techs</h2>
              <ul>
                {selectedWork?.technologies?.map((tech, index) => {
                  return (
                    <li key={index}>
                      {tech.name}
                      {tech.icon ? <span>{tech.icon}</span> : ''}
                    </li>
                  );
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
          </MotionDiv>
        </FlexWrapper>
        <FlexWrapper isSkew={isSkew} isDarkMode={isDarkMode}>
          <MotionDiv>
            <ImageContainer>
              <img src={selectedWork?.images[1]} alt={selectedWork?.title} />
            </ImageContainer>
          </MotionDiv>
          <MotionDiv>
            <div>
              <h2>Features</h2>
              <p>{selectedWork?.description.features[0]}</p>
            </div>
          </MotionDiv>
        </FlexWrapper>
        <FlexWrapper isSkew={isSkew} isDarkMode={isDarkMode}>
          <MotionDiv>
            <ImageContainer>
              <img src={selectedWork?.images[2]} alt={selectedWork?.title} />
            </ImageContainer>
          </MotionDiv>
          <MotionDiv>
            <div>
              <h2>Features</h2>
              <p>{selectedWork?.description.features[1]}</p>
            </div>
          </MotionDiv>
        </FlexWrapper>
      </DivLayout>
    </SectionLayout>
  );
};

export default WorksDetail;
