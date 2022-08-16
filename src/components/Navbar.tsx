import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';

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
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 20;

  const scrollEvent = useCallback(() => {
    const offset = window.pageYOffset;

    if (offset > headerHeight) {
      setIsHeaderShown(false);
    } else {
      setIsHeaderShown(true);
    }

    if (offset < lastPosition) {
      setIsHeaderShown(true);
    }

    setLastPosition(offset);
  }, [lastPosition]);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

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
