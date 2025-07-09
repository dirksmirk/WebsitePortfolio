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
import ImageModal from "@/components/Modal";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const projectData: Record<string, any> = {
    // ALMOST DONE
    "baemingo---inactivity-tracker": {
      title: "Baemingo - Inactivity tracker",
      description:
        "Inactivity tracker for Baemingos Table Service Mode, allowing customers to quickly and easily see and manage inactive tables.",
      fullDescription:
        "I helped create a inactivity tracker for Baemingos Table Service Mode, that uses colors to help mark inactive tables so restaurants can more easily control their inactive tables",
      image:
        "https://i.ibb.co/vxSW0ywJ/image.png",
      images: [
        "https://i.ibb.co/5WYJYXfR/434867382-7b4fead6-1929-49f0-aa50-7227da187218.png",
      ],
      tags: ["React", "TypeScript", "Tailwind", "GraphQL", "POS"],
      github: "",
      link: "https://baemingo.com/sv-se",
      features: [
        "Calculates and updates the time of the most inactive table every minute and action to keep the table map updated",
        "Marks the top 5% most inactive tables in red, and the next 5% most inactive tables in orange",
        "Inactive tables are calculated based on latest activity, which is tracked from an API using GrapgQL",
        "Tables created or interacted with less than 15 minutes ago will not be marked, and tables with inactivity or creation more than 2 hours won't be marked either",
        "These calculations are based on what would be most effective for a table service restaurant",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GrapghQL",
        "Node.js",
        "Vercel",
      ],
      timeline: "1 day",
      team: "Solo project",
    },
    // NOT DONE
    "baemingo---voucher-ui-revamp": {
      title: "Baemingo - Voucher UI revamp",
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
      tags: ["React", "TypeScript", "Tailwind", "GraphQL", "POS"],
      github: "",
      link: "https://baemingo.com/sv-se",
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
      timeline: "1 months",
      team: "Solo project",
    },
    // NOT DONE
    "baemingo---printer-troubleshooting-integration": {
      title: "Baemingo - Printer troubleshooting integration",
      description:
        "A integrated troubleshooting guide customers can use to help troubleshoot if they're having issues finding and adding their printer in the Baemingo app",
      fullDescription:
        "Worked together with a colleague to create interactive guides for printers, so customers could troubleshoot without having to contact our support. While she created the guides for added printers, I created this guide for if you're unable to find your printer in the first place",
      image:
        "https://i.ibb.co/pryZkXWZ/1706218878930.jpg",
      // ADD MORE PICTURES
      images: [
        "https://i.ibb.co/pryZkXWZ/1706218878930.jpg",
      ],
      tags: ["React", "TypeScript", "Tailwind", "GraphQL", "POS"],
      github: "",
      link: "https://baemingo.com/sv-se",
      // FIX
      features: [
        "Created the layout",
        "Added translations for all steps in all of Baemingos supported languages (Swedish, English, Danish, Norwegian, Turkish and Spanish)",
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
      team: "Small, 2 people",
    },
    "baemingo---express-insta-cart": {
      title: "Baemingo - Express Insta Cart",
      description:
        "Built in Logic that allows customers to instaty add items to their express cart when pressing an item that has no additions or options.",
      fullDescription:
        "Before this update, all items no matter what required two clicks to add to cart. This slowed down the use of the Express POS significantly if the customers wanted to add minor items to the cart. Thanks to this update, items now get added instantly to the cart if they have no extra additions or options",
      image:
        "https://i.ibb.co/8npxnDZW/image.png",
      // ADD MORE PICTURES
      images: [
        "https://i.ibb.co/8npxnDZW/image.png",
      ],
      tags: ["React", "TypeScript", "Tailwind", "GraphQL", "POS"],
      github: "",
      link: "https://baemingo.com/sv-se",
      features: [
        "onclick animations, making sure customers know they've added an item to their cart",
        "Frontend logic, checking ",
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
      timeline: "3 weeks",
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
              {/* Removing GitHub button for now, will add back if any future projects can be linked directly */}
              {/* {project.github && (
                <button
                  onClick={() => window.open(project.github, "_blank")}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </button>
              )} */}
              {project.link && (
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 rounded-md px-3"

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
