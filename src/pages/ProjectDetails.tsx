import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  Users,
  Code,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import ImageModal from "@/components/modal";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Mock project data - in a real app, this would come from an API or database
  const projectData: Record<string, any> = {
    // ALMOST DONE
    "baemingo": {
      title: "Baemingo",
      description:
        "A modern POS solution for the restaurant",
      fullDescription:
        "Baemingo creates a modern Point of Sale solution for all kinds of customer needs. With my knowledge of React, and learning Typescript and GraphQL during my time there, I was able to help craft even better customer experiences during my internship at the company. \n My earlier years working as support & Onboarding helped a lot, as I came in with prior knowledge of the tool and managed to accomplish an array of tasks.",
      image:
        "https://i.ibb.co/vxSW0ywJ/image.png",
      images: [
        "https://i.ibb.co/5WYJYXfR/434867382-7b4fead6-1929-49f0-aa50-7227da187218.png",
        "https://i.ibb.co/vxNwxW2W/416111263-d9800207-1aee-45ea-ba7d-ba533ea49229.png",
        "https://i.ibb.co/fd950NSF/Untitled.jpg",
        "https://i.ibb.co/H9VxzQK/Untitled.jpg",
        "https://i.ibb.co/20wh0sG6/image.png"
      ],
      tags: ["React", "TypeScript", "Tailwind", "GraphQL", "POS"],
      github: "",
      link: "https://baemingo.com/sv-se",
      features: [
        "Full UI upgrade for Backoffice voucher list, aswell as upgraded integration with the API to allow customers to try and fix failed vouchers",
        "Search bar upgrades in the Backoffice",
        "Integrated and created a troubleshooting guide for customers unable to find and add their printers",
        "Created a inactivity tracker for table service, where inactive tables are marked if they've been inactive over 15 minutes",
        "Items without any additions now get added instantly on Express screens",
        "Lots of bug fixes to things like incorrect dates showing in the dashboard, text colors, modals not showing and more",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GrapghQL",
        "Node.js",
        "Vercel",
      ],
      timeline: "6 months",
      team: "Small, 5-7 people",
    },
    // NOT DONE
    "dispatch": {
      title: "Dispatch - Chat app",
      description:
        "A minimalistic chat website built for simple use and access",
      fullDescription:
        "My first API project, a simple chat website with a focus on minimalism. The idea was to make it as simple as possible to be able to chat and dispatch a message to someone else. The API used for the project is no longer available, so i've inserted mockdata into the project instead",
      image:
        "https://i.ibb.co/PzWNN3hN/bild.png",
      images: [
        "https://i.ibb.co/PzWNN3hN/bild.png",
        "https://i.ibb.co/0bx37hY/Namnl-s.jpg",
        "https://i.ibb.co/gbYGKTjQ/Untitled.jpg",
        "https://i.ibb.co/HpqGDqSQ/Untitled.jpg",
      ],
      tags: ["React", "Firebase", "Material-UI", "PWA"],
      github: "https://github.com/dirksmirk/chat",
      link: "https://dispatchchat.netlify.app/",
      features: [
        "Encryption of user credentials during registration and login",
        "Dark mode theme toggler",
        "Profile editing, to change name, email and profile picture",
        "Chat with multiple different users at once",
      ],
      technologies: [
        "React",
        "Javascript",
        "Material-UI",
        "REST api",
        "Netlify",
        "Encryption",
      ],
      timeline: "2 months",
      team: "Solo project",
    },
    // NOT DONE
    "puppycino": {
      title: "Design System",
      description:
        "Made up website for a dog cafe.",
      fullDescription:
        "Our very first collaborative and larger scale project at my time at Jensen, started and finished right around the beginning of our time at school. Built using only HTML and CSS, with design planning including mockups and wireframes to plan for a proper design",
      image:
        "https://i.ibb.co/pryZkXWZ/1706218878930.jpg",
      // ADD MORE PICTURES
      images: [
        "https://i.ibb.co/pryZkXWZ/1706218878930.jpg",
      ],
      tags: ["Figma", "Storybook", "React", "Design Tokens"],
      github: "https://github.com/dirksmirk/Puppycino",
      link: "",
      // FIX
      features: [
        "Component Library",
        "Design Tokens",
        "Documentation",
        "Accessibility",
        "Theming",
        "Icon System",
      ],
      technologies: [
        "HTML5",
        "CSS",
        "GitHub",
        "Design planning",
        "Mockup/Wireframe",
        "Realtime Colors",
      ],
      timeline: "1 month",
      team: "Small, 5 people",
    },
    "portfolio-website": {
      title: "Portfolio Website",
      description:
        "A responsive portfolio showcasing creative work with smooth animations.",
      fullDescription:
        "A modern portfolio website featuring smooth animations, responsive design, and dynamic content management. Built with performance and accessibility in mind.",
      image:
        "https://i.ibb.co/8npxnDZW/image.png",
      // ADD MORE PICTURES
      images: [
        "https://i.ibb.co/8npxnDZW/image.png",
      ],
      tags: ["Next.js", "Framer Motion", "GSAP", "Contentful"],
      github: "https://github.com/dirksmirk/WebsitePortfolio",
      link: "",
      features: [
        "Smooth Animations",
        "Responsive Design",
        "Theme switcher",
        "Performance Focused",
        "Accessibility",
      ],
      technologies: [
        "React",
        "Typescript",
        "Tailwind CSS",
        "Netlify",
      ],
      timeline: "2 months",
      team: "Solo Project",
    },
  };

  const project = projectData[slug || ""];

  const handleImageClick = (index: number) => {
    setCurrentImage(index);

    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNavigateImage = (index: number) => {
    setCurrentImage(index);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            Project Not Found
          </h1>
          <p className="text-muted-foreground">
            The project you're looking for doesn't exist.
          </p>
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
            <p className="text-xl text-muted-foreground">
              {project.description}
            </p>

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
                  onClick={() => window.open(project.github, "_blank")}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </button>
              )}
              {project.link && (
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"

                >
                  <ArrowUpRight className="w-4 h-4" />
                  Website
                </button>
              )}
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
              <h2 className="text-2xl font-semibold mb-4">
                About This Project
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Accomplishments</h2>
              <ul className="list-disc ml-4">
                {project.features.map((feature: string) => (
                  <li key={feature} className="text-muted-foreground mb-1">{feature}</li>
                ))}
              </ul>
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
                    <p className="text-sm text-muted-foreground">
                      {project.timeline}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Team</p>
                    <p className="text-sm text-muted-foreground">
                      {project.team}
                    </p>
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
        currentIndex={currentImage}
        onNavigate={handleNavigateImage}
        projectTitle={project.title}
      />
    </div>
  );
};

export default ProjectDetail;
