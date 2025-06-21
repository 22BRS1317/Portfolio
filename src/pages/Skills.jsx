import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3, FaJs, FaGitAlt, FaDatabase,
  FaProjectDiagram
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiWordpress, SiCplusplus, SiSqlite, SiR,
  SiPycharm, SiAnaconda, SiEclipseide, SiMysql, SiVisualstudio,
  SiStreamlit
} from "react-icons/si";

// 🧩 Skill categories
const skillGroups = {
  "Languages": [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "SQL", icon: <SiSqlite /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "R", icon: <SiR /> },
    { name: "Open MPI", icon: <span className="text-3xl font-bold">MPI</span> }
  ],
  "Frameworks": [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "WordPress", icon: <SiWordpress /> },
    {name: "Streamlit",icon:<SiStreamlit/>}
  ],
  "Dev Tools & Databases": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "VS Code", icon: <SiVisualstudio /> },
    { name: "PyCharm", icon: <SiPycharm /> },
    { name: "Anaconda", icon: <SiAnaconda /> },
    { name: "Eclipse", icon: <SiEclipseide /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Database", icon: <FaDatabase /> }
  ]
};

// 🎡 Scrolling Carousel Component
const SkillCarousel = ({ skills }) => (
  <div className="overflow-hidden w-full mb-8">
    <motion.div
      className="flex gap-12 py-4"
      animate={{ x: ["100%", "-100%"] }}
      transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
    >
      {[...skills, ...skills].map((skill, i) => (
        <div key={i} className="flex flex-col items-center w-28 text-blue-400 hover:text-blue-200 transition-all">
          <div className="text-5xl">{skill.icon}</div>
          <div className="text-base mt-2 text-white text-center font-semibold">{skill.name}</div>
        </div>
      ))}
    </motion.div>
  </div>
);

// 🚀 Main Skills Page
const Skills = () => {
  return (
    <div className="min-h-screen p-10 text-white bg-transparent flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-12">Skills & Tools</h1>

      {Object.entries(skillGroups).map(([groupName, skills], idx) => (
        <div key={idx} className="w-full max-w-screen-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-l-4 border-blue-500 pl-4">{groupName}</h2>
          <SkillCarousel skills={skills} />
        </div>
      ))}
    </div>
  );
};

export default Skills;
