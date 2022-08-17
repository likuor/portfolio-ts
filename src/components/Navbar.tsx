import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';

type Props = {
  isToggle: boolean;
};

const WrapperNavbar = styled.nav<Props>`
  margin: 0 auto;
  width: 100%;
  margin-top: 13.5vw;
  background-color: #0f1626;
  color: #f5f5f5;
  transform: skewY(15deg);
`;

const Ul = styled.ul<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 3vw;
  margin: 0 auto;
  transition: transform 0.4s ease-in-out;
  transform: ${(props) => (props.isToggle ? '' : 'translate(0px, 1px)')};

  h1 {
    transform: skew(-15deg);
    font-size: large;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    flex-wrap: nowrap;
    background: none;
    padding: 1vw;

    li:first-child {
      > h1 {
        padding: 15px 5px;
      }
      flex-grow: 1;
    }
  }
`;

const LiWrapper = styled.li<Props>`
  width: 100%;
  text-align: center;
  padding: 0 1vw;
  display: ${(props) => (props.isToggle ? 'none' : 'block')};
  border-bottom: 1px solid rgba(255, 83, 61, 0.3);
  :last-child {
    border-bottom: none;
  }

  > a {
    display: block;
    transform: skew(-15deg);
    padding: 15px 5px;
  }

  :hover {
    transition: transform 0.4s ease-in-out;
    transform: skew(195deg);
  }

  @media (min-width: 768px) {
    font-size: large;
    border-bottom: none;
    order: 1;
    position: relative;
    display: block;
    width: auto;
  }
`;

const Toggle = styled.li<Props>`
  height: 20px;
  width: 26px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 10px;
    background: #fff;

    :nth-of-type(1) {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) => (props.isToggle ? '' : 'skew(135deg,45deg)')};
    }

    :nth-of-type(2) {
      transition: transform 0.2s ease-in-out;
      transform: ${(props) => (props.isToggle ? '' : 'scaleY(0)')};
    }

    :nth-of-type(3) {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) => (props.isToggle ? '' : 'skew(-135deg,-45deg)')};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Navbar: FC = () => {
  const [isToggleShown, setIsToggleShown] = useState(true);

  // const [isHeaderShown, setIsHeaderShown] = useState(true);
  // const [lastPosition, setLastPosition] = useState(0);
  // const headerHeight = 20;

  // const scrollEvent = useCallback(() => {
  //   const offset = window.pageYOffset;

  //   if (offset > headerHeight) {
  //     setIsHeaderShown(false);
  //   } else {
  //     setIsHeaderShown(true);
  //   }

  //   if (offset < lastPosition) {
  //     setIsHeaderShown(true);
  //   }

  //   setLastPosition(offset);
  // }, [lastPosition]);

  // useEffect(() => {
  //   window.addEventListener('scroll', scrollEvent);

  //   return () => {
  //     window.removeEventListener('scroll', scrollEvent);
  //   };
  // }, [scrollEvent]);

  const handle = () => {
    console.log(isToggleShown);
    return setIsToggleShown(!isToggleShown);
  };

  return (
    <>
      <WrapperNavbar isToggle={isToggleShown}>
        <Ul isToggle={isToggleShown}>
          <li>
            <h1>
              <Link to='/'>Koki Sakai</Link>
            </h1>
          </li>
          <Toggle isToggle={isToggleShown} onClick={handle}>
            <span></span>
            <span></span>
            <span></span>
          </Toggle>

          <LiWrapper isToggle={isToggleShown}>
            <Link to='/about' onClick={handle}>
              About
            </Link>
          </LiWrapper>

          <LiWrapper isToggle={isToggleShown}>
            <Link to='/work' onClick={handle}>
              Work
            </Link>
          </LiWrapper>

          <LiWrapper isToggle={isToggleShown}>
            <Link to='/contact' onClick={handle}>
              Contact
            </Link>
          </LiWrapper>
        </Ul>
      </WrapperNavbar>
    </>
  );
};

export default Navbar;
