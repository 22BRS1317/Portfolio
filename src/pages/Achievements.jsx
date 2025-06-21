import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const achievements = [
  {
    title: "AI-900 Azure Fundamentals",
    image: `${process.env.PUBLIC_URL}/certs/Ai-900.jpg`,
    issuer: "Microsoft",
  },
  {
    title: "MERN Stack Internship",
    image: `${process.env.PUBLIC_URL}/certs/mern.jpg`,
    issuer: "Ethnus",
  },
  {
    title: "Azure AI Fundamentals Badge",
    image: `${process.env.PUBLIC_URL}/certs/micro-badge.jpg`,
    issuer: "Microsoft",
  },
  {
    title:"Leetcode Oct-2024 Badge",
    image:`${process.env.PUBLIC_URL}/certs/2024-10.gif`,
    issuer:"Leetcode",    
  },
  {
    title:"Leetcode Nov-2024 Badge",
    image:`${process.env.PUBLIC_URL}/certs/2024-11.gif`,
    issuer:"Leetcode",    
  },
  {
    title:"Leetcode Dec-2024 Badge",
    image:`${process.env.PUBLIC_URL}/certs/2024-12.gif`,
    issuer:"Leetcode",    
  },
  {
    title:"Leetcode 50-Days Badge",
    image:`${process.env.PUBLIC_URL}/certs/2024-50.gif`,
    issuer:"Leetcode",    
  },{
    title:"Leetcode 100-Days Badge",
    image:`${process.env.PUBLIC_URL}/certs/2024-100-new.gif`,
    issuer:"Leetcode",    
  },
  {
    title:"Wild Life Ecology",
    image:`${process.env.PUBLIC_URL}/certs/Wild.jpg`,
    issuer:"Nptel(Swayam)",
  },
  {
    title:"Hacker's Horizon",
    image:`${process.env.PUBLIC_URL}/certs/Hacker's Horizon.jpeg`,
    issuer:"Linux Club - VIT Chennai",
  },
  {
    title:"Mathematics Hackathon",
    image:`${process.env.PUBLIC_URL}/certs/Mathematics_Hackathon.jpeg`,
    issuer:"Mathematics Club - VIT Chennai",
  },
  {
    title:"Brains & Bots: The Human-AI Collaboration",
    image:`${process.env.PUBLIC_URL}/certs/Brains_and_bots.jpeg`,
    issuer:"SCOPE - VIT Chennai",
  },
  {
    title:"Technical Treasure Hunt",
    image:`${process.env.PUBLIC_URL}/certs/Tech_Treasur_Hunt.jpeg`,
    issuer:"SCOPE - VIT Chennai",
  },

];

const Achievements = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen p-10 text-white bg-transparent relative">
      <h1 className="text-4xl font-bold text-center mb-10">
        Achievements & Certifications
      </h1>

      {/* Certificate Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelected(item)}
            className="cursor-pointer relative group rounded-xl overflow-hidden shadow-lg border border-blue-500 bg-white/10 backdrop-blur-lg"
          >
            <img src={item.image} alt={item.title} className="w-full h-[200px] object-contain p-4 group-hover:scale-105 transition-transform duration-300"/>

            <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm">{item.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative bg-white rounded-xl overflow-hidden max-w-3xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent close on inner click
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-2 right-2 text-black text-xl font-bold bg-white/90 rounded-full px-3 py-1 hover:bg-red-500 hover:text-white transition"
              >
                ✕
              </button>
              <img src={selected.image} alt={selected.title} className="w-full max-h-[80vh] object-contain" />
              <div className="p-4 text-black text-center">
                <h3 className="text-xl font-bold">{selected.title}</h3>
                <p className="text-sm text-gray-600">{selected.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;
