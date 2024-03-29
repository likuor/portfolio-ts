import {
  SiReact,
  SiJavascript,
  SiThreedotjs,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiMaterialui,
  SiAntdesign,
  SiRedux,
  SiMongodb,
  SiStyledcomponents,
  SiBootstrap,
  SiExpress,
  SiNodedotjs,
  SiAmazonaws,
  SiAwsamplify,
  SiSocketdotio,
} from 'react-icons/si';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Data = {
  id: number;
  title: string;
  caption: string;
  description: { story: string; features: string[] };
  links: { url: string; icon: JSX.Element }[];
  imageThumbnail: string;
  images: string[];
  technologies?: { name: string; icon?: JSX.Element }[];
  jenre: string;
};

const WorksData: Data[] = [
  {
    id: 1,
    title: 'Vamos',
    caption:
      'Share places you are supposed to be in a minute to play any sports',
    description: {
      story:
        'When I would like to play soccer after school, I am always not sure how many people play it at the time. This app helps to find somebody in the same situation as me. We can share how many people palying sports right now.',
      features: [
        'We can see the information of events to play sports with new friends. We can update the numbers of attendees in firebase when you arrive at any place.',
        'We will see how many people are joining the sports now so there is no more hesitation to go there before going out from anywhere.',
      ],
    },
    links: [
      { url: 'https://event-bbs.web.app', icon: <FaExternalLinkAlt /> },
      { url: 'https://github.com/rei-kaji/event-bbs', icon: <FaGithub /> },
    ],
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/Vamos/Vamos.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Vamos/Vamos.png`,
      `${process.env.PUBLIC_URL}/image/works/Vamos/Vamos_detail.png`,
      `${process.env.PUBLIC_URL}/image/works/Vamos/Vamos_hero.png`,
    ],
    technologies: [
      {
        name: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        name: 'React',
        icon: <SiReact />,
      },
      {
        name: 'MaterialUI',
        icon: <SiMaterialui />,
      },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
    jenre: 'studying',
  },
  {
    id: 2,
    title: 'Katsuraba-Kitchen',
    caption:
      'Made this website for an owner who runs restaurants to inform what kind of food they have',
    links: [
      {
        url: 'https://katsuraba-kitchien.netlify.app',
        icon: <FaExternalLinkAlt />,
      },
      { url: 'https://github.com/likuor/katsuraba', icon: <FaGithub /> },
    ],
    description: {
      story:
        'Achieved a client work from Japan as a freelance. I decided to use a straightforward design with Tailwind CSS so that they needed a website to spread the restaurant inoformation in public.',
      features: [
        'Applying firebase to store the all restaurant data. It helps easily add and edit to update the restaurants information for people who unfamilliar with coding.',
        'It is so clear to me to build up CSS structure from the scratch by using Tailwind CSS.',
      ],
    },
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/Katsuraba-kitchen/Katsuraba.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Katsuraba-kitchen/Katsuraba.png`,
      `${process.env.PUBLIC_URL}/image/works/Katsuraba-kitchen/Katsuraba_items.png`,
      `${process.env.PUBLIC_URL}/image/works/Katsuraba-kitchen/Katsuraba_detail.png`,
    ],
    technologies: [
      {
        name: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        name: 'React',
        icon: <SiReact />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
      },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
    jenre: 'Client work',
  },
  {
    id: 3,
    title: 'Appointment app',
    caption:
      'We can see schedules of appointments by doctors side and users side',
    links: [
      {
        url: 'https://easydoctorappointment.netlify.app/home',
        icon: <FaExternalLinkAlt />,
      },
      {
        url: 'https://github.com/kubilaycakmak/doctor-appointment',
        icon: <FaGithub />,
      },
    ],
    description: {
      story:
        'Have you ever thought why we can make an appointment with only a few doctors, clinics and hospitals through app? We solved the problem. We can easily make an appointment and we can register as doctors as well.',
      features: [
        'Handlig the all appointment data such as reading, creating and  updating in a team made me have a lot of fun more than myself project. We manage the login states and user flag states in Redux',
        'I feel extraordinarily comfortale with working under Ajile project management. Having scrum meeting told our team what the team needs and made our communication smoothly.',
      ],
    },
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/DoctorAppointment/DoctorAppointment.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/DoctorAppointment/DoctorAppointment.png`,
      `${process.env.PUBLIC_URL}/image/works/DoctorAppointment/DoctorAppointment_list.png`,
      `${process.env.PUBLIC_URL}/image/works/DoctorAppointment/DoctorAppointment_detail.png`,
    ],

    technologies: [
      {
        name: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        name: 'React',
        icon: <SiReact />,
      },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      {
        name: 'MongoDB',
        icon: <SiMongodb />,
      },
      { name: 'Firebase', icon: <SiFirebase /> },
      {
        name: 'Redux',
        icon: <SiRedux />,
      },
    ],
    jenre: 'studying',
  },
  {
    id: 4,
    title: 'Ghibli Exhibition',
    caption: 'Managing Japanese popular Ghibli movies that you love',
    links: [
      {
        url: 'https://ghibli-exhibition.netlify.app/',
        icon: <FaExternalLinkAlt />,
      },
      { url: 'https://github.com/likuor/ghibli', icon: <FaGithub /> },
    ],
    description: {
      story:
        'I have a huge confidence of having a good memory except for movie titles. We can find our favorite masterpieces and they will probably make you nostalgic.',
      features: [
        'This app has very practical functions like, search bar, filterling and favorite funcitions. I am so glad to make this app complete in Typescript because I am not afraid of it anymore.',
        'Ant design has bunch of handy functions and great components which come with modern designs. We can use them in indivisual works and also business situations.',
      ],
    },
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/Ghibli/Ghibli.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Ghibli/Ghibli.png`,
      `${process.env.PUBLIC_URL}/image/works/Ghibli/Ghibli_detail.png`,
      `${process.env.PUBLIC_URL}/image/works/Ghibli/Ghibli_list.png`,
    ],

    technologies: [
      {
        name: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        name: 'React',
        icon: <SiReact />,
      },
      {
        name: 'Ant design',
        icon: <SiAntdesign />,
      },
      {
        name: 'Redux',
        icon: <SiRedux />,
      },
    ],
    jenre: 'studying',
  },
  {
    id: 5,
    title: 'Portfolio',
    caption:
      'Strongly recommend you browse this website without tilting your head so long time',
    links: [
      {
        url: 'https://kokisakai.netlify.app',
        icon: <FaExternalLinkAlt />,
      },
      { url: 'https://github.com/likuor/portfolio-ts', icon: <FaGithub /> },
    ],
    description: {
      story:
        'I would love to make something simple and unique. Personally, I have never seen any website tilted before so I made it done. I can see you tilt your head right now!',
      features: [
        'There is a icon button to prevent you from hurting your neck. It is managed on a useContext and passing props to global style on every pages. ',
        'I realized how styled components are useful to manage CSS relating to states. I usually use CSS modules but from now I could be addicted to use styled components.',
      ],
    },
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/Portfolio/Portfolio.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Portfolio/Portfolio.png`,
      `${process.env.PUBLIC_URL}/image/works/Portfolio/Portfolio_about.png`,
      `${process.env.PUBLIC_URL}/image/works/Portfolio/Portfolio_work.png`,
    ],

    technologies: [
      {
        name: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        name: 'React',
        icon: <SiReact />,
      },
      {
        name: 'Three.js',
        icon: <SiThreedotjs />,
      },
      {
        name: 'Styled Components',
        icon: <SiStyledcomponents />,
      },
      {
        name: 'Framer Motion',
      },
    ],
    jenre: 'studying',
  },
  {
    id: 6,
    title: 'Blog app',
    caption: "A platform of sharing everybody's blog",
    description: {
      story:
        'After learning Express.js and MongoDB, I wanted to understand well how to use them and connecting React so I decided to make simple a CRUD blog app. I believe I have confidence that I could make Backend to Frontend by myself!',
      features: [
        "We can see all posts other users did in home page, it's categorized by 'All', 'English', 'Programming' to specify dependign on articles. Moreover, we can add articles with title, description. And editing deleting are included in it. Upcoming function would be adding a picture. ",
        'Authorization function was always driving me crazy because I had to care about personal user information. However, bcrypt got rid of the anxiety. I have huge confidence of using any information.',
      ],
    },
    links: [
      {
        url: 'https://blogapp-bykoki.onrender.com',
        icon: <FaExternalLinkAlt />,
      },
      { url: 'https://github.com/likuor/blogapp', icon: <FaGithub /> },
    ],
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/BlogApp/BlogApp.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/BlogApp/BlogApp.png`,
      `${process.env.PUBLIC_URL}/image/works/BlogApp/BlogApp_post.png`,
      `${process.env.PUBLIC_URL}/image/works/BlogApp/BlogApp_auth.png`,
    ],
    technologies: [
      {
        name: 'Typescript',
        icon: <SiTypescript />,
      },
      {
        name: 'React',
        icon: <SiReact />,
      },
      {
        name: 'React-Bootstrap',
        icon: <SiBootstrap />,
      },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    jenre: 'studying',
  },
  {
    id: 7,
    title: 'Chillip',
    caption:
      'We can connect new friends from different courses in our school and enjoy chatting.',
    description: {
      story:
        'Our school provides several courses such as web development, UI/UX design, Degital Marketing but we feel these courses are little closed communities. If we collaborate with students in the other courses, we can try to make businesses, get more practical workshops, cultivate experiences. We hope this app helps students carrier and expand their commnunity.',
      features: [
        "It was tough to apply a public library having a strict rule to make a swiping function to this app while I had to care about avoiding unnecessary rendering. It made me understand well mounting and rendering and also avoid too many renders if it's not needed.",
        "Setting cookie at backend and checking the cookie from frontend to make sure it's robust and stable security.",
      ],
    },
    links: [
      {
        url: 'https://main.d1q845p9ygn1yh.amplifyapp.com/',
        icon: <FaExternalLinkAlt />,
      },
      {
        url: 'https://github.com/tenmusu007/matchingapp-frontend',
        icon: <FaGithub />,
      },
    ],
    imageThumbnail: `${process.env.PUBLIC_URL}/image/works/Chillip/Chillip_hero.png`,
    images: [
      `${process.env.PUBLIC_URL}/image/works/Chillip/Chillip_hero.png`,
      `${process.env.PUBLIC_URL}/image/works/Chillip/Chillip_chat.png`,
      `${process.env.PUBLIC_URL}/image/works/Chillip/Chillip_profile.png`,
    ],
    technologies: [
      {
        name: 'Javascript',
        icon: <SiJavascript />,
      },
      {
        name: 'React',
        icon: <SiReact />,
      },
      {
        name: 'Styled Components',
        icon: <SiStyledcomponents />,
      },
      {
        name: 'MaterialUI',
        icon: <SiMaterialui />,
      },
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      {
        name: 'MongoDB',
        icon: <SiMongodb />,
      },
      { name: 'AWS S3', icon: <SiAmazonaws /> },
      { name: 'AWS Amplify', icon: <SiAwsamplify /> },
      { name: 'Socket.io', icon: <SiSocketdotio /> },
    ],
    jenre: 'studying',
  },
];

export default WorksData;
