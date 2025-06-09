
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "React/TypeScript", level: 95 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "JavaScript/ES6+", level: 88 },
    { name: "HTML5", level: 95 },
    { name: "Node.js", level: 75 },
    { name: "Git/GitHub", level: 85 },
  ];

  const designSkills = [
    { name: "UI/UX Design", level: 92 },
    { name: "Figma/Sketch", level: 90 },
    { name: "Prototyping", level: 85 },
    { name: "Design Systems", level: 88 },
    { name: "User Research", level: 80 },
    { name: "Accessibility", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning both technical development and creative design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-purple-600">
              Design Skills
            </h3>
            {designSkills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
