import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Job {
  title: string;
  company: string;
  period: string;
  highlights: string[];
  tech: string[];
}

const jobs: Job[] = [
  {
    title: "Senior Technical Lead",
    company: "OSOS",
    period: "Aug 2023 – Present",
    highlights: [
      "Architected multi-tenant ERP platform with no-code builders",
      "Led 5+ developers in enterprise-scale implementation",
      "Established architectural standards and mentored on cloud-native patterns"
    ],
    tech: [".NET Core", "Angular", "PostgreSQL", "Azure", "Docker"]
  },
  {
    title: "Technical Lead",
    company: "99x",
    period: "Jun 2022 – Aug 2023",
    highlights: [
      "Delivered Adra Analytics platform with Power BI integration",
      "Drove Agile delivery and established coding standards",
      "Enabled data-driven decisions for enterprise stakeholders"
    ],
    tech: [".NET Core", "Angular", "NgRx", "Power BI", "Azure"]
  },
  {
    title: "Senior Software Engineer",
    company: "Mitra Innovation",
    period: "Apr 2021 - Jun 2022",
    highlights: [
      "Restructured legacy app achieving 40% performance gain",
      "Implemented NgRx architecture for complex state management",
      "Delivered features for real-estate finance platform"
    ],
    tech: ["Angular", "NgRx", "MySQL", "PostgreSQL"]
  },
  {
    title: "Software Engineer",
    company: "Virtusa",
    period: "Feb 2019 - Apr 2021",
    highlights: [
      "Modernized VB.NET legacy apps to Angular/C# stack",
      "Built ETL tool for enterprise data pipelines",
      "Designed Azure Data Factory POCs"
    ],
    tech: ["Azure Data Factory", ".NET Core", "Angular", "SSRS"]
  },
  {
    title: "Associate Software Engineer",
    company: "Techserw Labs",
    period: "Jan 2017 - Feb 2019",
    highlights: [
      "Developed iTimes product from design to testing",
      "Reduced production incidents by 30%",
      "Optimized application stack performance"
    ],
    tech: [".NET", "Angular", "MSSQL", "Jest"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container max-w-6xl mx-auto relative">
        <div className="text-center mb-20 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Career Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            9+ years building enterprise solutions and leading technical teams
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

          <div className="space-y-16">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 z-10 animate-glow" />

                {/* Spacer */}
                <div className="hidden md:block w-1/2" />

                {/* Content card */}
                <Card className="w-full md:w-1/2 bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                          {job.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary/90">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge 
                        variant="outline" 
                        className="shrink-0 border-accent/50 text-accent bg-accent/5"
                      >
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2.5">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground">
                          <span className="text-primary mt-1 text-lg">→</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border/50">
                      {job.tech.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className="bg-secondary/70 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
