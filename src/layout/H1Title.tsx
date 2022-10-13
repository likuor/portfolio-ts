import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';

interface LayoutType {
  children: React.ReactNode;
}

type Props = {
  isSkew: boolean;
};

const WrapperH1 = styled.h1<Props>`
  transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
  font-size: large;
  padding: 1vw 0;

  @media (min-width: 768px) {
    font-size: x-large;
  }
`;

const H1Title: FC<LayoutType> = ({ children }) => {
  const { isSkew } = useContext(GlobalContext);

  return <WrapperH1 isSkew={isSkew}>{children}</WrapperH1>;
};

export default H1Title;
