const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary-foreground/80 mb-4">
            © {new Date().getFullYear()} Thomas Miller Carr. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Designed with purpose. Built for impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
