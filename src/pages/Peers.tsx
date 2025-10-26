import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Github, Twitter, Instagram, Sparkles, Code2, Gamepad2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Peers = () => {
  const navigate = useNavigate();

  const experiments = [
    {
      title: "Neural Art Generator",
      description: "Exploring the intersection of AI and creativity through generative art",
      tech: ["Python", "TensorFlow", "Processing"],
      status: "Ongoing",
      icon: Sparkles,
    },
    {
      title: "Procedural World Builder",
      description: "Infinite terrain generation using Perlin noise and custom algorithms",
      tech: ["C++", "Unreal Engine", "HLSL"],
      status: "Complete",
      icon: Gamepad2,
    },
    {
      title: "Real-time Code Collab",
      description: "WebRTC-based collaborative coding environment with live cursors",
      tech: ["React", "WebRTC", "Node.js", "Socket.io"],
      status: "Beta",
      icon: Code2,
    },
  ];

  const interests = [
    "Creative Coding",
    "Game Jams",
    "Open Source",
    "AI Art",
    "Procedural Generation",
    "Web3 Experiments",
    "Shader Programming",
    "Tech Community",
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium">
            🎨 Creative Playground
          </div>
          <h1 className="mb-4 text-gradient-gold">
            Hey Fellow Creators! 👋
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Welcome to my experimental lab where I explore the boundaries of 
            code, art, and interactive experiences
          </p>
        </div>

        {/* Interests Cloud */}
        <div className="mb-16 animate-fade-in">
          <h2 className="mb-8 text-center text-foreground">What I'm Into</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <span 
                key={interest}
                className="px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-spring cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Experiments Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="mb-8 text-center text-foreground">Current Experiments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiments.map((experiment, index) => {
              const Icon = experiment.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-spring hover:scale-105 group"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      {experiment.title}
                    </CardTitle>
                    <CardDescription>
                      <span className="inline-block px-2 py-1 rounded text-xs bg-primary/20 text-primary mt-2">
                        {experiment.status}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">
                      {experiment.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experiment.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 text-xs rounded bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-16 animate-fade-in">
          <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h3 className="mb-4 text-center text-foreground">My Creative Philosophy</h3>
              <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground">
                <p>
                  Code is poetry. Games are art. Technology is a canvas for human creativity.
                </p>
                <p>
                  I believe in learning by breaking things, sharing knowledge freely, 
                  and pushing the boundaries of what's possible with technology.
                </p>
                <p className="text-primary font-medium">
                  "The best way to predict the future is to create it." 
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-8 pb-8">
              <h3 className="mb-2 text-foreground">Let's Create Together!</h3>
              <p className="text-muted-foreground mb-6">
                Got an interesting idea? Want to jam on a project? 
                Always open to creative collaboration!
              </p>
              <div className="flex gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start a Conversation
                </Button>
                <Button variant="minimal" size="lg">
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Peers;
