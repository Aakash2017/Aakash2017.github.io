import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Aakash Shukla',
  subtitle: 'Welcome to my website!',
  cta: 'more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'I am currently a Software Engineer at Google, previously at Amazon and OneSignal, and a recent new grad from the University of California, Berkeley, where I studied Computer Science and Taco Bell Consumption.',
  paragraphTwo: 'I\'m super passionate about teaching computer science, graph theory, and starting side projects but never finishing them. Outside of my professional interests, I spend my free time cooking, reading, and performing standup comedy (come check me out at The Starry Plough)!',
  paragraphThree: 'Every six months I like to take a step back from my routine and choose a particular skill to learn, like swimming or playing the piano. If there\'s something you recommend that I try, hmu and let me know',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Envoy_Logo_Final.png',
    title: 'Envoy Wasm',
    info: 'Maintainer for the open-source envoy-wasm directory (recently integrated into the envoy repository). Envoy is an open-source cloud native network proxy. The WebAssembly (Wasm) extension allows users to inject business logic and personalized endpoints directly into the proxy in an isolated and secure sandbox.',
    info2: '',
    url: 'https://github.com/envoyproxy/envoy-wasm',
    repo: 'https://github.com/envoyproxy/envoy-wasm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'beehive_logo.png',
    title: 'Beehive',
    info: 'Developer for the open-source Beehive project. Provides an exclusive portal for UC Berkeley students to interact with professors to seek and get matched with research opportunities.',
    info2: '',
    url: 'https://github.com/ucberkeley/Beehive',
    repo: 'https://github.com/ucberkeley/Beehive', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aakashshukla99@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aakash-shukla-a21b65148/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Aakash2017',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
