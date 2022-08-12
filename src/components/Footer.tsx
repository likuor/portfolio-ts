import { FC } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

const WrapperFooter = styled.nav`
  margin: 0 auto;
  width: 100%;
  padding: 2vw;
  background-color: #0f1626;
  color: #f5f5f5;
  transform: skewY(15deg);
`;

const FlexWrapper = styled.div`
  transform: skew(-15deg);
  margin: 0 auto;
  width: 90%;
  display: flex;
`;

const FlexChildrenList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const LiWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 0 1vw;
`;

const FlexChildrenCopyRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 0.8vw;
`;

const Footer: FC = () => {
  return (
    <WrapperFooter>
      <FlexWrapper>
        <FlexChildrenList>
          <LiWrapper>
            <FaGithub />
          </LiWrapper>
          <LiWrapper>
            <FaLinkedin />
          </LiWrapper>
          <LiWrapper>
            <FaFacebook />
          </LiWrapper>
        </FlexChildrenList>
      </FlexWrapper>
      <FlexWrapper>
        <FlexChildrenCopyRight>
          <p>© 2022 Koki Sakai, All Rights Reserved.</p>
        </FlexChildrenCopyRight>
      </FlexWrapper>
    </WrapperFooter>
  );
};

export default Footer;
