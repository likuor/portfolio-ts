import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingAnimation: FC = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          'keen on creating things & art',
          2000,
          'into playing any sports',
          2000,
          'huge fun of feeling nature',
          2000,
          'relaxed with playing ukulele',
          2000,
        ]}
        wrapper='h3'
        cursor={true}
        repeat={Infinity}
      />
    </>
  );
};

export default TypingAnimation;
