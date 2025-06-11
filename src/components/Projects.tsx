
import { Github, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with React, TypeScript, and Stripe integration",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tags: ["React", "TypeScript", "Tailwind", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      tags: ["React", "Firebase", "Material-UI", "PWA"],
      github: "#",
      live: "#",
    },
    {
      title: "Design System",
      description: "Comprehensive design system with reusable components and documentation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      tags: ["Figma", "Storybook", "React", "Design Tokens"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio showcasing creative work with smooth animations",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      tags: ["Next.js", "Framer Motion", "GSAP", "Contentful"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of recent work that showcases my skills in both development and design.
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
                <h3 className="text-xl group-hover:text-blue-600 transition-colors duration-200 text-2xl font-semibold leading-none tracking-tight">
                  {project.title}
                </h3>
                <p className="text-base text-sm text-muted-foreground">
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
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                    <ArrowUpRight className="w-4 h-4" />
                    Live Demo
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
