
const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Startup Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for a fast-growing SaaS platform, mentoring junior developers, and establishing development best practices.",
      achievements: [
        "Improved application performance by 40%",
        "Built design system used across 5+ products",
        "Led team of 4 frontend developers"
      ]
    },
    {
      title: "UI/UX Designer & Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: "Full-stack design and development role, working directly with clients to deliver custom web solutions.",
      achievements: [
        "Delivered 20+ client projects",
        "Increased client satisfaction scores by 35%",
        "Developed reusable component library"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Creative Studios",
      period: "2019 - 2020",
      description: "Specialized in creating interactive web experiences and animations for creative campaigns.",
      achievements: [
        "Built award-winning interactive campaigns",
        "Implemented advanced CSS animations",
        "Collaborated with design team on 15+ projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles that have shaped my expertise in frontend development and design.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={exp.title}
              className="rounded-lg border border-border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold leading-none tracking-tight text-blue-600">{exp.title}</h3>
                    <p className="text-lg font-medium text-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-muted-foreground font-medium">{exp.period}</span>
                </div>
              </div>
              
              <div className="p-6 pt-0 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
