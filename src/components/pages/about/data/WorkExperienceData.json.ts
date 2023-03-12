type Experiencetype = {
  id: number;
  role: string;
  company: string;
  location: string;
  dateStart: string;
  dateEnd: string;
  url: string;
}[];

const WorkExperiencesData: Experiencetype = [
  {
    id: 1,
    role: 'Programming Teaching Assistant',
    company: 'TECH I.S.',
    location: 'Tokyo, Japan',
    dateStart: 'Nov, 2020',
    dateEnd: 'Feb, 2021',
    url: 'https://techis.io/',
  },
  {
    id: 2,
    role: 'Web Developer & Customer Solution Leader',
    company: 'AnyCarry Inc.',
    location: 'Tokyo, Japan',
    dateStart: 'Jan, 2020',
    dateEnd: 'May, 2021',
    url: 'https://www.anycarry.co.jp/',
  },
  {
    id: 3,
    role: 'Graphic Designer',
    company: 'Refood Food Rescue Foundation',
    location: 'Vancouver, Canada',
    dateStart: 'Dec, 2021',
    dateEnd: 'Apr, 2022',
    url: 'https://refood.ca/',
  },
  {
    id: 4,
    role: 'Frontend Developer (Remote)',
    company: 'Future Standard Co., Ltd.',
    location: 'Tokyo, Japan',
    dateStart: 'Dec, 2022',
    dateEnd: 'Feb, 2023',
    url: 'https://www.futurestandard.co.jp/',
  },
  {
    id: 5,
    role: 'Frontend Developer (Remote)',
    company: '80&Company Inc.',
    location: 'Kyoto, Japan',
    dateStart: 'Jan, 2023',
    dateEnd: 'Present',
    url: 'https://80and.co/en',
  },
  {
    id: 6,
    role: 'Fullstack Developer',
    company: 'Tellext Inc.',
    location: 'Vancouver, Canada',
    dateStart: 'Feb, 2023',
    dateEnd: 'Present',
    url: 'https://tellext.com/',
  },
];

export default WorkExperiencesData;
