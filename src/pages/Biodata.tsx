import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, Linkedin, Github, MapPin, Calendar, GraduationCap, Award, Languages, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Biodata = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-gradient-gold mb-2">P. Hrudai Nirmal</h1>
          <p className="text-xl text-muted-foreground">Computer Science Engineer</p>
        </div>

        {/* Personal Information */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Personal Information</h2>
          <div className="grid gap-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-5 h-5 text-primary" />
              <span>18th December 2005</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Visakhapatanam, Andhra Pradesh, India</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:hrudainirmal5@gmail.com" className="hover:text-primary transition-smooth">
                hrudainirmal5@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span>+91 7799934399</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Linkedin className="w-5 h-5 text-primary" />
              <a 
                href="https://www.linkedin.com/in/hrudai-nirmal-0b589b1b8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Github className="w-5 h-5 text-primary" />
              <a 
                href="https://github.com/Hrudai-Nirmal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h2>
          <div>
            <h3 className="font-semibold text-lg text-foreground">Bachelor of Engineering in Computer Science</h3>
            <p className="text-muted-foreground">RV Institute of Technology and Management</p>
            <p className="text-muted-foreground">2023 - 2027 (Pursuing)</p>
            <p className="text-primary font-semibold mt-2">Current GPA: 8.4</p>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Passionate computer science student with strong skills in web development, game design, and machine learning. 
            Proficient in React, Node.js, Python, and Unreal Engine. Actively seeking internship opportunities to apply 
            and expand my technical skills in real-world projects.
          </p>
        </div>

        {/* Certifications */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Certifications
          </h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              AI/ML Certification
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Unreal Engine Certification
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Agile Certification
            </li>
          </ul>
        </div>

        {/* Languages */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <Languages className="w-6 h-6 text-primary" />
            Languages
          </h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">Telugu</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">English</span>
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">Hindi</span>
            <span className="px-4 py-2 rounded-full bg-card border border-border text-muted-foreground">Kannada (Basic)</span>
          </div>
        </div>

        {/* Hobbies */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <Music className="w-6 h-6 text-primary" />
            Hobbies & Interests
          </h2>
          <p className="text-muted-foreground">Guitar playing and music production</p>
        </div>

        {/* Career Objective */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Career Objective</h2>
          <p className="text-muted-foreground leading-relaxed">
            Currently seeking internship opportunities to gain hands-on experience in software development, 
            web technologies, or game development. Eager to contribute to innovative projects while learning 
            from experienced professionals in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
