import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome, FaUser, FaAward, FaProjectDiagram,
  FaCode, FaChartLine, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes,FaPhone,FaFileAlt
} from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaUser /> },
  { name: "Achievements", path: "/achievements", icon: <FaAward /> },
  { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  { name: "Tech Stack", path: "/skills", icon: <FaCode /> },
  { name: "Resume", path: "/resume", icon: <FaFileAlt /> },
  { name: "Experience", path: "/experience", icon: <FaChartLine /> },
  { name: "Contact", path: "/contact", icon: <FaPhone /> },
];

const socialIcons = [
  { icon: <FaEnvelope />, link: "mailto:chakri.thotakura2022@vitstudent.ac.in" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/profile.php?id=100072242708076" },
  { icon: <FaGithub />, link: "https://github.com/22BRS1317" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/___chakri___/" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/chakri-thotakura-321b87277/" }  
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu toggle */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-full w-[260px] bg-gradient-to-b from-black to-gray-900 p-6 text-white shadow-xl z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:left-0 md:rounded-tr-3xl md:rounded-br-3xl`}
      >
        <div>
          <h1 className="text-xl font-bold text-white mb-8">
            <span className="text-blue-500">&lt;</span> CHAKRI <span className="text-blue-500">/&gt;</span>
          </h1>
          <ul className="space-y-4">
            {navItems.map(({ name, path, icon }) => (
              <li key={name}>
                <Link
                  to={path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
                    location.pathname === path
                      ? "bg-blue-500 text-white"
                      : "hover:bg-white/10 text-slate-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-blue-400 text-lg">{icon}</span>
                  <span className="text-sm font-semibold">{name.toUpperCase()}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-10 text-blue-400 text-lg">
          {socialIcons.map(({ icon, link }, i) => (
            <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
