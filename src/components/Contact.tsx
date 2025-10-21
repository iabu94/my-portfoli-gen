import { Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how I can help with your next project
          </p>
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:iabu94.dev@gmail.com"
                className="group"
              >
                <div className="flex items-start gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Email</h3>
                    <p className="text-sm text-muted-foreground break-all">iabu94.dev@gmail.com</p>
                  </div>
                </div>
              </a>

              <a 
                href="tel:+94779966244"
                className="group"
              >
                <div className="flex items-start gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">Phone</h3>
                    <p className="text-sm text-muted-foreground">+94 77 996 6244</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="mt-8 text-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://abdullahmansoor.lk" target="_blank" rel="noopener noreferrer">
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
