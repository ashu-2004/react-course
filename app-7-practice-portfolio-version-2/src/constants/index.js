import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const MY_CONTENT = `I am passionate about web development and real-time applications, and I have worked on several impactful projects. I have completed my diploma in Computer Engineering, which has provided me with a strong technical foundation. I have a deep understanding of web technologies such as HTML, CSS, JavaScript, React.js.`;

export const EDUCATION = [
  {
    year: "2023 - Present",
    role: "Bachelor of Engineering",
    institute: "Government College of Engineering and Research Avasari Khurd.",
    board: "Savitribai Phule Pune University",
    side: "Computer Engineering",
    p: "9.82 CGPA",
  },
  {
    year: "2020 - 2023",
    role: "Diploma",
    institute:
      "Abhinav Education Society College of Engineering and Polytechnic, Wadvadi",
    board: `Maharashtra State Board of Technical Education`,
    side: "Computer Engineering",
    p: "88.97%",
  },
  {
    year: "2019 - 2020",
    role: "SSC",
    institute: "Yashwant Vidyalaya Mavadi K.P Branch High School Pandeshwar.",
    board: "Maharashtra State Board",
    side: "",
    p: "90.00%",
  },
];

export const EXPERIENCE = [
  {
    year: "Jul 2022 - Aug 2022",
    company: "Open Interface Software Solution Pvt. Ltd.",
    domain: "Web Development",
    project: {
      name: "Car Rental System",
      technologies: ["php", "html", "css", "js", "mysql"],
    },
  },
  {
    year: "Oct 2023 - Nov 2023",
    company: "Technohacks",
    domain: "Web Development",
    project: {
      name: "Portfolio",
      technologies: ["reactjs","telwindcss", "html", "css", "js"],
    },
  },
  {
    year: "Feb 2024 - Mar 2024",
    company: "Codesoft",
    domain: "Web Development",
    project: {
      name: "Music Search Web",
      technologies: ["js","html", "css"],
    },
  },
];

export const PROJECTS = [
  {
    title: "Image Search Web",
    image: project1,
    description:
      "A fully functional Image Search website with feature to search many types of images.",
    technologies: ["HTML", "CSS", "JS"],
    viewdemo: `https://ashuthikole2004.github.io/image-search/`,
  },
  {
    title: "Music Search Web",
    image: project2,
    description:
      "A fully functional Music Search website with feature to search many types of Musics, also can dowload the Song",
    technologies: ["HTML", "CSS", "JS"],
    viewdemo: `https://ashuthikole2004.github.io/Music-app/`,
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Telwindcss"],
    viewdemo: `https://portfolio-alpha-one-22.vercel.app/`,
  },
  {
    title: "MKSSS",
    image: project3,
    description:
      "Simple website where you can view Maharshi Karve Shikshan Sanstha College virtually",
    technologies: ["HTML", "CSS"],
    viewdemo: `https://ashuthikole2004.github.io/MaharshiKarve/`,
  },
];

export const CONTACT = {
  address: "A/P Pandeshwar Tal-Purandar Dist-Pune Pin: 412303",
  phoneNo: "+91 9359395693",
  email: "ashwinithikole@gmail.com",
};
