
import { Code, Database, Globe, GitBranch, Github, Figma } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Modern web technologies and frameworks",
      color: "text-blue-600",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Vite", level: "Intermediate" },
      ]
    },
    {
      title: "Backend & Tools",
      description: "Server technologies and development tools",
      color: "text-green-600",
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "MongoDB", level: "Beginner" },
        { name: "Docker", level: "Beginner" },
      ]
    },
    {
      title: "Design & UX",
      description: "User experience and visual design",
      color: "text-purple-600",
      skills: [
        { name: "UI/UX Design", level: "Advanced" },
        { name: "Figma", level: "Advanced" },
        { name: "Prototyping", level: "Advanced" },
        { name: "Design Systems", level: "Advanced" },
        { name: "User Research", level: "Intermediate" },
        { name: "Accessibility", level: "Advanced" },
      ]
    }
  ];

  const getIcon = (categoryTitle: string) => {
    switch (categoryTitle) {
      case "Frontend Development":
        return <Code className="w-6 h-6" />;
      case "Backend & Tools":
        return <Database className="w-6 h-6" />;
      case "Design & UX":
        return <Figma className="w-6 h-6" />;
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-red-100 text-red-800 border-red-200";
      case "Advanced":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="skills" className="py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning modern web development, design, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 backdrop-blur-sm rounded-lg border-border bg-card text-card-foreground shadow-sm"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-4 group-hover:scale-110 transition-transform duration-200 ${category.color}`}>
                  {getIcon(category.title)}
                </div>
                <h3 className="mb-2 text-2xl font-semibold leading-none tracking-tight">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group/skill"
                      style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      <div 
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${getLevelColor(skill.level)} hover:scale-105 transition-all duration-200 cursor-default px-3 py-1 text-xs font-medium group-hover/skill:shadow-md border`}
                      >
                        <span className="font-medium">{skill.name}</span>
                        <span className="ml-1 text-xs opacity-70">({skill.level})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-background/50 backdrop-blur-sm rounded-full px-8 py-4 border border-border/50">
            {/* <div className="flex items-center space-x-2">
              <Github className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Open Source Contributor</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <GitBranch className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Version Control Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Cross-Platform Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
