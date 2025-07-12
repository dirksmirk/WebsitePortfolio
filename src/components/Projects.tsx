import { Github, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  // Remove everything and only split the Baemingo projects into multiple ones, atleast 4. Describe all of the scenarios in full detail and have multiple pitcures going through all of the steps
  // Make sure to describe exactly what was used to build everything
  const projects = [
    {
      title: "Baemingo - Inactivity tracker",
      description:
        "Inactivity tracker for Baemingos Table Service Mode, allowing customers to quickly and easily see and manage inactive tables.",
      image:
        "https://i.ibb.co/5WYJYXfR/434867382-7b4fead6-1929-49f0-aa50-7227da187218.png",
      tags: ["React", "TypeScript", "Tailwindcss", "GraphQL"],
      github: "",
      live: "",
    },
    {
      title: "Baemingo - Voucher UI revamp",
      description:
        "A full revamp and upgrade of the backoffice voucher page, allowing for better readability, error message handling and customer input.",
      image:
        "https://i.ibb.co/20wh0sG6/image.png",
      tags: ["React", "TypeScript", "Tailwindcss", "GraphQL"],
      github: "",
      live: "",
    },
        {
      title: "Baemingo - Printer troubleshooting integration",
      description:
        "Integrated troubleshooting guide in the settings that appears and helps customers that can't find and add their printers.",
      image:
        "https://i.ibb.co/vxNwxW2W/416111263-d9800207-1aee-45ea-ba7d-ba533ea49229.png",
      tags: ["React", "TypeScript", "Tailwindcss", "GraphQL"],
      github: "",
      live: "",
    },
        {
      title: "Baemingo - Express insta cart",
      description:
        "An upgrade to the Baemingo Express POS to instantly add items without additions or options to the cart.",
      image:
        "https://i.ibb.co/TDV0CHJG/IMG-0072.png",
      tags: ["React", "TypeScript", "Tailwindcss", "GraphQL"],
      github: "",
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
      const projectSlug = projectTitle.toLowerCase().replace(/\s+/g, "-");
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
                  {/* Keeping this in here to re-add for any future projects where I can directly link the github */}
{/*                   <button
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
                  </button> */}
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
