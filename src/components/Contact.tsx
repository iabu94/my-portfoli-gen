import { Mail, Phone, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="container max-w-5xl mx-auto relative">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Send className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Let's Talk</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Ready to discuss your next project or explore opportunities? Let's connect.
          </p>
        </div>

        <Card className="bg-card/40 backdrop-blur-md border-border/50 shadow-2xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardContent className="p-10">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <a 
                href="mailto:iabu94.dev@gmail.com"
                className="group"
              >
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-secondary/30">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all mb-4 group-hover:scale-110">
                    <Mail className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-sm text-muted-foreground break-all">iabu94.dev@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+94779966244"
                className="group"
              >
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 bg-secondary/30">
                  <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-all mb-4 group-hover:scale-110">
                    <Phone className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">Phone</h3>
                  <p className="text-sm text-muted-foreground">+94 77 996 6244</p>
                </div>
              </a>

              <a 
                href="https://abdullahmansoor.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-secondary/30">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all mb-4 group-hover:scale-110">
                    <Globe className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Website</h3>
                  <p className="text-sm text-muted-foreground">abdullahmansoor.lk</p>
                </div>
              </a>
            </div>

            <div className="text-center pt-6 border-t border-border/50">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-background hover:scale-105 transition-all shadow-lg hover:shadow-primary/30"
                  asChild
                >
                  <a href="mailto:iabu94.dev@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent hover:scale-105 transition-all"
                  asChild
                >
                  <a href="https://abdullahmansoor.lk" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-5 w-5" />
                    Visit Website
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer note */}
        <p className="text-center text-muted-foreground mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Open to new opportunities and technical consulting
        </p>
      </div>
    </section>
  );
};

export default Contact;
