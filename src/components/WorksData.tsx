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
  imageThumbnail: string;
  images: string[];
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
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/Vamos.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Vamos.png`,
      `${process.env.PUBLIC_URL}/image/works/Katsuraba.png`,
      `${process.env.PUBLIC_URL}/image/works/DoctorAppointment.png`,
    ],
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
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/Katsuraba.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Vamos.png`,
      `${process.env.PUBLIC_URL}/image/works/Katsuraba.png`,
      `${process.env.PUBLIC_URL}/image/works/DoctorAppointment.png`,
    ],
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
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/DoctorAppointment.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Vamos.png`,
      `${process.env.PUBLIC_URL}/image/works/Katsuraba.png`,
      `${process.env.PUBLIC_URL}/image/works/DoctorAppointment.png`,
    ],
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
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/Ghibli.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Vamos.png`,
      `${process.env.PUBLIC_URL}/image/works/Katsuraba.png`,
      `${process.env.PUBLIC_URL}/image/works/DoctorAppointment.png`,
    ],
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
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/Hoempage.jpg`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Vamos.png`,
      `${process.env.PUBLIC_URL}/image/works/Katsuraba.png`,
      `${process.env.PUBLIC_URL}/image/works/DoctorAppointment.png`,
    ],
    technologiesIcons: [<SiTypescript />, <SiReact />, <SiStyledcomponents />],
    jenre: 'studying',
  },
];

export default WorksData;
