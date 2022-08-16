import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
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
} from 'react-icons/si';

type Alldata = {
  languages: {
    technologiesName: string;
    technologiesIcons: JSX.Element;
  }[];
  db: {
    technologiesName: string;
    technologiesIcons: JSX.Element;
  }[];
  frameworks: {
    technologiesName: string;
    technologiesIcons: JSX.Element;
  }[];
};

const SkillsData: Alldata = {
  languages: [
    {
      technologiesName: 'Javascript',
      technologiesIcons: <SiJavascript />,
    },
    {
      technologiesName: 'Typescript',
      technologiesIcons: <SiTypescript />,
    },
    {
      technologiesName: 'HTML',
      technologiesIcons: <SiHtml5 />,
    },
    {
      technologiesName: 'CSS',
      technologiesIcons: <SiCss3 />,
    },
    {
      technologiesName: 'SCSS',
      technologiesIcons: <SiSass />,
    },
    {
      technologiesName: 'PHP',
      technologiesIcons: <SiPhp />,
    },
    {
      technologiesName: 'Node.js',
      technologiesIcons: <SiNodedotjs />,
    },
  ],
  db: [
    {
      technologiesName: 'Firebase',
      technologiesIcons: <SiFirebase />,
    },
    {
      technologiesName: 'MongoDB',
      technologiesIcons: <SiMongodb />,
    },
    {
      technologiesName: 'MySQL',
      technologiesIcons: <SiMysql />,
    },
  ],
  frameworks: [
    {
      technologiesName: 'React',
      technologiesIcons: <SiReact />,
    },
    {
      technologiesName: 'Next.js',
      technologiesIcons: <SiNextdotjs />,
    },
    {
      technologiesName: 'Laravel',
      technologiesIcons: <SiLaravel />,
    },
    {
      technologiesName: 'CakePHP',
      technologiesIcons: <SiCakephp />,
    },
    {
      technologiesName: 'jQuery',
      technologiesIcons: <SiJquery />,
    },
    {
      technologiesName: 'Tailwind CSS',
      technologiesIcons: <SiTailwindcss />,
    },
  ],
};

export default SkillsData;
