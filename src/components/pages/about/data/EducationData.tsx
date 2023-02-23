type Educationtype = {
  id: number;
  major: string;
  school: string;
  location: string;
  dateStart: string;
  dateEnd: string;
}[];

const EducationsData: Educationtype = [
  {
    id: 1,
    major: 'Bachelor of Law',
    school: 'Nihon University',
    location: 'Tokyo, Japan',
    dateStart: '2013',
    dateEnd: '2018',
  },
  {
    id: 2,
    major: 'Web & Mobile Application Development Diploma',
    school: 'Cornerstone International Community College of Canada',
    location: 'Vancouver, Canada',
    dateStart: '2022',
    dateEnd: 'Present',
  },
];

export default EducationsData;
