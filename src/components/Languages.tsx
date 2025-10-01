import { motion } from "framer-motion";

const languages = [
  {
    name: "English",
    proficiency: "Native"
  },
  {
    name: "Danish",
    proficiency: "Conversational"
  }
];

const Languages = () => {
  return (
    <section id="languages" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-foreground flex items-center gap-4"
          >
            <span className="text-accent">05.</span> LANGUAGES
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-between items-center p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-foreground">{language.name}</h3>
                <span className="text-accent font-medium">{language.proficiency}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
