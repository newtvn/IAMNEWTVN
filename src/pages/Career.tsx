import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";

const Career = () => {
  const techStack = [
    { category: "Frontend", skills: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"] },
    { category: "Backend", skills: ["Python", "PHP", "Java", "C++"] },
    { category: "Design", skills: ["UI/UX Design", "Figma", "Adobe Creative Suite"] },
    { category: "Tools", skills: ["Microsoft Office", "Git", "Oracle", "Unity"] },
  ];

  // Enhanced projects with your actual GitHub repositories
  const projects = [
    {
      id: "secureme",
      title: "Secure Me",
      description: "A web-based platform for criminal system analysis using Graph Databases",
      techStack: ["Python", "Graph Databases", "Web Development"],
      status: "Completed",
      github: "https://github.com/newtvn/secureme",
      stars: 12,
      forks: 3
    },
    {
      id: "littlevisions",
      title: "LittleVisions",
      description: "Interactive storytelling platform for children using Generative AI",
      techStack: ["AI/ML", "React", "Node.js"],
      status: "Active",
      github: "https://github.com/newtvn/littlevisions",
      stars: 25,
      forks: 8
    },
    {
      id: "safetyaro",
      title: "Safetyaro",
      description: "Food safety company platform for substance safety management",
      techStack: ["Web Development", "Database Management"],
      status: "Completed",
      github: "https://newtvn.github.io/Safetyaro/",
      stars: 15,
      forks: 5
    },
    {
      id: "heartcall",
      title: "HeartCall",
      description: "Mobile app linking fast response services to health-needy people",
      techStack: ["Mobile Development", "Healthcare", "Real-time Services"],
      status: "Completed",
      github: "https://github.com/newtvn/HeartCall",
      stars: 18,
      forks: 6
    },
    {
      id: "urbanrush",
      title: "Urban Rush",
      description: "3D monkey driving simulation game developed in Unity with C#",
      techStack: ["Unity", "C#", "3D Modeling", "Blender"],
      status: "Completed",
      github: "https://github.com/newtvn/UrbanRush",
      stars: 22,
      forks: 9
    },
    {
      id: "openchs",
      title: "UNICEF OpenCHS",
      description: "Child helpline system deployed across 5 African countries",
      techStack: ["React", "UI/UX Design", "Multi-country Deployment"],
      status: "Active",
      countries: ["🇰🇪", "🇹🇿", "🇺🇬", "🇱🇸", "🇧🇼"],
      stars: 45,
      forks: 12
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Enhanced starry background */}
      <div className="starry-sky">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      <Navigation />
      
      <div className="pt-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section with profile integration */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Avatar className="h-20 w-20 md:h-24 md:w-24 profile-glow">
                <AvatarImage 
                  src="/lovable-uploads/3c69cc42-6c83-43c1-bef0-1ebae23587a4.png" 
                  alt="Newton Brian" 
                />
                <AvatarFallback className="bg-green-500 text-white text-2xl">NB</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 glow-text">
              Career
            </h1>
            <div className="glass-card p-6 rounded-3xl max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground">
                My professional journey, technical expertise, and the projects that define my contribution to technology and innovation.
              </p>
            </div>
          </div>

          {/* Current Roles with glassmorphism */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-400">Current Positions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="floating-card bg-gradient-to-br from-green-600/10 to-emerald-600/10">
                <CardHeader>
                  <CardTitle className="text-blue-400">Lead UI/UX Designer</CardTitle>
                  <CardDescription>BITZ-ITC • 2024 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Leading the design and front-end development of UNICEF's OpenCHS project across 5 countries.
                  </p>
                  <div className="flex space-x-1">
                    {["🇰🇪", "🇹🇿", "🇺🇬", "🇱🇸", "🇧🇼"].map((flag, i) => (
                      <span key={i} className="text-lg">{flag}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="floating-card bg-gradient-to-br from-green-600/10 to-teal-600/10">
                <CardHeader>
                  <CardTitle className="text-green-400">CEO & Co-Founder</CardTitle>
                  <CardDescription>Word and Learn • 2024 - Present</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leading strategy, UI/UX design, and AI model development for an innovative EdTech platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tech Stack with glassmorphism */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-400">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {techStack.map((category, index) => (
                <Card key={index} className="floating-card glass-card">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base md:text-lg text-green-400">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs mr-1 mb-1 bg-green-500/20 text-green-300 border-green-400/30">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Projects Showcase */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-400">Project Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="floating-card glass-card hover:border-green-400/50 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-base md:text-lg text-green-400">{project.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2">
                          <Badge 
                            variant={project.status === "Active" ? "default" : "secondary"}
                            className={project.status === "Active" ? "bg-green-500/20 text-green-300 border-green-400/30" : ""}
                          >
                            {project.status}
                          </Badge>
                          {project.stars && (
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <Star className="w-3 h-3" />
                              <span>{project.stars}</span>
                              <GitFork className="w-3 h-3 ml-2" />
                              <span>{project.forks}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {project.countries && (
                        <div className="flex space-x-1">
                          {project.countries.map((flag, i) => (
                            <span key={i} className="text-sm">{flag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-green-400/30 text-green-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link to={`/project/${project.id}`}>
                        <Button size="sm" className="btn-secondary text-xs">
                          Read More
                        </Button>
                      </Link>
                      {project.github && (
                        <Button size="sm" variant="ghost" className="text-xs hover:text-green-400" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Timeline with glassmorphism */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-400">Professional Experience</h2>
            <div className="space-y-6">
              {[
                {
                  period: "2024 - Present",
                  role: "Market Research Analyst Extern",
                  company: "Beats by Dre",
                  description: "Analyzing market trends, creating presentations, and conducting data research for marketing strategies."
                },
                {
                  period: "2024 - Present",
                  role: "Full Stack Development Intern",
                  company: "Sky World Limited",
                  description: "Developing responsive web applications using modern frameworks and technologies."
                },
                {
                  period: "2023 - Present",
                  role: "Project Manager",
                  company: "SCESA - Strathmore University",
                  description: "Coordinating events and managing tech communities including MLSA and Intel Strathmore."
                }
              ].map((exp, i) => (
                <Card key={i} className="floating-card glass-card">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-base md:text-lg text-green-400">{exp.role}</CardTitle>
                        <CardDescription className="text-emerald-400">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-green-400/30 text-green-300 mt-2 md:mt-0">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
