import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities! Feel free to reach out and 
          we will get acclimated!
        </p>

        <div className="space-y-8">
          <div className="space-y-6 max-w-md mx-auto">
            <div className="flex items-start justify-center space-x-4 text-left ml-20">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary space-x-50" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:jeremyk.appiah@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  jeremyk.appiah@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 text-left">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+15409316146"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (540) 931-6146
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 text-left">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <span className="text-muted-foreground">
                  Martinsburg, WV
                </span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me On External Platforms!</h4>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/jeremy-appiah-2aa78a314/" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full bg-background hover:text-primary transition-colors border shadow-xs"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/JeremyKAppiah" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full bg-background hover:text-primary transition-colors border shadow-xs"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
