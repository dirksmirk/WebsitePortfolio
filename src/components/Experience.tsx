
const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Baemingo",
      period: "November 2024 - May 2025",
      description: "Frontend developer intern, using my new tools to help develop the software i'd been supporting for so long and to help craft the perfect user experiences.",
      achievements: [
        "Improved application performance by 40%",
        "Built design system used across 5+ products",
        "Led team of 4 frontend developers"
      ]
    },
    {
      title: "Operations, Support & Onboarding",
      company: "Baemingo",
      period: "August 2022 - November 2024",
      description: "My time at Baemingo was spent fluidly working between support and onboarding, helping out within Operations wherever was most effective.",
      achievements: [
        "Managed Baemingos customer support while at the same time rolling out customers, effectively juggling two tasks at the same time",
        "Took over management and creation of Baemingos customer guides, making sure they were up to date and translated to all necessary languages.",
        "Rolled out and helped bring online hundreds of restaurants."
      ]
    },
    {
      title: "First line, Second line support and Delivery manager",
      company: "Ownit Broadband",
      period: "2018 - 2022",
      description: "I worked a mix of roles within my journey at Ownit, all related to the support and delivery of fiber broadband.",
      achievements: [
        "Supported thousands of customers with problems such as network issues, hardware problems and invoice questions.",
        "Advanced from first line, to second line to delivery manager all within 5 months",
        "Helped roll out fiber broadband to multiple condominium associations and companies, aswell as manage the upgrading of existing connectiong and hardware."
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
