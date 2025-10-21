import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

const jobs: Job[] = [
  {
    title: "Senior Technical Lead",
    company: "OSOS",
    period: "August 2023 – Present",
    description: [
      "Architected fully customizable multi-tenant ERP platform with no-code form and report builders",
      "Led team of 5+ developers in design and enterprise-scale implementation",
      "Established architectural best practices and mentored junior engineers on cloud-native design patterns"
    ],
    tech: [".NET Core", "C#", "Angular", "TypeScript", "PostgreSQL", "Azure", "Docker", "Github"]
  },
  {
    title: "Technical Lead",
    company: "99x",
    period: "June 2022 – August 2023",
    description: [
      "Led design and delivery of Adra Analytics platform with enterprise dashboards",
      "Integrated Power BI for data-driven business decisions",
      "Conducted comprehensive code reviews and established coding standards"
    ],
    tech: [".NET Core", "C#", "Angular", "NgRx", "TypeScript", "MSSQL", "Power BI", "Azure"]
  },
  {
    title: "Senior Software Engineer",
    company: "Mitra Innovation",
    period: "April 2021 - June 2022",
    description: [
      "Restructured legacy Angular application achieving 40% performance improvement",
      "Implemented NgRx state management architecture for complex application state",
      "Delivered new features for real-estate finance platform"
    ],
    tech: [".NET Core", "C#", "Angular", "NgRx", "TypeScript", "MySQL", "PostgreSQL"]
  },
  {
    title: "Software Engineer",
    company: "Virtusa",
    period: "February 2019 - April 2021",
    description: [
      "Designed Azure Data Factory POCs for enterprise data pipeline solutions",
      "Modernized legacy VB.NET applications to Angular/C# stack",
      "Implemented ETL tool improving data integration efficiency"
    ],
    tech: ["VB.NET", ".NET Core", "C#", "Angular", "Azure Data Factory", "SSRS", "MSSQL"]
  },
  {
    title: "Associate Software Engineer",
    company: "Techserw Labs",
    period: "January 2017 - February 2019",
    description: [
      "Designed, developed and tested iTimes product",
      "Troubleshot complex issues reducing production incidents by 30%",
      "Collaborated with cross-functional teams on performance optimization"
    ],
    tech: [".NET", "C#", "Angular", "TypeScript", "MSSQL", "Jest"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            9+ years of delivering enterprise solutions and leading technical teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50" />

                {/* Spacer for alignment */}
                <div className="hidden md:block w-1/2" />

                {/* Content card */}
                <Card className="w-full md:w-1/2 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {job.company}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="shrink-0 border-primary/50 text-primary">
                        {job.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-muted-foreground">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {job.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-secondary/50">
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
