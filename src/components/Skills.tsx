import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: ".NET Stack",
    icon: Code2,
    skills: [".NET Core", ".NET MVC", "C#", "WCF", "Entity Framework", "Azure Data Factory"]
  },
  {
    title: "Angular Stack",
    icon: Code2,
    skills: ["Angular", "TypeScript", "NgRx", "RxJS", "Jest", "Storybook"]
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    skills: ["MSSQL", "PostgreSQL", "MySQL", "Azure", "Docker", "Kubernetes"]
  },
  {
    title: "Tools & Methodologies",
    icon: Wrench,
    skills: ["GitHub", "Agile", "CI/CD", "Claude Code", "Cursor", "Power BI", "SSRS"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Full-stack expertise across modern development technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary"
                        className="bg-secondary/70 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
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
