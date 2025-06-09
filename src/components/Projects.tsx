
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
            <Card 
              key={project.title} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
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
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
