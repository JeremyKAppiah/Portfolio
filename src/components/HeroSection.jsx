import { ArrowDown } from "lucide-react";
import profilePic from "/public/IMG_0961.JPG"; // Adjust the path as necessary

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <img
            src={profilePic}
            alt="Jeremy Appiah"
            className="mx-auto w-64 h-64 object-cover mb-6 shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg border-4 border-primary"
          />

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> How's it going? My name is</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Jeremy Appiah
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              !
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Driven by purpose, I’m excited to make a lasting impact—and I’ll never stop striving to do so!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Psst... Let's Take a Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

// Add this to your global CSS (e.g., index.css or tailwind.css):
/*
@keyframes borderMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
*/