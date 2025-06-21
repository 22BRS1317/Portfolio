
const experiences = [
  {
  role: "Azure AI-900 Intern",
  company: "EtrainIndia",
  duration: "June 2024 – Aug 2024",
  bullets: [
    "Gained hands-on experience with Microsoft Azure AI services, completing the AI-900 certification while applying theoretical knowledge to real-world tasks.",
    "Developed intelligent solutions that reduced customer query response time by 30% through automation and integration of Azure Bot Services and QnA Maker.",
    "Conducted user feedback analysis and implemented improvements that led to a 25% increase in overall product satisfaction and usability.",
    "Trained and fine-tuned classification models using Azure Machine Learning Studio, boosting prediction accuracy by 15% through hyperparameter tuning and data preprocessing.",
    "Collaborated with mentors and cross-functional teams to build scalable and ethical AI systems aligned with business goals and responsible AI principles."
  ]
  },
  {
  role: "MERN Full Stack Developer",
  company: "Ethnus",
  duration: "June 2024 – July 2024",
  bullets: [
    "Developed dynamic and responsive full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), delivering seamless user experiences for over 20,000 monthly users.",
    "Optimized front-end React components and back-end API performance, resulting in a 20% improvement in load time and overall application responsiveness.",
    "Engineered and deployed scalable, schema-driven services with MongoDB to handle complex data operations with high availability.",
    "Implemented RESTful APIs and integrated them with React frontends, enabling smooth data flow and user interaction across the application.",
    "Collaborated with cross-functional teams in an Agile environment to gather requirements, perform code reviews, and deliver production-ready features."
  ]
  },
  {
    role:"Tech-Lead Intern",
    company:"Viswam.AI (joint initiative by Swecha & IIITH)",
    duration: "May 2025 – July 2025",
    bullets: [
      "Led development of AI pipelines using Python, Natural Language Processing (NLP), and Transformer architectures",
      "Guided and participated in training and fine-tuning state-of-the-art AI models.",
      "Worked on dataset curation, annotation, and evaluation for low-resource Indic languages.",
      "Collaborated with peers to design community-centric AI solutions supporting linguistic diversity.",
      "Contributed to the deployment of scalable AI systems aimed at creating real-world societal impact."
    ]
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen p-10 text-white bg-transparent">
      <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/20"
          >
            <h2 className="text-2xl font-semibold">{exp.role}</h2>
            <p className="text-blue-400">
              {exp.company} | <span className="text-gray-300">{exp.duration}</span>
            </p>
            <ul className="list-disc mt-4 ml-5 space-y-1 text-gray-300">
              {exp.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Experience;
