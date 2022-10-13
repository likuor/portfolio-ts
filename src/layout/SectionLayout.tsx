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

const WrapperSection = styled.section<Props>`
  width: 100%;
  display: flex;
  min-height: 60vh;
  justify-content: center;
  align-items: center;
  padding: 3vw 0;
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
`;

const SectionLayout: FC<LayoutType> = ({ children }) => {
  const { isDarkMode, isSkew } = useContext(GlobalContext);

  return (
    <WrapperSection isDarkMode={isDarkMode} isSkew={isSkew}>
      {children}
    </WrapperSection>
  );
};

export default SectionLayout;
