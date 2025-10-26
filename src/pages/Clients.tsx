import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      description: "Full-stack web applications with modern frameworks",
      features: ["Responsive Design", "RESTful APIs", "Database Integration", "Performance Optimization"],
    },
    {
      title: "Game Development",
      description: "Interactive experiences and game mechanics",
      features: ["Unreal Engine", "Game Logic", "Level Design", "Cross-platform"],
    },
    {
      title: "Machine Learning",
      description: "AI-powered solutions and data analysis",
      features: ["Model Training", "Data Processing", "Predictive Analytics", "Automation"],
    },
  ];

  const portfolio = [
    {
      title: "Corporate Website Redesign",
      client: "Tech Startup",
      description: "Complete website overhaul with modern UI/UX, 40% increase in engagement",
      deliverables: ["Frontend Development", "Backend API", "CMS Integration"],
      outcome: "40% increase in user engagement",
    },
    {
      title: "Interactive Game Prototype",
      client: "Indie Studio",
      description: "3D puzzle game prototype with innovative mechanics",
      deliverables: ["Game Design", "Level Development", "Character System"],
      outcome: "Successfully pitched to publishers",
    },
    {
      title: "Data Analytics Dashboard",
      client: "E-commerce Company",
      description: "Real-time analytics platform with ML predictions",
      deliverables: ["Dashboard UI", "ML Models", "Data Pipeline"],
      outcome: "Reduced decision time by 60%",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button variant="hero">
            Start a Project
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="mb-4 text-foreground">Let's Build Something Amazing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering high-quality web applications, games, and ML solutions 
            tailored to your business needs
          </p>
        </div>

        {/* Services Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="mb-8 text-center text-foreground">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card/50 hover:bg-card transition-smooth">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="animate-fade-in">
          <h2 className="mb-8 text-center text-foreground">Recent Projects</h2>
          <div className="space-y-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-card/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="mt-1">
                        Client: {project.client}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Deliverables</p>
                      <ul className="space-y-1">
                        {project.deliverables.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Outcome</p>
                      <p className="text-sm text-primary">{project.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 animate-fade-in">
          <Card className="bg-card/50 border-primary/20">
            <CardContent className="pt-8 pb-8 text-center">
              <h3 className="mb-2 text-foreground">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss how I can help bring your vision to life with 
                cutting-edge technology and creative solutions
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Schedule a Call
                </Button>
                <Button variant="minimal" size="lg">
                  View Full Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Clients;
