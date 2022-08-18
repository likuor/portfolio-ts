import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useCallback, useEffect } from 'react';

type Props = {
  isToggle: boolean;
  isHeaderShown?: boolean;
  isScroll?: boolean;
};

const NavWrapper = styled.nav<Props>`
  width: 100%;
  margin-top: 13.5vw;
  position: relative;
  color: #fff;
  z-index: 10;

  ul {
    transform: skewY(15deg);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 10px;
    position: absolute;
    width: 100%;
    background: #0f1626;

    h1 {
      transform: skew(-15deg);
      font-size: large;
      align-items: center;
    }

    @media (min-width: 768px) {
      align-items: flex-start;
      flex-wrap: nowrap;

      li:first-child {
        > h1 {
          padding: 15px 5px;
        }
        flex-grow: 1;
      }
    }
  }
`;

const LiWrapper = styled.li<Props>`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(255, 83, 61, 0.3);
  display: ${(props) => (props.isToggle ? 'block' : 'none')};
  position: relative;

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
    padding: 0 1vw;
  }
`;

const Toggle = styled.li<Props>`
  height: 20px;
  width: 26px;
  z-index: 10;
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
      transform: ${(props) => (props.isToggle ? 'skew(135deg,45deg)' : '')};
    }

    :nth-of-type(2) {
      transition: transform 0.2s ease-in-out;
      transform: ${(props) => (props.isToggle ? 'scaleY(0)' : '')};
    }

    :nth-of-type(3) {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) => (props.isToggle ? 'skew(-135deg,-45deg)' : '')};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const ToggleSmall = styled.nav<Props>`
  position: fixed;
  background-color: red;
  top: 5%;
  right: 10%;
  height: 60px;
  width: 60px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
    background: ${(props) => (props.isScroll ? '#0f1626' : '#fff')};

    :nth-of-type(1) {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) => (props.isToggle ? 'skew(135deg,45deg)' : '')};
    }

    :nth-of-type(2) {
      transition: transform 0.2s ease-in-out;
      transform: ${(props) => (props.isToggle ? 'scaleY(0)' : '')};
    }

    :nth-of-type(3) {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) => (props.isToggle ? 'skew(-135deg,-45deg)' : '')};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Navbar: FC = () => {
  const [isScroll, setIsScroll] = useState(false);
  window.onscroll = scroll;

  function scroll() {
    const scroll_position = window.pageYOffset;
    if (scroll_position < 40) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  }
  console.log(isScroll);

  // if (window.scrollY < 140) {
  //   setIsScroll(true);
  // }

  const [isToggleShown, setIsToggleShown] = useState(false);
  // const [isHeaderShown, setIsHeaderShown] = useState(true);
  // const [lastPosition, setLastPosition] = useState(0);
  // const headerHeight = 30;

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

  // console.log(isHeaderShown);

  const handle = () => {
    return setIsToggleShown(!isToggleShown);
  };

  return (
    <>
      <NavWrapper style={{}} isToggle={isToggleShown}>
        <ul>
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
        </ul>
      </NavWrapper>
    </>
  );
};

export default Navbar;
