import { Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Name with gradient */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Abdullah Mansoor
          </h1>
          
          {/* Title */}
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Senior Technical Lead & Software Engineering Architect
          </p>
          
          {/* Professional summary */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            9+ years of expertise delivering scalable enterprise solutions across .NET, Angular, 
            and cloud architectures. Expert in architecting multi-tenant platforms and mentoring technical teams.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="#experience">
                View Experience
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          {/* Contact info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 text-sm text-muted-foreground">
            <a href="mailto:iabu94.dev@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              iabu94.dev@gmail.com
            </a>
            <a href="tel:+94779966244" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +94 77 996 6244
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
