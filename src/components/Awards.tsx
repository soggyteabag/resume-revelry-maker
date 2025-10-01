const awardsAndAchievements = [
  {
    title: "Jack Petchey Award",
    description: "Recipient for outstanding leadership and dedication in Scout involvement and community service",
    year: "2017"
  },
  {
    title: "Head of ARU Rowing Club",
    description: "Led the university rowing club to championship success as Cam Winners",
    year: "2018"
  },
  {
    title: "Leadership & Events",
    description: "London Marathon setup and onsite operations coordinator, Fraser Island Tour Ambassador",
    year: "2019 – 2024"
  }
];

const additionalExperience = [
  "WOMAD Festival Ambassador – Cultural event promotion and coordination",
  "Seasonal Agricultural Work – Kiwi Harvester, Mat Johnston Contracting (2023-2024)",
  "Hospitality – Bartender/Waiter at Laguna Jacks, Royal Ascot Private Events",
  "Volunteer Leadership – Receptionist & Team Lead at Nomads Australia"
];

const Awards = () => {
  return (
    <section id="awards" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary">Awards & Recognition</h2>
          
          <div className="space-y-8 mb-16">
            {awardsAndAchievements.map((award, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-primary">{award.title}</h3>
                  <span className="text-accent font-semibold text-lg">{award.year}</span>
                </div>
                <p className="text-foreground/80 leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-card rounded-xl p-8 border border-border shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-bold text-primary mb-6">Additional Experience</h3>
            <ul className="space-y-3">
              {additionalExperience.map((experience, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span className="text-foreground/80">{experience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
