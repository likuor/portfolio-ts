import { BsListNested, BsList } from 'react-icons/bs';
import { WiMoonAltThirdQuarter } from 'react-icons/wi';

type Data = {
  id: number;
  title?: string;
  icon?: JSX.Element[];
  link?: string;
};

const NavbarData: Data[] = [
  {
    id: 1,
    title: 'Koki Sakai',
    link: '/',
  },
  {
    id: 2,
    icon: [<BsListNested />],
  },
  {
    id: 3,
    icon: [<WiMoonAltThirdQuarter />],
  },
  {
    id: 4,
    title: 'about',
    link: '/about',
  },
  {
    id: 5,
    title: 'Work',
    link: '/work',
  },
  {
    id: 6,
    title: 'Contact',
    link: '/contact',
  },
];

export default NavbarData;
