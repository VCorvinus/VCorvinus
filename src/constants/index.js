import {
  mobile,
  backend,
  designer,
  web,
  javascript,
  typescript,
  html,
  ps,
  ind,
  adi,
  ink,
  krita,
  rhino,
  sai,
  gimp,
  css,
  reactjs,
  tailwind,
  nodejs,
  figma,
  blender,
  acad,
  hta,
  schleich,
  telekom,
  weather,
  restaurant,
  art,
  threejs,
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
    title: "Industrial Designer",
    icon: designer,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: ps,
  },
  {
    name: "InDesign",
    icon: ind,
  },
  {
    name: "Illustrator",
    icon: adi,
  },
  {
    name: "InkScape",
    icon: ink,
  },
  {
    name: "Krita",
    icon: krita,
  },
  {
    name: "Rhinoceros 3D",
    icon: rhino,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "ArchiCAD",
    icon: acad,
  },
  {
    name: "Paint Tool Sai",
    icon: sai,
  },
  {
    name: "GIMP",
    icon: gimp,
  },
];

const experiences = [
  {
    title: "Architectural & Interior Design",
    company_name: "Architektur - Hans Tepe",
    icon: hta,
    iconBg: "#1c6862",
    date: "Aug 2011 - Jul 2012",
    points: ["#", "#", "#", "#"],
  },
  {
    title: "3D Design Internship",
    company_name: "Schleich",
    icon: schleich,
    iconBg: "#daf0ea",
    date: "Sept 2015 - Feb 2016",
    points: ["#", "#", "#", "#"],
  },
  {
    title: "IT & Software Help Service",
    company_name: "Deutsche Telekom",
    icon: telekom,
    iconBg: "#1c6862",
    date: "Jun 2019 - Jul 2022",
    points: ["#", "#", "#", "#"],
  },
];

const testimonials = [
  {
    testimonial: "Very much awesome.",
    name: "Andrea Anderson",
    designation: "CFO",
    company: "Acne Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "Noice!",
    name: "Jürgen Jürgenson",
    designation: "COO",
    company: "DEAF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "Hellish Good!",
    name: "Lara Larson",
    designation: "CTO",
    company: "666 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Weather Project",
    description: "description",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "accordion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/",
  },
  {
    name: "Restaurant",
    description: "description",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/",
  },
  {
    name: "ID Projects",
    description: "description",
    tags: [
      {
        name: "rhino",
        color: "blue-text-gradient",
      },
      {
        name: "sai",
        color: "green-text-gradient",
      },
      {
        name: "paper",
        color: "pink-text-gradient",
      },
    ],
    image: art,
    source_code_link: "https://www.deviantart.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
