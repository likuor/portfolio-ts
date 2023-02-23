import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

type Data = {
  id: number;
  url: string;
  icon: JSX.Element;
};

const SocialMediaData: Data[] = [
  {
    id: 1,
    url: 'https://github.com/likuor',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/kokisakai',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.facebook.com/sakai.kouki.1',
    icon: <FaFacebook />,
  },
];

export default SocialMediaData;
