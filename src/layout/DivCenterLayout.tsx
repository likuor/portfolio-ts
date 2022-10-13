import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';

interface LayoutType {
  children: React.ReactNode;
}

type Props = {
  isSkew: boolean;
};

const WrapperDiv = styled.div<Props>`
  margin: 0 auto;
  padding: 2vw 0;
  width: 80%;
  text-align: center;

  > h1 {
    transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};
    font-size: large;
    padding: 1vw 0;

    @media (min-width: 768px) {
      font-size: x-large;
    }
  }
`;

const DivCenterLayout: FC<LayoutType> = ({ children }) => {
  const { isSkew } = useContext(GlobalContext);

  return <WrapperDiv isSkew={isSkew}>{children}</WrapperDiv>;
};

export default DivCenterLayout;
