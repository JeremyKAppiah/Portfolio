import { useState } from "react";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react"; // Import question icon

const skills = [
  // Frontend
  { name: "Java", level: 90, category: "frontend" },
  { name: "C", level: 80, category: "frontend" },
  { name: "C#", level: 80, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 95, category: "frontend" },
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "Material UI", level: 80, category: "frontend" },


  // Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "GraphQL", level: 65, category: "backend" },
  { name: "SQL", level: 70, category: "backend" },
  { name: "FastAPI", level: 60, category: "backend" },


  // Tools
  { name: "Git/GitHub", level: 95, category: "tools/frameworks" },
  { name: "Docker", level: 75, category: "tools/frameworks" },
  { name: "XCode", level: 85, category: "tools/frameworks" },
  { name: "VS Code", level: 95, category: "tools/frameworks" },
  { name: "Eclipse", level: 95, category: "tools/frameworks" },
  { name: "MySQL Workbench", level: 95, category: "tools/frameworks" },
  { name: "Quartus Prime", level: 80, category: "tools/frameworks" },
  { name: "UTM", level: 100, category: "tools/frameworks" },
  { name: "VirtualBox", level: 100, category: "tools/frameworks" },
  { name: "Unreal Engine", level: 70, category: "tools/frameworks" },
  { name: "Trivy", level: 95, category: "tools/frameworks" },
  { name: "AWS", level: 85, category: "tools/frameworks" },
  { name: "RapidAPI", level: 95, category: "tools/frameworks" },
  { name: "JUnit", level: 85, category: "tools/frameworks" },
  { name: "Canva", level: 100, category: "tools/frameworks" },
  { name: "Linux", level: 85, category: "tools/frameworks" },
  { name: "VHDL", level: 80, category: "tools/frameworks" },
  { name: "Atlassian", level: 100, category: "tools/frameworks" },

];

const categories = ["all", "frontend", "backend", "tools/frameworks"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showTooltip, setShowTooltip] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 relative">
          {/* Tabs */}
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
          {/* Question icon with tooltip */}
          <div
            className="relative flex items-center ml-2"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <HelpCircle className="h-6 w-6 text-muted-foreground cursor-pointer" />
            {showTooltip && (
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-4 py-2 bg-card text-sm text-muted-foreground rounded shadow-lg z-10 w-64">
                The percentages tied to each skill indicates my personal comfortability level and knowledge!
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};