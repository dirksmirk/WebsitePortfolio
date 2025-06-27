import { Github, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Baemingo",
      description:
        "Examples pictures of my designs and implementations made during my internship at Baemingo. ",
      image:
        "https://i.ibb.co/vxSW0ywJ/image.png",
      tags: ["React", "TypeScript", "Tailwindcss", "GraphQL"],
      github: "",
      live: "",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio showcasing creative work with smooth animations, using the skills i've learnt during my first two years of frontend development",
      image:
        "https://i.ibb.co/8npxnDZW/image.png",
      tags: ["React", "Typescript", "Tailwindcss", "Figma"],
      github: "https://github.com/dirksmirk/modern-skill-spark",
      live: "",
    },
        {
      title: "Dispatch",
      description:
        "Our first test at school with working with APIs on an advanced level. This chat app allows users to create accounts, connect to friends and keep conversations",
      image:
        "https://i.ibb.co/PzWNN3hN/bild.png",
      tags: ["React", "Javascript", "Material-UI", "REST-api"],
      github: "https://github.com/dirksmirk/chat",
      live: "",
    },
        {
      title: "Puppycino",
      description:
        "Our first collaborative code project during my time at Jensen. Built only using HTML5 and CSS, this website is very simple in but proof of what we'd learnt so quickly in only 2 months since starting to learn",
      image:
        "https://i.ibb.co/pryZkXWZ/1706218878930.jpg",
      tags: ["HTML", "CSS", "GitHub", "Collaboration"],
      github: "https://github.com/dirksmirk/GruppProjekt",
      live: "",
    },
  ];

  const handleGithubClick = (githubUrl: string) => {
    if (githubUrl) {
      window.open(githubUrl, "_blank");
    }
  };

  const handleLiveDemoClick = (liveUrl: string, projectTitle: string) => {
    if (liveUrl) {
      window.open(liveUrl, "_blank");
    } else {
      // Navigate to project detail page
      const projectSlug = projectTitle.replace(/\s+/g, "-");
      navigate(`/project/${projectSlug}`);
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of recent work that showcases my skills in both
            development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="group-hover:text-blue-600 transition-colors duration-200 text-2xl font-semibold leading-none tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleGithubClick(project.github)}
                    disabled={!project.github}
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input h-9 rounded-md px-3 ${
                      project.github
                        ? "bg-background hover:bg-accent hover:text-accent-foreground cursor-pointer"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    {" "}
                    <Github className="w-4 h-4" />
                    {project.github ? "Code" : "Unavailable"}
                  </button>
                  <button
                    onClick={() =>
                      handleLiveDemoClick(project.live, project.title)
                    }
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    {project.live ? 'Live Demo' : 'View Details'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
