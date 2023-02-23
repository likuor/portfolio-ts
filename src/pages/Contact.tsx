import { FC } from 'react';
import Button from '../components/atoms/Button';
import SectionLayout from '../layout/SectionLayout';
import DivCenterLayout from '../layout/DivCenterLayout';
import MotionDiv from '../layout/MotionDiv';

const Contact: FC = () => {
  return (
    <SectionLayout>
      <DivCenterLayout>
        <h1>Get in touch</h1>
        <MotionDiv>
          <p>
            I am looking forward to chating with you! Feel free to say hello.
            See you later!
          </p>
          <a href='mailto:soloexkokisakai@gmail.com'>
            <Button text='Contact' width='40' />
          </a>
        </MotionDiv>
      </DivCenterLayout>
    </SectionLayout>
  );
};

export default Contact;
