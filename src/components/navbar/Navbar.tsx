import { useState, useCallback, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

type Props = {
  isHeaderShown: boolean;
  isHumbergerMenuShown: boolean;
  isDarkMode: boolean;
  isSkew: boolean;
};

const TriangleWrapper = styled.div<Props>`
  animation-name: fade;
  animation-duration: 0.3s;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  width: ${(props) => (props.isSkew ? 0 : '100%')};
  height: 0;
  border-left: ${(props) =>
    props.isSkew ? '52.5vw solid transparent' : 'none'};
  border-top: ${(props) => (props.isSkew ? '14vw solid' : '3rem solid')};
  border-top-color: ${(props) =>
    props.isDarkMode
      ? `${props.theme.dark.colors.secondaryBlack}`
      : `${props.theme.light.colors.green}`};
  border-bottom: 4vw solid transparent;
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
  display: ${(props) =>
    props.isHeaderShown || props.isHumbergerMenuShown ? 'flex' : 'none'};

  @media (min-width: 768px) {
    z-index: 10;
    border-top: ${(props) => (props.isSkew ? `14vw solid` : `none`)};
    border-top-color: ${(props) =>
      props.isDarkMode
        ? `${props.theme.dark.colors.secondaryBlack}`
        : `${props.theme.light.colors.green}`};
  }
`;

const Toggle = styled.div<Props>`
  position: fixed;
  ${(props) => {
    return props.isSkew
      ? `
        top: 0.8rem;
        right: 1.5rem;
        height: 1rem;
        width: 1rem;
      `
      : `
        top: 1rem;
        right: 2rem;
        height: 1.2rem;
        width: 1.2rem;
      `;
  }};
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: ${(props) => (props.isSkew ? 'skewY(15deg)' : 'none')};

  span {
    display: block;
    height: 2px;
    width: 100%;
    border-radius: 10px;
    background: ${(props) =>
      props.isDarkMode
        ? props.theme.dark.colors.green
        : props.theme.light.colors.white};

    :nth-of-type(1) {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) =>
        props.isHumbergerMenuShown ? 'skew(135deg,45deg)' : ''};
    }

    :nth-of-type(2) {
      transition: transform 0.2s ease-in-out;
      transform: ${(props) => (props.isHumbergerMenuShown ? 'scaleY(0)' : '')};
    }

    :nth-of-type(3) {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) =>
        props.isHumbergerMenuShown ? 'skew(-135deg,-45deg)' : ''};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const UlWrapper = styled.ul<Props>`
  animation-name: fade;
  animation-duration: 0.3s;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ${(props) => {
    const darkTheme = props.theme.dark.colors;
    const lightTheme = props.theme.light.colors;
    return props.isDarkMode
      ? `
        background: ${darkTheme.secondaryBlack};
        color: ${darkTheme.green};

        li{
          border-bottom:1px solid ${darkTheme.green};

          :first-child {
            border-top:1px solid ${darkTheme.green};
          }
        }
      `
      : `
        background: ${lightTheme.green};
        color: ${lightTheme.white};

        li{
          border-bottom:1px solid ${lightTheme.white};

          :first-child {
            border-top:1px solid ${lightTheme.white};
          }
        }
      `;
  }};

  display: ${(props) => (props.isHumbergerMenuShown ? 'flex' : 'none')};
  transform: ${(props) => (props.isSkew ? 'skewY(15deg)' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 10;
  list-style: none;

  li {
    padding: 10px;
    width: 70%;
    text-align: center;
    color: ${(props) =>
      props.isDarkMode
        ? props.theme.dark.colors.green
        : props.theme.dark.colors.white};

    a {
      display: block;
      padding: 15px 0.8rem;
      transition: transform 0.4s ease-in-out;
      transform: ${(props) => (props.isSkew ? 'skew(-15deg)' : 'none')};

      :hover {
        transition: transform 0.4s ease-in-out;
        transform: skew(-40deg);
        color: ${(props) => props.theme.light.colors.orange};
      }
    }
  }

  ${(props) => {
    const darkTheme = props.theme.dark.colors;
    const lightTheme = props.theme.light.colors;
    return props.isDarkMode
      ? `
        background: ${darkTheme.secondaryBlack};
        color: ${darkTheme.green};

        li{
          border-bottom:1px solid ${darkTheme.green};

          :first-child {
            border-top:1px solid ${darkTheme.green};
          }
        }
      `
      : `
        background: ${lightTheme.green};
        color: ${lightTheme.white};

        li{
          border-bottom:1px solid ${lightTheme.white};

          :first-child {
            border-top:1px solid ${lightTheme.white};
          }
        }
      `;
  }};

  @media (min-width: 768px) {
    padding: 0 1vw;
    display: ${(props) => (props.isHeaderShown ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: flex-end;
    height: 80px;

    li {
      width: auto;
      border-bottom: none;

      :first-child {
        border-top: none;
      }
    }
  }
`;

const Navbar = () => {
  const [isHumbergerMenuShown, setIsHumbergerMenuShown] = useState(false);
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 40;
  const { isDarkMode, isSkew } = useContext(GlobalContext);

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

  const handleHumbergerMenu = (boolVal: boolean) => {
    if (boolVal) {
      return setIsHumbergerMenuShown(!isHumbergerMenuShown);
    }
    return setIsHumbergerMenuShown(false);
  };

  return (
    <>
      <TriangleWrapper
        isHeaderShown={isHeaderShown}
        isHumbergerMenuShown={isHumbergerMenuShown}
        isDarkMode={isDarkMode}
        isSkew={isSkew}
      >
        <Toggle
          isHumbergerMenuShown={isHumbergerMenuShown}
          isHeaderShown={isHeaderShown}
          isDarkMode={isDarkMode}
          isSkew={isSkew}
          onClick={() => handleHumbergerMenu(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Toggle>
      </TriangleWrapper>
      <nav>
        <UlWrapper
          isHeaderShown={isHeaderShown}
          isHumbergerMenuShown={isHumbergerMenuShown}
          isDarkMode={isDarkMode}
          isSkew={isSkew}
        >
          <li>
            <Link to='/' onClick={() => handleHumbergerMenu(false)}>
              <img
                src={process.env.PUBLIC_URL + '/logoNav.png'}
                alt='koki logo'
                width={'40px'}
                height={'40px'}
              />
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={() => handleHumbergerMenu(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to='/work' onClick={() => handleHumbergerMenu(false)}>
              Work
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={() => handleHumbergerMenu(false)}>
              Contact
            </Link>
          </li>
        </UlWrapper>
      </nav>
    </>
  );
};

export default Navbar;
