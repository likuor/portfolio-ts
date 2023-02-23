type Experiencetype = {
  id: number;
  role: string;
  company: string;
  location: string;
  dateStart: string;
  dateEnd: string;
}[];

const WorkExperiencesData: Experiencetype = [
  {
    id: 1,
    role: 'Programming Teaching Assistant',
    company: 'TECH I.S.',
    location: 'Tokyo, Japan',
    dateStart: '2020',
    dateEnd: '2021',
  },
  {
    id: 2,
    role: 'Web Developer & Customer Solution Leader',
    company: 'AnyCarry Inc.',
    location: 'Tokyo, Japan',
    dateStart: '2020',
    dateEnd: '2021',
  },
  {
    id: 3,
    role: 'Graphic Designer',
    company: 'Refood Food Rescue Foundation',
    location: 'Vancouver, Canada',
    dateStart: '2021',
    dateEnd: '2022',
  },
  {
    id: 4,
    role: 'Frontend Developer (Remote)',
    company: 'Future Standard Co., Ltd.',
    location: 'Tokyo, Japan',
    dateStart: '2022',
    dateEnd: 'Present',
  },
  {
    id: 5,
    role: 'Frontend Developer (Remote)',
    company: '80&Company Inc.',
    location: 'Kyoto, Japan',
    dateStart: '2023',
    dateEnd: 'Present',
  },
];

export default WorkExperiencesData;
