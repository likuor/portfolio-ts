import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiMaterialui,
  SiAntdesign,
  SiRedux,
  SiMongodb,
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
    image: `${process.env.PUBLIC_URL}/image/works/Vamos.png`,
    technologiesIcons: [
      <SiJavascript />,
      <SiReact />,
      <SiMaterialui />,
      <SiFirebase />,
    ],
    jenre: 'studying',
  },
  {
    id: 2,
    title: 'Katsuraba-Kitchen',
    description: '',
    url: 'https://katsuraba-kitchien.netlify.app',
    image: `${process.env.PUBLIC_URL}/image/works/Katsuraba.png`,
    technologiesIcons: [
      <SiJavascript />,
      <SiReact />,
      <SiTailwindcss />,
      <SiFirebase />,
    ],
    jenre: 'Client work',
  },
  {
    id: 3,
    title: 'Doctor Appointment app',
    description: '',
    url: 'https://easydoctorappointment.netlify.app/home',
    image: `${process.env.PUBLIC_URL}/image/works/DoctorAppointment.png`,
    technologiesIcons: [
      <SiJavascript />,
      <SiReact />,
      <SiMongodb />,
      <SiFirebase />,
      <SiRedux />,
    ],
    jenre: 'studying',
  },
  {
    id: 4,
    title: 'Ghibli Exhibition',
    description: '',
    url: 'https://ghibli-exhibition.netlify.app/',
    image: `${process.env.PUBLIC_URL}/image/works/Ghibli.png`,
    technologiesIcons: [
      <SiTypescript />,
      <SiReact />,
      <SiAntdesign />,
      <SiRedux />,
    ],
    jenre: 'studying',
  },
  {
    id: 5,
    title: 'Portfolio',
    description: 'My portfolio',
    url: '',
    image: `${process.env.PUBLIC_URL}/image/works/Hoempage.jpg`,
    technologiesIcons: [<SiTypescript />, <SiReact />],
    jenre: 'studying',
  },
];

export default WorksData;
