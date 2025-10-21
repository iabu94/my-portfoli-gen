import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container max-w-6xl mx-auto relative">
        <div className="text-center mb-20 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <GraduationCap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Academic Background</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/70 shadow-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-6 w-6 text-background" />
                </div>
                <span className="group-hover:text-primary transition-colors">Bachelor's Degree</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-xl mb-1">B.Sc in Software Engineering</h3>
                <p className="text-muted-foreground text-lg">University of Kelaniya</p>
              </div>
              <Badge 
                variant="outline" 
                className="border-primary/50 text-primary bg-primary/5 px-4 py-1"
              >
                Graduated 2019
              </Badge>
            </CardContent>
          </Card>

          <Card className="group bg-card/60 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent/70 shadow-lg group-hover:scale-110 transition-transform">
                  <Trophy className="h-6 w-6 text-background" />
                </div>
                <span className="group-hover:text-accent transition-colors">Top Achievement</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-bold text-xl mb-1">Advanced Level (A/L)</h3>
                <p className="text-muted-foreground text-lg">Al Azhar National School</p>
              </div>
              <Badge 
                variant="outline" 
                className="border-accent/50 text-accent bg-accent/5 px-4 py-1"
              >
                <Award className="h-3 w-3 mr-1" />
                District Rank 1st • Physical Science • 2014
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
