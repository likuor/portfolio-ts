import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperNavbar = styled.nav`
  margin: 0 auto;
  width: 100%;
  margin-top: 13.5vw;
  background-color: #0f1626;
  color: #f5f5f5;
  transform: skewY(15deg);
`;

const FlexWrapper = styled.div`
  transform: skew(-15deg);
  height: 70px;
  margin: 0 auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexChildrenLogo = styled.div`
  width: 150px;
  font-size: small;

  @media (min-width: 768px) {
    font-size: medium;
  }
`;

const FlexChildrenList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: small;

  @media (min-width: 768px) {
    font-size: medium;
  }
`;

const LiWrapper = styled.li`
  list-style: none;
  padding: 0 1vw;
`;

const Navbar: FC = () => {
  return (
    <>
      <WrapperNavbar>
        <FlexWrapper>
          <FlexChildrenLogo>
            <Link to='/'>
              <h1>Koki Sakai</h1>
            </Link>
          </FlexChildrenLogo>
          <FlexChildrenList>
            <Link to='/about'>
              <LiWrapper>About</LiWrapper>
            </Link>
            <Link to='/work'>
              <LiWrapper>Work</LiWrapper>
            </Link>
            <Link to='/contact'>
              <LiWrapper>Contact</LiWrapper>
            </Link>
          </FlexChildrenList>
        </FlexWrapper>
      </WrapperNavbar>
    </>
  );
};

export default Navbar;
