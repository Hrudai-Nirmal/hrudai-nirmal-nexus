import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Recruiters = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack web application with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      role: "Full Stack Developer",
    },
    {
      title: "Game Engine Framework",
      description: "Custom game framework built with C++ and Unreal Engine",
      tech: ["C++", "Unreal Engine", "Blueprint"],
      role: "Game Developer",
    },
    {
      title: "ML Image Classifier",
      description: "Machine learning model for image recognition with 94% accuracy",
      tech: ["Python", "TensorFlow", "NumPy", "Pandas"],
      role: "ML Engineer",
    },
  ];

  const skills = {
    "Frontend": ["React", "JavaScript", "CSS", "Tailwind CSS"],
    "Backend": ["Node.js", "Python", "Java"],
    "Game Dev": ["Unreal Engine", "C++", "C"],
    "Data & ML": ["Machine Learning", "Python", "Data Analysis"],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Profile Section */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="mb-2 text-foreground">Hrudai Nirmal</h1>
              <p className="text-xl text-primary mb-2">Computer Science Engineer</p>
              <p className="text-muted-foreground">
                Specialized in Web Development & Game Design
              </p>
            </div>
            <Button variant="hero">
              Download CV
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle>Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science Engineer with expertise in full-stack web development and game design. 
                Proficient in modern web technologies (React, Node.js, Tailwind CSS) and game development 
                (Unreal Engine, C++). Strong foundation in multiple programming languages and machine learning. 
                Proven ability to deliver high-quality projects combining technical skills with creative problem-solving.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-12 animate-fade-in">
          <h2 className="mb-6 text-foreground">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, techs]) => (
              <Card key={category} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="animate-fade-in">
          <h2 className="mb-6 text-foreground">Key Projects</h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card/50 hover:bg-card transition-smooth"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="text-primary text-sm mt-1">
                        {project.role}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
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
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-card/50">
            <CardContent className="pt-6">
              <h3 className="mb-2 text-foreground">Interested in working together?</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently open to new opportunities
              </p>
              <Button variant="hero" size="lg">
                Get in Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Recruiters;
