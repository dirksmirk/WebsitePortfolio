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
import ImageModal from "@/components/ImageModal";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const projectData: Record<string, any> = {
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
        "https://i.ibb.co/x8cVvmk7/IMG-0066.png",
        "https://i.ibb.co/fzBJxHrk/IMG-0069.png",
        "https://i.ibb.co/7t8w8sxc/IMG-0070.png",
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
      team: "Solo project",
    },
    // NOT DONE
    "baemingo---voucher-ui-revamp": {
      title: "Baemingo - Voucher UI revamp",
      description:
        "A full revamp and upgrade of the backoffice voucher page, allowing for better readability, error message handling and customer input.",
      fullDescription:
        "A personal pet project from my time at operations, finance questions are always critical. For customers to be able to easily see, understand and solve any voucher questions themselves would not just be greatly appreciated by customers, but is rather needed for the future growth of Baemingo.",
      image:
        "https://i.ibb.co/20wh0sG6/image.png",
      images: [
        "https://i.ibb.co/20wh0sG6/image.png",
      ],
      tags: ["React", "TypeScript", "Tailwind", "GraphQL", "POS"],
      github: "",
      link: "https://baemingo.com/sv-se",
      features: [
        "Complete redesign of the page from the ground up, designed and organised all by myself",
        "Created filtering tools for filtering vouchers by date as well as by venue",
        "Each voucher error message was assigned a key depending on the error message, which then corresponded to a different title and message being displayed to customers on the frontend",
        "Also added troubleshooting instructions and voucher dates",
        "Lastly I created a 'reauthenticate' button that would appear on vouchers if the cause was a failed authentication between our system integration and the customers financy system",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GrapghQL",
        "Node.js",
        "Vercel",
      ],
      team: "Solo project",
    },
    "baemingo---printer-troubleshooting-integration": {
      title: "Baemingo - Printer troubleshooting integration",
      description:
        "A integrated troubleshooting guide customers can use to help troubleshoot if they're having issues finding and adding their printer in the Baemingo app",
      fullDescription:
        "Worked together with a colleague to create interactive guides for printers, so customers could troubleshoot without having to contact our support. While she created the guides for added printers, I created this guide for customers who are unable to find their printer in the first place",
      image:
        "https://i.ibb.co/vxNwxW2W/416111263-d9800207-1aee-45ea-ba7d-ba533ea49229.png",
      // ADD MORE PICTURES
      images: [
        "https://i.ibb.co/vxNwxW2W/416111263-d9800207-1aee-45ea-ba7d-ba533ea49229.png",
        "https://i.ibb.co/h17XvpNG/IMG-0045.png",
      ],
      tags: ["React", "TypeScript", "Tailwind", "GraphQL", "POS"],
      github: "",
      link: "https://baemingo.com/sv-se",
      // FIX
      features: [
        "Created the data structure in the frontend together with a colleague",
        "All options have a key connected, the modal displays information depending on the chosen keys",
        "I helped set up all information, as I had prior knowledge and troubleshooting experience from my earlier work at operations",
        "The design of the guide is made to flow and blend in with the rest of the UI, feel familiar to the customer",
        "Ease of use was very important, so that customers actually use this tool instead of always trying/needing to call the support",
        "Works with Baemingos two supported printer brands, Star and Epson",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GrapghQL",
        "Node.js",
        "Vercel",
      ],
      team: "Small, 2 people",
    },
    "baemingo---express-insta-cart": {
      title: "Baemingo - Express Insta Cart",
      description:
        "Built in Logic that allows customers to instaty add items to their express cart when pressing an item that has no additions or options.",
      fullDescription:
        "Before this update, all items no matter what required two clicks to add to cart. This slowed down the use of the Express POS significantly if the customers wanted to add minor items to the cart. Thanks to this update, items now get added instantly to the cart if they have no extra additions or options",
      image:
        "https://i.ibb.co/TDV0CHJG/IMG-0072.png",
      images: [
        "https://i.ibb.co/TDV0CHJG/IMG-0072.png",
        "https://i.ibb.co/hJb1QzfD/IMG-0071.png",
        "https://i.ibb.co/TDV0CHJG/IMG-0072.png",
        "https://i.ibb.co/9mt1vXLc/IMG-0073.png",
        "https://i.ibb.co/C5KjwF2M/IMG-0074.png",
      ],
      tags: ["React", "TypeScript", "Tailwind", "GraphQL", "POS"],
      github: "",
      link: "https://baemingo.com/sv-se",
      features: [
        "onclick animations, making sure customers know they've added an item to their cart",
        "Frontend logic, using information from the API to check for if the item has any options the customer can/needs to choose between",
        "+ icon on top of every item that can be added instantly to cart, so customers can see at a glance",
        "Translations for all supported languages",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GrapghQL",
        "Node.js",
        "Vercel",
      ],
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
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 rounded-md px-3"
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
