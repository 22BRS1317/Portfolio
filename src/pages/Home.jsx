import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaBlog, FaPaintBrush } from "react-icons/fa";

// 👤 Role rotation list
const roles = [
  "I am a AI & Robotics Enthusiast",
  "I am a Programmer",
  "I am a Full Stack Developer",
  "I am a Drone Simulation Engineer",
  "I am a Tech Explorer 🚀"
];

// 🎨 Background themes
const bgStyles = {
  dark: "bg-gradient-to-br from-black via-slate-900 to-gray-950",
  teal: "bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-950",
  indigo_dusk: "bg-gradient-to-br from-indigo-900 via-sky-900 to-slate-950",
  midnight_plum:"bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950",
  violet: "bg-gradient-to-br from-purple-900 via-fuchsia-900 to-black",
  dusky_orchid:"bg-gradient-to-br from-fuchsia-950 via-violet-900 to-gray-950",
  obsidian_flame:"bg-gradient-to-br from-red-950 via-rose-900 to-black",
  deep_forest: "bg-gradient-to-br from-green-950 via-emerald-900 to-lime-950"
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [bg, setBg] = useState("dark");

  // 🔁 Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 🎨 Cycle theme
  const changeTheme = () => {
    const themes = Object.keys(bgStyles);
    const nextTheme = themes[(themes.indexOf(bg) + 1) % themes.length];
    setBg(nextTheme);
  };

  return (
    <div className={`min-h-screen flex flex-col md:flex-row items-center justify-between p-10 text-white transition-all duration-700 ${bgStyles[bg]}`}>
      {/* Left Side: Text */}
      <div className="flex-1 max-w-2xl space-y-4">
        <motion.h2
          className="text-2xl text-blue-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hi There... 👋
        </motion.h2>

        <motion.h1
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I AM <span className="text-blue-400">CHAKRI THOTAKURA</span>
        </motion.h1>

        <motion.h3
          className="text-2xl text-slate-300"
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {roles[index]}
        </motion.h3>

        <p className="text-slate-300 text-lg mt-4">
          Pursuing my B.Tech degree in Computer Science with a focus on AI and Robotics at VIT Chennai.
        </p>

        <div className="mt-10 bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg text-base leading-relaxed text-slate-100 max-w-4xl">
          <p>
            I’m a Computer Science student at VIT Chennai, specializing in Artificial Intelligence and Robotics (CGPA: 8.9/10), with hands-on experience in full-stack development, autonomous systems, and AI-powered applications.
          </p>
          <p>
            I’ve built drone simulations using ROS, smart IoT lockers with real-time alerts, and scalable web apps using the MERN stack. My tech stack includes Java, Python, C/C++, React, Node.js, MongoDB, TensorFlow, and ROS.
          </p>
          <p>
            Passionate about solving real-world problems through technology, I aim to build intelligent, impactful solutions that improve lives and drive innovation.
          </p>
        </div>

        <p className="text-slate-400 mt-4">
          Intern @ <span className="text-blue-400 font-semibold">Microsoft Azure (AI-900)</span> (2024), MERN Dev @ <span className="text-blue-400 font-semibold">Ethnus</span> (2024) <br />
          Worked on drone simulations, chatbot dev, smart lockers & Ecommerce Website.
        </p>

        {/* 🎨 Theme Button */}
        <div className="mt-6">
          <button
            onClick={changeTheme}
            className="flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500 text-blue-300 hover:bg-blue-600 hover:text-white transition"
          >
            <FaPaintBrush /> Click here to new look
          </button>
        </div>
      </div>

      {/* Right Side: Profile Image */}
      <motion.div
        className="w-80 h-85 mt-10 md:mt-0 md:ml-10 rounded-full border-4 border-blue-500 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/photo1.jpg`}
          alt="Chakri"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Home;
