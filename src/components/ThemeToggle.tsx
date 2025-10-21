import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="fixed top-6 right-6 z-50 rounded-full border-border/50 bg-background/80 backdrop-blur-sm hover:bg-secondary/80 hover:border-primary/50 transition-all shadow-lg"
      >
        <Sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 rounded-full border-border/50 bg-background/80 backdrop-blur-sm hover:bg-secondary/80 hover:border-primary/50 transition-all shadow-lg hover:scale-110"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
