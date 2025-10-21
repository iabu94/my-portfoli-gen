import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Cloud, Wrench, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  gradient: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: ".NET & Node.js",
    icon: Layers,
    gradient: "from-primary to-primary/70",
    skills: [".NET Core", "C#", "Entity Framework", "NestJS", "Prisma", "Azure Data Factory"]
  },
  {
    title: "Frontend & Mobile",
    icon: Code2,
    gradient: "from-accent to-accent/70",
    skills: ["Angular", "TypeScript", "NgRx", "RxJS", "Flutter", "Jest", "Storybook"]
  },
  {
    title: "Data & Cloud",
    icon: Database,
    gradient: "from-primary/80 to-accent/80",
    skills: ["PostgreSQL", "MSSQL", "MySQL", "Prisma", "Azure", "Docker", "Kubernetes"]
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    gradient: "from-accent/80 to-primary/80",
    skills: ["GitHub", "CI/CD", "Power BI", "SSRS", "Claude", "Cursor"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container max-w-6xl mx-auto relative">
        <div className="text-center mb-20 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Cloud className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Technical Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack proficiency across modern development technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-background" />
                    </div>
                    <span className="group-hover:text-primary transition-colors">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default text-sm font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
