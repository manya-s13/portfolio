const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Projects",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

// const counterItems = [
//   { value: 15, suffix: "+", label: "Years of Experience" },
//   { value: 200, suffix: "+", label: "Satisfied Clients" },
//   { value: 108, suffix: "+", label: "Completed Projects" },
//   { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];

const logoIconsList = [
  {
    imgPath: "/images/logos/cpp.png",
  },
  {
    imgPath: "/images/logos/Figma.png",
  },
  {
    imgPath: "/images/logos/Java.png",
  },
  {
    imgPath: "/images/logos/Linux.png",
  },
  {
    imgPath: "/images/logos/NGINX.png",
  },
  {
    imgPath: "/images/logos/AWS.png",
  },
  {
    imgPath: "/images/logos/Docker.png",
  },
  {
    imgPath: "/images/logos/TypeScript.png",
  },
  {
    imgPath: "/images/logos/react.png",
  },
  {
    imgPath: "/images/logos/Node.js.png",
  },
  {
    imgPath: "/images/logos/PostgresSQL.png",
  },
  {
    imgPath: "/images/logos/MongoDB.png",
  },
  {
    imgPath: "/images/logos/JavaScript.png",
  },
  {
    imgPath: "/images/logos/Python.png",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "NextJS Developer",
    imgPath: "/images/logos/TypeScript.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Devops",
    imgPath: "/images/logos/Docker.png",
  },
  {
    name: "FullStack Developer",
    imgPath: "/images/logos/TypeScript.svg",
  },
];

const techStackIcons = [
  {
    name: "FullStack Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "React Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "NextJS Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Devops",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  
];

const expCards = [
  {
    review: "Tech Stack: Next.js, Appwrite, Tailwind CSS , TypeScript, Shadcn",
    // imgPath: "/images/exp1.png",
    // logoPath: "/images/logo1.png",
    title: "CloudDocs",
    date: "Feb 2025",
    responsibilities: [
      "Developed a full-stack file-sharing and storage application using Next.js, enabling users to upload, share, rename, and delete files with ease.",
      "Integrated Appwrite as the backend-as-a-service solution for real-time database updates and seamless file management operations.",
      "Enabled file permissions, allowing users to securely share files with specific individuals or groups.",
    ]
    },
  {
    review: "Tech Stack: React JS, Node.js, MongoDB, Express.js, Stripe API",
    // imgPath: "/images/exp2.png",
    // logoPath: "/images/logo2.png",
    title: "Blogify",
    date: "November 2024",
    responsibilities: [
      "Designed and developed a full-stack blog platform using MERN stack with responsive UI and secure user authentication with OTP verification.",
      "Integrated Stripe for seamless payment processing to enable premium blog features and subscription plans.",
      "Built RESTful APIs for user management and blog operations, ensuring scalability, efficiency, and data security."
    ],
  },
  {
    review: "Tech Stack: React JS, Node.js, Express.js, MongoDB, NewsAPI",
    // imgPath: "/images/exp3.png",
    // logoPath: "/images/logo3.png",
    title: "News Aggregator",
    date: "March 2025",
    responsibilities: [
      "Build a news platform that curates articles based on user interests, reading habits, and trending topics,featuring real-time updates.",
      "Integrated third-party APIs (NewsAPI) to fetch, filter, and display live news articles across various categories such as technology, sports, and entertainment.",
      "Enabled user authentication with JWT and developed personalized dashboards to allow users to save articles, set preferences, and view their reading history.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/Docker.png",
  },
  {
    name: "logo2",
    imgPath: "/images/Node.js.png",
  },
  {
    name: "logo3",
    imgPath: "/images/react.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    sociallink: "https://github.com/manya-s13"
  },
  {
    name: "x",
    imgPath: "/images/x.png",
    sociallink: "https://x.com/cinamonn_girll"
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    sociallink: "https://linkedin.com/in/manyas13"
  },
];

export {
  words,
  logoIconsList,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  expCards,
  navLinks,
};
