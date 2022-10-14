import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../context/GlobalContext';

interface LayoutType {
  children: React.ReactNode;
}

type Props = {
  isDarkMode?: boolean;
  isSkew: boolean;
};

const WrapperDiv = styled.div<Props>`
  margin: 0 auto;
  padding: 2vw 0;
  width: 80%;
`;

const DivLayout: FC<LayoutType> = ({ children }) => {
  const { isSkew } = useContext(GlobalContext);

  return <WrapperDiv isSkew={isSkew}>{children}</WrapperDiv>;
};

export default DivLayout;
