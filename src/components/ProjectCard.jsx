const ProjectCard = ({ title, tech = [], desc, link, linkType, image }) => {
  return (
    <div className="flex flex-col justify-between h-[480px] p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300">
      
      {/* Larger Image */}
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `${process.env.PUBLIC_URL}/project/placeholder.jpg`;
          }}
        />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="text-xs font-medium px-3 py-1 bg-white/20 text-white rounded-full backdrop-blur-sm"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
        {desc}
      </p>

      {/* LinkType or Link */}
      <div className="mt-auto">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition underline font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 010 5.656m-3.656-5.656a4 4 0 015.656 0m-7.778 7.778a4 4 0 015.656-5.656m-1.414 1.414a2 2 0 112.828 2.828M15 12a3 3 0 00-6 0"
              />
            </svg>
            {linkType}
          </a>
        ) : (
          <span className="text-white/70 text-sm inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 010 5.656m-3.656-5.656a4 4 0 015.656 0m-7.778 7.778a4 4 0 015.656-5.656m-1.414 1.414a2 2 0 112.828 2.828M15 12a3 3 0 00-6 0"
              />
            </svg>
            {linkType}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
