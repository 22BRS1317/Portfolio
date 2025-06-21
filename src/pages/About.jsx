import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Rotating photos
const photoList = [
  `${process.env.PUBLIC_URL}/images/photo1.jpg`,
  `${process.env.PUBLIC_URL}/images/photo2.jpg`,
  `${process.env.PUBLIC_URL}/images/photo3.jpg`,
];

// Education cards
const education = [
  {
    title: "B.Tech - Computer Science & Engineering",
    place: "VIT Chennai",
    period: "2022 – 2026",
    logo: `${process.env.PUBLIC_URL}/logos/vit.png`,
    desc: "Specialized in AI & Robotics with a CGPA of 8.86/10.",
  },
  {
    title: "Intermediate - MPC",
    place: "Tirulama Junior Kalsala",
    period: "2020 - 2022",
    logo: `${process.env.PUBLIC_URL}/logos/tjk.png`,
    desc: "Scored 83.6% in MPC"
  },
  {
    title: "SSC - Secondary School Certificate",
    place: "Tirulama EM High School",
    period: "2019 - 2020",
    logo: `${process.env.PUBLIC_URL}/logos/tjk.png`,
    desc: "Scored 10/10 CGPA in SSC",
  }
];

// Experience cards
const experience = [
  {
    title: "Summer of AI",
    role: "Tech Lead Intern",
    place: "Viswam.AI (joint initiative by Swecha & IIITH)",
    period: "May 2025 - ongoing",
    logo: `${process.env.PUBLIC_URL}/logos/Viswam.jpeg`,
    desc: "Part of Free Software Movement of India",
  },
  {
    title: "AI-900 Intern",
    role: "Intern",
    place: "Microsoft Azure – EtrainIndia",
    period: "June 2024 – Aug 2024",
    logo: `${process.env.PUBLIC_URL}/logos/azure.jpg`,
    desc: "Worked on intelligent solutions and Azure fundamentals.",
  },
  {
    title: "MERN Stack Intern",
    role: "Intern",
    place: "Ethnus",
    period: "June 2024 - July 2024",
    logo: `${process.env.PUBLIC_URL}/logos/Ethnus.png`,
    desc: "Built full-stack web apps using MongoDB, Express, React, and Node.",
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photoList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen px-6 md:px-16 py-10 text-white">
      <h1 className="text-5xl font-bold text-center mb-12">About Me</h1>

      {/* Image + Bio + Personal Info */}
      <div className="flex flex-col lg:flex-row items-start gap-10 mb-14">
        {/* Profile Photo */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-[320px] h-[420px] lg:w-[350px] lg:h-[460px] rounded-3xl overflow-hidden border-4 border-blue-500 shadow-2xl">
            <motion.img
              key={photoList[index]}
              src={photoList[index]}
              alt="Chakri"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Personal Info Block */}
          <div className="w-full bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-sm sm:text-base">
            <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">Personal Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-slate-200">
              <p><strong>Age:</strong> 20</p>
              <p><strong>Gender:</strong> Male</p>
              <p><strong>Languages:</strong> English, Telugu</p>
              <p><strong>DOB:</strong> July 11, 2025</p>
              <p><strong>Work:</strong> Student</p>
              <p><strong>Email:</strong> chakri.thotakura2022@vitstudent.ac.in</p>
              <p><strong>Instagram:</strong> <a href="https://instagram.com/___chakri___" target="_blank" className="text-blue-300 hover:underline">@___chakri___</a></p>
              <p><strong>Country:</strong> India</p>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <motion.div
          className="flex-1 bg-white/10 backdrop-blur-lg rounded-xl p-8 text-lg leading-relaxed shadow-lg hover:shadow-blue-500/50 transition duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-4 text-center">Bio</h3>
          <p>
            I'm <span className="text-blue-300 font-semibold">Chakri Thotakura</span>, a Computer Science student at <strong>VIT Chennai</strong>, specializing in <strong>Artificial Intelligence and Robotics</strong>, with a <strong>CGPA of 8.9/10</strong>.
          </p>
          <br />
          <p>
            Passionate about building intelligent systems, I focus on AI, Robotics, and Full Stack Development, always eager to explore new technologies and approaches.
          </p>
          <br />
          <p>
            I've engineered drone simulations (ROS, Gazebo), smart IoT lockers with real-time alerts, AI-powered chatbots, and scalable full-stack web platforms (MERN).
          </p>
          <br />
          <p>
            My technical stack includes Java, Python, C/C++, JavaScript, React, Node.js, MongoDB, TensorFlow, PyTorch, ROS, and IoT systems.
          </p>
          <br />
          <p>
            I thrive on solving real-world problems—whether it's healthcare AI, distributed computing, or smart automation—and I enjoy collaborating in agile teams to deliver impactful solutions.
          </p>
        </motion.div>
      </div>

      {/* Education */}
      <h2 className="text-3xl font-bold text-blue-400 mb-4">🎓 Education</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 hover:bg-white/20 rounded-xl p-6 shadow-lg transition-all duration-300 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={edu.logo} alt={edu.title} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-semibold">{edu.title}</h3>
                <p className="text-sm text-gray-300">{edu.period}</p>
              </div>
            </div>
            <p className="text-gray-200">{edu.place}</p>
            <p className="text-sm mt-2">{edu.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Experience */}
      <h2 className="text-3xl font-bold text-blue-400 mb-4">💼 Experience</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 hover:bg-white/20 rounded-xl p-6 shadow-lg transition-all duration-300 backdrop-blur-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={exp.logo} alt={exp.title} className="w-12 h-12 object-contain" />
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-300">{exp.period}</p>
                <p className="text-sm text-gray-300">{exp.role}</p>
              </div>
            </div>
            <p className="text-gray-200">{exp.place}</p>
            <p className="text-sm mt-2">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
