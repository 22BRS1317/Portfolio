import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot",
      tech: ["HTML", "JavaScript", "NLP"],
      desc: "Interactive AI-powered chatbot with real-time query resolution and NLP-based intent recognition.",
      link: "https://22brs1317.github.io/chatbot",
      linkType: "Live Demo",
      image: `${process.env.PUBLIC_URL}/project/ai-chatbot.jpg`,
    },
    {
      title: "Resume Job Role Classifier",
      tech: ["Python", "Machine Learning"],
      desc: "A Transformer-based text classification model trained to identify job roles from resumes.",
      link: "https://huggingface.co/srivihari/resume-job-role-classifier",
      linkType: "Hugging Face",
      image: `${process.env.PUBLIC_URL}/project/resume-classifier.jpg`,
    },
    {
      title: "E-Commerce Website",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      desc: "Secure and scalable online store with full shopping cart, authentication, and payment integration.",
      link: "https://github.com/22BRS1317/ecom_website",
      linkType: "GitHub",
      image: `${process.env.PUBLIC_URL}/project/ecom.png`,
    },
    {
      title: "Intern-Task-Timeline-Tracker",
      tech: ["Python", "Streamlit", "SMTP"],
      desc: "Streamlit-based tracker that logs, visualizes, and monitors intern assignments dynamically.",
      link: "https://intern-task-timeline-tracker-app.streamlit.app",
      linkType: "Live Demo",
      image: `${process.env.PUBLIC_URL}/project/intern.jpg`,
    },
    {
      title: "Delivery Drone Simulation",
      tech: ["ROS Melodic", "Gazebo"],
      desc: "Simulated autonomous drone missions with path planning and real-time payload navigation.",
      linkType: "Simulation",
      image: `${process.env.PUBLIC_URL}/project/delivery-drone.jpg`,
    },
    {
      title: "Fitness Tracker",
      tech: ["React", "MongoDB", "Express"],
      desc: "Full-stack fitness app with user login, workout tracking, and progress dashboards.",
      link: "https://github.com/22BRS1317/fitness-mern",
      linkType: "GitHub",
      image: `${process.env.PUBLIC_URL}/project/fitness.png`,
    },
    {
      title: "Smart Locker System",
      tech: ["IoT", "Telegram API", "Microcontroller"],
      desc: "Locker system with sensor-triggered notifications via Telegram for the users.",
      linkType: "Hardware",
      image: `${process.env.PUBLIC_URL}/project/smart.jpg`,
    },
    {
      title: "Message Efficiency in Distributed Computing",
      tech: ["Open MPI", "Parallel Computing"],
      desc: "40% speed improvement in message processing across 50+ nodes using optimized Open MPI strategies.",
      link: "https://github.com/22BRS1317/Solving_Message_Sizing_issue_in_Open_MPI",
      linkType: "GitHub",
      image: `${process.env.PUBLIC_URL}/project/message.jpg`,
    },
    {
      title: "Bone Fracture Detection",
      tech: ["Python", "CNN", "Machine Learning"],
      desc: "X-ray classifier with 30% reduced diagnosis time and real-time UI predictions.",
      linkType: "Model",
      image: `${process.env.PUBLIC_URL}/project/bone.png`,
    },
    {
      title: "Home Environment Monitoring System",
      tech: ["IoT", "Microcontroller", "HTTP Server"],
      desc: "Sensor-based real-time environment tracker for temperature, humidity, and air quality.",
      link: "https://youtu.be/2-rJgrKYJuE?feature=shared",
      linkType: "YouTube",
      image: `${process.env.PUBLIC_URL}/project/home.jpg`,
    },
    {
      title: "Maze Solving Robot (Nav Bot)",
      tech: ["Arduino", "Raspberry Pi", "PID"],
      desc: "Autonomous robot solving mazes 40% faster using PID control and sensor integration.",
      linkType: "Hardware",
      image: `${process.env.PUBLIC_URL}/project/maze.jpg`,
    },
    {
      title: "Html Code Editor",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "A simple online HTML code editor with dedicated sections for HTML, CSS, and JavaScript.",
      link: "https://22brs1317.github.io/HTML-Code-Editor/",
      linkType: "Live Demo",
      image: `${process.env.PUBLIC_URL}/project/code.jpg`,
    },
  ];

  return (
    <div className="min-h-screen p-10 text-white bg-transparent">
      <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-white/20 rounded-xl"
          >
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
