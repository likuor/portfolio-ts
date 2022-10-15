import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
  SiTypescript,
  SiThreedotjs,
  SiPhp,
  SiReact,
  SiJquery,
  SiCakephp,
  SiLaravel,
  SiMysql,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiNextdotjs,
  SiMaterialui,
  SiAntdesign,
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiJava,
  SiPython,
  SiBootstrap,
} from 'react-icons/si';

import {
  GiHiking,
  GiSoccerBall,
  GiGuitar,
  GiCampingTent,
  GiPhotoCamera,
  GiBookshelf,
} from 'react-icons/gi';

type Alldata = {
  languages: {
    name: string;
    icons: JSX.Element;
  }[];
  db: {
    name: string;
    icons: JSX.Element;
  }[];
  frameworks: {
    name: string;
    icons: JSX.Element;
  }[];
  hobby: {
    name: string;
    icons: JSX.Element;
  }[];
};

const SkillsData: Alldata = {
  languages: [
    {
      name: 'Javascript',
      icons: <SiJavascript />,
    },
    {
      name: 'Typescript',
      icons: <SiTypescript />,
    },
    {
      name: 'Three.js',
      icons: <SiThreedotjs />,
    },
    {
      name: 'PHP',
      icons: <SiPhp />,
    },
    {
      name: 'HTML',
      icons: <SiHtml5 />,
    },
    {
      name: 'CSS',
      icons: <SiCss3 />,
    },
    {
      name: 'SCSS',
      icons: <SiSass />,
    },
    {
      name: 'Java',
      icons: <SiJava />,
    },
    {
      name: 'Python',
      icons: <SiPython />,
    },
  ],
  db: [
    {
      name: 'Firebase',
      icons: <SiFirebase />,
    },
    {
      name: 'MongoDB',
      icons: <SiMongodb />,
    },
    {
      name: 'Postgresql',
      icons: <SiPostgresql />,
    },
    {
      name: 'MySQL',
      icons: <SiMysql />,
    },
  ],
  frameworks: [
    {
      name: 'React',
      icons: <SiReact />,
    },
    {
      name: 'Next.js',
      icons: <SiNextdotjs />,
    },
    {
      name: 'Node.js',
      icons: <SiNodedotjs />,
    },
    {
      name: 'Express',
      icons: <SiExpress />,
    },
    {
      name: 'Redux',
      icons: <SiRedux />,
    },
    {
      name: 'Laravel',
      icons: <SiLaravel />,
    },
    {
      name: 'CakePHP',
      icons: <SiCakephp />,
    },
    {
      name: 'Material UI',
      icons: <SiMaterialui />,
    },
    {
      name: 'Ant Design',
      icons: <SiAntdesign />,
    },
    {
      name: 'Styledcomponents',
      icons: <SiStyledcomponents />,
    },
    {
      name: 'Tailwind CSS',
      icons: <SiTailwindcss />,
    },
    {
      name: 'jQuery',
      icons: <SiJquery />,
    },
    {
      name: 'Bootstrap',
      icons: <SiBootstrap />,
    },
  ],
  hobby: [
    {
      name: 'Soccer',
      icons: <GiSoccerBall />,
    },
    {
      name: 'Hiking',
      icons: <GiHiking />,
    },
    {
      name: 'Camping',
      icons: <GiCampingTent />,
    },
    {
      name: 'Ukulele',
      icons: <GiGuitar />,
    },
    {
      name: 'Reading',
      icons: <GiBookshelf />,
    },
    {
      name: 'Shooting',
      icons: <GiPhotoCamera />,
    },
  ],
};

export default SkillsData;
