import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiStyledcomponents,
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
      technologiesName: 'Node.js',
      technologiesIcons: <SiNodedotjs />,
    },
    {
      technologiesName: 'PHP',
      technologiesIcons: <SiPhp />,
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
      technologiesName: 'Redux',
      technologiesIcons: <SiRedux />,
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
      technologiesName: 'Material UI',
      technologiesIcons: <SiMaterialui />,
    },
    {
      technologiesName: 'Ant Design',
      technologiesIcons: <SiAntdesign />,
    },
    {
      technologiesName: 'Styledcomponents',
      technologiesIcons: <SiStyledcomponents />,
    },
    {
      technologiesName: 'Tailwind CSS',
      technologiesIcons: <SiTailwindcss />,
    },
    {
      technologiesName: 'jQuery',
      technologiesIcons: <SiJquery />,
    },
  ],
};

export default SkillsData;
