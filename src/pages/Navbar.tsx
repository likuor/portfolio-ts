import { FC } from 'react';
import styled from 'styled-components';

const WrapperNavbar = styled.nav`
  margin: 0 auto;
  width: 100%;
  padding: 2vw;
  margin-top: 13.5vw;
  background-color: #0f1626;
  color: #f5f5f5;
  transform: skewY(15deg);
`;

const FlexWrapper = styled.div`
  transform: skew(-15deg);
  margin: 0 auto;
  width: 90%;
  display: flex;
`;

const FlexChildrenLogo = styled.div`
  width: 100%;
  display: flex;
`;

const FlexChildrenList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const LiWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1vw;
`;

const Navbar: FC = () => {
  return (
    <>
      <WrapperNavbar>
        <FlexWrapper>
          <FlexChildrenLogo>
            <h1>Koki Sakai</h1>
          </FlexChildrenLogo>
          <FlexChildrenList>
            <LiWrapper>Home</LiWrapper>
            <LiWrapper>About</LiWrapper>
            <LiWrapper>Work</LiWrapper>
            <LiWrapper>Contact</LiWrapper>
          </FlexChildrenList>
        </FlexWrapper>
      </WrapperNavbar>
    </>
  );
};

export default Navbar;
