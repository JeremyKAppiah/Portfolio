import { Code, HandshakeIcon, ShieldCheckIcon, User, Download } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Developer and Cybersecurity Enthusiast!
            </h3>

            <p className="text-muted-foreground">
              Rising 5th-year Computer Science & Cybersecurity undergraduate at West Virginia University, minoring in General Business. Skilled in Java (4+ years using Eclipse), C, C#, HTML, CSS, JavaScript, 
					React, and Node.js. Experienced with Linux systems, encryption/decryption, and both Mac and Windows OS.
            </p>

            <p className="text-muted-foreground">
					Passionate about advancing technology to benefit society. Strong collaborator, problem-solver, 
					and aspiring entrepreneur driven to make an impact in cybersecurity and software development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/src/assets/JeremyAppiahResume.pdf"
                download="JeremyAppiahResume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download My Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Full Stack Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheckIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cybersecurity Principles</h4>
                  <p className="text-muted-foreground">
                    Fueling innovation by securing systems and 
                    protecting data through a passion for cybersecurity.
                  </p>
                </div>
              </div>
            </div>
             <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <HandshakeIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Technical Leadership & Real-World Impact</h4>
                  <p className="text-muted-foreground">
                    Bridging software development and emerging technologies through Agile teamwork, 
                    immersive VR experiences, and hands-on projects that 
                    translate complex ideas into practical solutions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};