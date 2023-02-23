import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AboutData from '../pages/about/data/About.json';

const TypingAnimation: FC = () => {
  return (
    <>
      <TypeAnimation
        sequence={AboutData.introduceAnimation}
        wrapper='h3'
        cursor={true}
        repeat={Infinity}
      />
    </>
  );
};

export default TypingAnimation;
