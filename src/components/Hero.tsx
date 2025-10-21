import { Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-30" />
      
      {/* Floating accent elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Name with enhanced gradient */}
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Abdullah Mansoor
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent animate-glow" />
          </div>
          
          {/* Refined title */}
          <h2 className="text-2xl md:text-4xl text-foreground/90 font-light tracking-wide">
            Technical Architect & Engineering Leader
          </h2>
          
          {/* Concise value proposition */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building scalable enterprise solutions with <span className="text-primary font-semibold">9+ years</span> of expertise in 
            <span className="text-accent font-semibold"> .NET</span>, 
            <span className="text-primary font-semibold"> Angular</span>, and 
            <span className="text-accent font-semibold"> Cloud Architecture</span>.
            Passionate about mentoring teams and driving technical excellence.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(56,189,188,0.4)]"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all"
              onClick={() => scrollToSection('experience')}
            >
              View My Work
              <ChevronDown className="ml-2 h-4 w-4 animate-bounce" />
            </Button>
          </div>
          
          {/* Contact badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 text-sm">
            <a 
              href="mailto:iabu94.dev@gmail.com" 
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">iabu94.dev@gmail.com</span>
            </a>
            <a 
              href="tel:+94779966244" 
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border hover:border-accent/50 hover:bg-secondary transition-all"
            >
              <Phone className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">+94 77 996 6244</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
