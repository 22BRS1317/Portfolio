const ProjectCard = ({ title, desc, tech, link }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md h-full">
      <h2 className="text-2xl font-semibold text-blue-500">{title}</h2>
      <p className="text-gray-300 mt-2">{desc}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t, i) => (
          <span key={i} className="bg-blue-600/30 text-xs px-2 py-1 rounded text-white">
            {t}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-blue-400 underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
