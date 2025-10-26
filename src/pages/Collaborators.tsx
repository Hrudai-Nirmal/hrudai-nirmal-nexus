import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Users, Target, Lightbulb, Rocket, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Collaborators = () => {
  const navigate = useNavigate();

  const collaborationTypes = [
    {
      title: "Open Source Projects",
      description: "Contributing to meaningful projects that make a difference",
      icon: Users,
      color: "from-amber-500/20 to-transparent",
    },
    {
      title: "Hackathons & Jams",
      description: "Building amazing things under pressure with awesome teams",
      icon: Rocket,
      color: "from-yellow-500/20 to-transparent",
    },
    {
      title: "Research & Innovation",
      description: "Exploring new technologies and pushing boundaries together",
      icon: Lightbulb,
      color: "from-orange-500/20 to-transparent",
    },
    {
      title: "Mentorship Exchange",
      description: "Learning from each other and growing our skills",
      icon: Target,
      color: "from-amber-600/20 to-transparent",
    },
  ];

  const values = [
    {
      title: "Transparency",
      description: "Open communication and honest feedback",
    },
    {
      title: "Quality",
      description: "Commitment to excellence in every line of code",
    },
    {
      title: "Innovation",
      description: "Always exploring new ideas and approaches",
    },
    {
      title: "Community",
      description: "Giving back and lifting others up",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button variant="hero">
            <MessageCircle className="mr-2 h-4 w-4" />
            Let's Talk
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl relative z-10">
        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="inline-block mb-6">
            <span className="text-6xl">🤝</span>
          </div>
          <h1 className="mb-4 text-gradient-gold">
            Let's Build Something Incredible Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I believe the best projects come from collaborative minds working towards a common goal. 
            Let's combine our strengths and create something amazing.
          </p>
        </div>

        {/* Collaboration Types */}
        <div className="mb-16 animate-fade-in">
          <h2 className="mb-8 text-center text-foreground">How We Can Work Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card 
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-spring hover:scale-105 group relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-100 transition-smooth`}></div>
                  <CardHeader className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      {type.title}
                    </CardTitle>
                    <CardDescription>
                      {type.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 animate-fade-in">
          <h2 className="mb-8 text-center text-foreground">What I Bring to the Table</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-sm text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-primary">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Highlight */}
        <div className="mb-16 animate-fade-in">
          <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-primary/20">
            <CardContent className="pt-8 pb-8">
              <h3 className="mb-6 text-center text-foreground">My Toolkit</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  "React & Node.js",
                  "Unreal Engine",
                  "Machine Learning",
                  "C++ & Python",
                  "Tailwind CSS",
                  "Game Design",
                  "Full-Stack Dev",
                  "Creative Coding"
                ].map((skill, index) => (
                  <div 
                    key={skill}
                    className="text-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <p className="text-sm font-medium text-foreground">{skill}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ideal Collaboration */}
        <div className="mb-16 animate-fade-in">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center">What Makes a Great Collaboration?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="text-4xl mb-2 block">💡</span>
                  <h4 className="text-foreground mb-2">Shared Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    Aligned goals and mutual excitement for the project
                  </p>
                </div>
                <div>
                  <span className="text-4xl mb-2 block">🔄</span>
                  <h4 className="text-foreground mb-2">Open Communication</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular updates, feedback, and transparent discussions
                  </p>
                </div>
                <div>
                  <span className="text-4xl mb-2 block">🎯</span>
                  <h4 className="text-foreground mb-2">Complementary Skills</h4>
                  <p className="text-sm text-muted-foreground">
                    Each person brings unique strengths to the team
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Card className="bg-gradient-to-br from-card/80 to-primary/5 backdrop-blur-sm border-primary/30">
            <CardContent className="pt-10 pb-10">
              <h3 className="mb-3 text-foreground">Ready to Create Something Amazing?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you. Let's start the conversation!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="hero" size="lg">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send a Message
                </Button>
                <Button variant="minimal" size="lg">
                  Schedule a Meeting
                </Button>
                <Button variant="ghost" size="lg">
                  View GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Collaborators;
