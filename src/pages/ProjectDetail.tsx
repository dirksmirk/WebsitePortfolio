import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code } from "lucide-react";
import { useState } from "react";
import ImageModal from "../components/ImageModal";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock project data - in a real app, this would come from an API or database
  const projectData: Record<string, any> = {
    "e-commerce-platform": {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
      fullDescription: "This e-commerce platform was built to showcase modern web development practices. It includes a responsive design that works seamlessly across all devices, secure payment processing through Stripe, real-time inventory management, and a comprehensive admin panel for managing products, orders, and customers.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ],
      tags: ["React", "TypeScript", "Tailwind", "Stripe"],
      github: "https://github.com/example/ecommerce",
      features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Processing", "Admin Dashboard", "Responsive Design"],
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Stripe API", "Node.js", "MongoDB"],
      timeline: "3 months",
      team: "Solo Project"
    },
    "task-management-app": {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team features.",
      fullDescription: "This task management app enables teams to collaborate effectively with real-time updates, task assignments, progress tracking, and team communication features. Built as a Progressive Web App for optimal mobile experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
      ],
      tags: ["React", "Firebase", "Material-UI", "PWA"],
      github: "",
      features: ["Real-time Collaboration", "Task Assignment", "Progress Tracking", "Team Chat", "File Sharing", "Mobile PWA"],
      technologies: ["React", "Firebase", "Material-UI", "PWA", "WebSocket", "Cloud Functions"],
      timeline: "4 months",
      team: "2 Developers"
    },
    "design-system": {
      title: "Design System",
      description: "A comprehensive design system with reusable components and documentation.",
      fullDescription: "A complete design system that provides consistent UI components, design tokens, and comprehensive documentation. Built with Storybook for component development and testing.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop"
      ],
      tags: ["Figma", "Storybook", "React", "Design Tokens"],
      github: "https://github.com/example/design-system",
      features: ["Component Library", "Design Tokens", "Documentation", "Accessibility", "Theming", "Icon System"],
      technologies: ["React", "Storybook", "Figma", "TypeScript", "CSS Variables", "Design Tokens"],
      timeline: "6 months",
      team: "3 Designers + 2 Developers"
    },
    "portfolio-website": {
      title: "Portfolio Website",
      description: "A responsive portfolio showcasing creative work with smooth animations.",
      fullDescription: "A modern portfolio website featuring smooth animations, responsive design, and dynamic content management. Built with performance and accessibility in mind.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
      ],
      tags: ["Next.js", "Framer Motion", "GSAP", "Contentful"],
      github: "",
      features: ["Smooth Animations", "Responsive Design", "CMS Integration", "SEO Optimized", "Performance Focused", "Accessibility"],
      technologies: ["Next.js", "Framer Motion", "GSAP", "Contentful", "TypeScript", "Tailwind CSS"],
      timeline: "2 months",
      team: "Solo Project"
    }
  };

  const project = projectData[slug || ""];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNavigateImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">Project Not Found</h1>
          <p className="text-muted-foreground">The project you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate("/")} 
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <button 
                  onClick={() => window.open(project.github, '_blank')}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </button>
              )}
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6">
                <ExternalLink className="w-4 h-4" />
                Contact About Project
              </button>
            </div>
          </div>

          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
              <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature: string) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((image: string, index: number) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-105"
                    onClick={() => handleImageClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card">
              <h3 className="text-lg font-semibold mb-4">Project Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Timeline</p>
                    <p className="text-sm text-muted-foreground">{project.timeline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Team</p>
                    <p className="text-sm text-muted-foreground">{project.team}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Technologies</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {project.technologies.map((tech: string) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        images={project.images}
        currentIndex={currentImageIndex}
        onNavigate={handleNavigateImage}
        projectTitle={project.title}
      />
    </div>
  );
};

export default ProjectDetail;
