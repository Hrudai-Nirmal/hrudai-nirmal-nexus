import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code, Briefcase, Users, Handshake } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Recruiters",
      description: "Professional CV & Career Overview",
      icon: Briefcase,
      path: "/recruiters",
      gradient: "from-amber-500/20 to-transparent",
    },
    {
      title: "Clients",
      description: "Project Portfolio & Services",
      icon: Code,
      path: "/clients",
      gradient: "from-yellow-500/20 to-transparent",
    },
    {
      title: "Peers",
      description: "Creative Work & Experiments",
      icon: Users,
      path: "/peers",
      gradient: "from-orange-500/20 to-transparent",
    },
    {
      title: "Collaborators",
      description: "Let's Build Something Together",
      icon: Handshake,
      path: "/collaborators",
      gradient: "from-amber-600/20 to-transparent",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-glow animate-glow-pulse pointer-events-none z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          {/* Header */}
          <div className="mb-16 space-y-6">
            <h1 className="text-gradient-gold">
              Hrudai Nirmal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Computer Science Engineer • Web Developer • Game Designer
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
              {["React", "Node.js", "Python", "Unreal Engine", "Machine Learning"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-card border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.path}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button
                    onClick={() => navigate(category.path)}
                    className="w-full p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-smooth text-left relative overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-smooth`}></div>
                    
                    <div className="relative z-10">
                      <Icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-spring" />
                      <h3 className="mb-2 text-foreground group-hover:text-primary transition-smooth">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {category.description}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <p className="text-sm text-muted-foreground">
            Select a category to view tailored content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
