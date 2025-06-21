import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot",
      tech: ["HTML", "JavaScript", "NLP"],
      desc: "Interactive AI-powered chatbot with real-time query resolution and NLP-based intent recognition.",
      link: "https://22brs1317.github.io/chatbot"
    },
    {
      title: "Resume Job Role Classifier",
      tech: ["Python", "Machine Learning"],
      desc: "A Transformer-based text classification model trained to automatically identify the job role category from a given resume using the Hugging Face ecosystem.",
      link: "https://huggingface.co/srivihari/resume-job-role-classifier"
    },
    {
      title: "E-Commerce Website",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      desc: "Secure and scalable online store with full shopping cart, authentication, and payment integration.",
      link: "https://github.com/22BRS1317/ecom_website"
    },
    {
      title: "Intern-Task-Timeline-Tracker-streamlit",
      tech: ["Python", "Streamlit", "SMTP"],
      desc: "A Streamlit-powered task timeline tracker that lets interns log, visualize, and monitor their assignments across a dynamic timeline interface.",
      link: "https://intern-task-timeline-tracker-app.streamlit.app"
    },
    {
      title: "Delivery Drone Simulation",
      tech: ["ROS Melodic", "Gazebo"],
      desc: "Simulated autonomous drone missions with obstacle avoidance, path planning, and real-time payload navigation.",
      link: "#"
    },
    {
      title: "Fitness Tracker",
      tech: ["React", "MongoDB", "Express"],
      desc: "Full-stack fitness app with user login, workout tracking, and progress dashboards.",
      link: "https://github.com/22BRS1317/fitness-mern"
    },
    {
      title: "Smart Locker System",
      tech: ["IoT", "Telegram API", "Microcontroller"],
      desc: "Locker system with sensor-triggered notifications via Telegram for the users.",
      link: "#"
    },
    {
      title: "Message Efficiency in Distributed Computing",
      tech: ["Open MPI", "Parallel Computing"],
      desc: "40% speed improvement in message processing across 50+ nodes using optimized Open MPI strategies.",
      link: "https://github.com/22BRS1317/Solving_Message_Sizing_issue_in_Open_MPI"
    },
    {
      title: "Bone Fracture Detection Using CNN",
      tech: ["Python", "CNN", "Machine Learning"],
      desc: "X-ray classifier with 30% reduced diagnosis time and real-time UI predictions.",
      link: "#"
    },
    {
      title: "Home Environment Monitoring System",
      tech: ["IoT", "Microcontroller", "HTTP Server"],
      desc: "Sensor-based real-time environment tracker for temperature, humidity, and air quality.",
      link: "https://youtu.be/2-rJgrKYJuE?feature=shared"
    },
    {
      title: "Maze Solving Robot (Nav Bot)",
      tech: ["Arduino", "Raspberry Pi", "PID"],
      desc: "Autonomous robot solving mazes 40% faster using PID control and sensor integration.",
      link: "#"
    },
    {
      title: "Html Code Editor",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "A simple online HTML code editor with dedicated sections for HTML, CSS, and JavaScript.",
      link: "https://22brs1317.github.io/HTML-Code-Editor/"
    }
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
