import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  isHeaderShown: boolean;
  isToggleShown?: boolean;
};

const TriangleWrapper = styled.div<Props>`
  width: 0;
  height: 0;
  border-left: 52.5vw solid transparent;
  border-top: 14vw solid #0f1626;
  border-bottom: 4vw solid transparent;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  display: ${(props) => (props.isHeaderShown ? 'flex' : 'none')};
`;

const Toggle = styled.div<Props>`
  position: fixed;
  top: 3vw;
  right: 30px;
  height: 4vw;
  width: 6vw;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: skewY(15deg);
  display: ${(props) => (props.isHeaderShown ? 'flex' : 'none')};

  span {
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 10px;
    background: #fff;

    :nth-of-type(1) {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) =>
        props.isToggleShown ? 'skew(135deg,45deg)' : ''};
    }

    :nth-of-type(2) {
      transition: transform 0.2s ease-in-out;
      transform: ${(props) => (props.isToggleShown ? 'scaleY(0)' : '')};
    }

    :nth-of-type(3) {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) =>
        props.isToggleShown ? 'skew(-135deg,-45deg)' : ''};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const UlWrapper = styled.ul<Props>`
  display: ${(props) => (props.isToggleShown ? 'flex' : 'none')};
  flex-direction: column;
  transform: skewY(15deg);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  background: #0f1626;
  z-index: 10;
  list-style: none;
  color: #fff;

  li {
    padding: 10px;
    width: 70%;
    text-align: center;
    border-bottom: 1px solid rgba(255, 83, 61, 0.3);

    a {
      display: block;
      transform: skew(-15deg);
      padding: 15px 5px;

      :hover {
        transition: transform 0.4s ease-in-out;
        transform: skew(190deg);
      }
    }
  }

  @media (min-width: 768px) {
    padding: 0 1vw;
    display: ${(props) => (props.isHeaderShown ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: flex-end;
    height: 80px;

    li {
      width: auto;
      border-bottom: none;
    }
  }
`;
const Nav = () => {
  const [isToggleShown, setIsToggleShown] = useState(false);
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 40;

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

  const handle = () => {
    // setIsHeaderShown(true);
    return setIsToggleShown(!isToggleShown);
  };
  console.log(isToggleShown);

  return (
    <>
      <TriangleWrapper
        isHeaderShown={isHeaderShown}
        isToggleShown={isToggleShown}
      >
        <Toggle
          isToggleShown={isToggleShown}
          isHeaderShown={isHeaderShown}
          onClick={handle}
        >
          <span></span>
          <span></span>
          <span></span>
        </Toggle>
      </TriangleWrapper>
      <nav>
        <UlWrapper isHeaderShown={isHeaderShown} isToggleShown={isToggleShown}>
          <li>
            <Link to='/' onClick={handle}>
              Koki Sakai
            </Link>
          </li>
          <li>
            <button>Vertical</button>
          </li>
          <li>
            <button>Theme</button>
          </li>
          <li>
            <Link to='/about' onClick={handle}>
              About
            </Link>
          </li>
          <li>
            <Link to='/work' onClick={handle}>
              Work
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={handle}>
              Contact
            </Link>
          </li>
        </UlWrapper>
      </nav>
    </>
  );
};

export default Nav;
