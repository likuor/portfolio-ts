import ReactElement from 'react';

import {
  SiReact,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiMaterialui,
  SiAntdesign,
  SiRedux,
  SiNodedotjs,
} from 'react-icons/si';

type Data = {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;
  technologiesIcons: JSX.Element[];
  jenre: string;
};

const WorksData: Data[] = [
  {
    id: 1,
    title: 'Vamos',
    description:
      'Playing soccer.Playing soccer.Playing soccer.Playing soccer.Playing soccer.Playing soccer',
    url: 'https://event-bbs.web.app',
    image: `${process.env.PUBLIC_URL}/image/Vamos.png`,
    technologiesIcons: [<SiReact />],
    jenre: 'studying',
  },
  {
    id: 2,
    title: 'Katsuraba-Kitchen',
    description: '',
    url: 'https://katsuraba-kitchien.netlify.app',
    image: `${process.env.PUBLIC_URL}/image/Katsuraba.png`,
    technologiesIcons: [<SiReact />],
    jenre: 'Client work',
  },
  {
    id: 3,
    title: 'Doctor Appointment app',
    description: '',
    url: 'https://easydoctorappointment.netlify.app/home',
    image: `${process.env.PUBLIC_URL}/image/DoctorAppointment.png`,
    technologiesIcons: [<SiReact />],
    jenre: 'studying',
  },
  {
    id: 4,
    title: 'Ghibli Exhibition',
    description: '',
    url: 'https://ghibli-exhibition.netlify.app/',
    image: `${process.env.PUBLIC_URL}/image/Ghibli.png`,
    technologiesIcons: [<SiReact />],
    jenre: 'studying',
  },
  {
    id: 5,
    title: 'Portfolio',
    description: 'My portfolio',
    url: '',
    image: `${process.env.PUBLIC_URL}/image/Hoempage.jpg`,
    technologiesIcons: [<SiReact />],
    jenre: 'studying',
  },
];

export default WorksData;
