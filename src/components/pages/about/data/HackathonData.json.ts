type Hackathontype = {
  id: number;
  title: string;
  organization: string;
  location: string;
  date: string;
  url: string;
}[];

const HackathonsData: Hackathontype = [
  {
    id: 1,
    title: 'Award of NoCode Japan in NoCode Click Hackathon',
    organization: 'NoCode Japan',
    location: 'Tokyo, Japan',
    date: '2021',
    url: 'https://nocodejapan.org/media/click-hackathon-result-01/#NoCode_Japan_shangRestarea_jiu_jing_huang_guisan',
  },
];

export default HackathonsData;
