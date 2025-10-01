const languages = [
  {
    name: "English",
    proficiency: "Native"
  }
];

const Languages = () => {
  return (
    <section id="languages" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary">Languages</h2>
          
          <div className="flex flex-wrap gap-6">
            {languages.map((language, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 px-8 py-4 bg-card rounded-xl border border-border shadow-[var(--shadow-soft)]"
              >
                <span className="text-2xl font-bold text-primary">{language.name}</span>
                <span className="text-accent">•</span>
                <span className="text-muted-foreground">{language.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
