import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface LayoutType {
  children: React.ReactNode;
}

const MotionWrapper = styled(motion.div)``;

const MotionDiv: FC<LayoutType> = ({ children }) => {
  return (
    <MotionWrapper
      variants={{
        offscreen: {
          y: 100,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      }}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </MotionWrapper>
  );
};

export default MotionDiv;
