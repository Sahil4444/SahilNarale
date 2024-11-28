import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  python,
  java,
  android,
  firebase,
  sql,
  bootstrap,
  githubb,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  gym,
  threejs,
  acn,
  jp,
  gossip,
  mindmendor,
  esparxx,
  shweta,
  shubham,
  shreyash
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Application Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "githubb",
    icon: githubb,
  },
];

const experiences = [
  {
    title: "Data Analysis Intern",
    company_name: "Accenture North America",
    icon: acn,
    iconBg: "#383E56",
    date: "May 2024 - June 2024",
    points: [
      "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture.",
      "Cleaned, modeled and analyzed 7 datasets to uncover insights into content trends to inform strategic decision.",
      "Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "JPMorgan Chase & CO",
    icon: jp,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Set up a local dev environment by downloading the necessary files, tools, and dependencies.",
      "Fixed broken files in the repository to make web application output correctly.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Used JPMorgan Chase’s open-source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.",
    ],
  },
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Sahil is a standout software developer with exceptional technical skills and a strong sense of ownership.",
    name: "Shweta Chalke",
    designation: "DevOps Engg.",
    company: "LTIMindtree",
    image: shweta,
  },
  {
    testimonial:
      "Sahil’s ability to quickly adapt to new technologies and tackle challenging problems sets him apart.",
    name: "Shubham Upadhyay",
    designation: "Java Intern",
    company: "TCS",
    image: shubham,
  },
  {
    testimonial:
      "His ability to simplify complex problems and deliver elegant solutions makes him a key team resource.",
    name: "Shreyash Chalke",
    designation: "Student",
    company: "SAE",
    image: shreyash,
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  //   project_link: "https://sahil4444.github.io/My_Portfolio.github.io/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  //   project_link: "https://sahil4444.github.io/My_Portfolio.github.io/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  //   project_link: "https://sahil4444.github.io/My_Portfolio.github.io/",
  // },
  {
    name: "MindMendor",
    description:
      "MindMendor : AI-powered platform providing anonymous mental health support, and seamless access to therapist sessions.",
    tags: [
      {
        name: "AIML",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
    ],
    image: mindmendor,
    source_code_link: "https://github.com/Sahil4444/GossipRoom",
    project_link: "https://sahil4444.github.io/GossipRoom/",
  },
  {
    name: "GossipRoom",
    description:
      "GossipRoom : a modern, intuitive chat application designed to make conversations more engaging and fun!",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "pink-text-gradient",
      },
    ],
    image: gossip,
    source_code_link: "https://github.com/Sahil4444/GossipRoom",
    project_link: "https://sahil4444.github.io/GossipRoom/",
  },
  {
    name: "ESparxx",
    description:
      "ESparxx : Your go-to platform for comparing and discovering the best vehicles and financial solutions, uniquely tailored.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "BootStrap",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: esparxx,
    source_code_link: "https://github.com/Sahil4444/GossipRoom",
    project_link: "https://sahil4444.github.io/GossipRoom/",
  },
];

export { services, technologies, experiences, testimonials, projects };