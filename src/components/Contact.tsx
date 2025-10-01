import { Mail, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-primary text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-medium)] transition-shadow">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href="mailto:thomasgcarr@gmail.com" 
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      thomasgcarr@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a 
                      href="tel:+447586711224" 
                      className="text-foreground hover:text-accent transition-colors font-medium"
                    >
                      +44 7586 711 224
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">London / Copenhagen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-primary-foreground shadow-[var(--shadow-medium)] flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
              <p className="text-primary-foreground/90 mb-8 leading-relaxed">
                Whether you're looking for a logistics specialist, operations manager, 
                or someone who can bridge the gap between strategy and execution, 
                I'd love to hear from you.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="w-full group"
                onClick={() => window.location.href = 'mailto:thomasgcarr@gmail.com'}
              >
                Send Me an Email
                <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-soft)] text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Download Full CV</h3>
            <p className="text-muted-foreground mb-6">
              Get a comprehensive overview of my experience and qualifications
            </p>
            <Button 
              size="lg"
              className="group"
              onClick={() => {
                // Placeholder for CV download functionality
                console.log('CV download requested');
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download CV (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
