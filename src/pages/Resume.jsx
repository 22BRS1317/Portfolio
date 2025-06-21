import resumePDF from '../assets/Chakri_Resume.pdf';

const Resume = () => {
  return (
    <div className="min-h-screen p-10 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Resume</h1>
      <iframe
        src={resumePDF}
        className="w-full max-w-4xl h-[80vh] rounded-lg shadow-lg"
        title="Chakri Resume"
      />
      <a
        href={resumePDF}
        download="Chakri_Resume.pdf"
        className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white"
      >
        📥 Download Resume
      </a>
    </div>
  );
};

export default Resume;
