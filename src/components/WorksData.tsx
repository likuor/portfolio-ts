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
  SiStyledcomponents,
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
      'Share places you are supposed to be in a minute to play any sports',
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
    description:
      'Made this website for an owner who runs restaurants to inform what kind of food they have',
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
    title: 'Appointment app',
    description:
      'We can see schedules of appointments by doctors side and users side',
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
    description: 'Managing Japanese popular Ghibli movies that you love',
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
    description:
      'Strongly recommend you browse this website without tilting your head so long time',
    url: '',
    image: `${process.env.PUBLIC_URL}/image/works/Hoempage.jpg`,
    technologiesIcons: [<SiTypescript />, <SiReact />, <SiStyledcomponents />],
    jenre: 'studying',
  },
];

export default WorksData;
