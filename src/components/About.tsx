const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">About</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed text-foreground/90 mb-6">
              With over five years of experience spanning aviation, construction, and environmental sectors, 
              I specialize in delivering end-to-end logistics and operations solutions that drive measurable results. 
              Recently relocated to Copenhagen, I bring a unique blend of international client management expertise, 
              vendor negotiation skills, and a proven track record of optimizing complex supply chains.
            </p>
            <p className="text-xl leading-relaxed text-foreground/90">
              My approach combines strategic thinking with hands-on execution, whether managing 500+ aviation accounts, 
              coordinating high-profile construction projects for prestigious clients, or implementing IT and cloud 
              systems to enhance operational efficiency. I thrive on building global partnerships and turning 
              logistical challenges into competitive advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
