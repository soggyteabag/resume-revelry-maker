const educationItems = [
  {
    degree: "BA (Hons) History – 2:1",
    institution: "Anglia Ruskin University",
    location: "Cambridge",
    dates: "2015 – 2018"
  },
  {
    degree: "Google IT Support Professional Certificate",
    institution: "Google / Coursera",
    location: "Online",
    dates: "2024"
  },
  {
    degree: "AWS Certified Cloud Practitioner",
    institution: "Amazon Web Services",
    location: "Online",
    dates: "2024"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary">Education</h2>
          
          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors group"
              >
                <div className="mb-2 md:mb-0">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-muted-foreground mt-1">
                    {item.institution} • {item.location}
                  </p>
                </div>
                <div className="text-muted-foreground/70 font-medium">
                  {item.dates}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
