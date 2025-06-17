
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

const Career = () => {
  const techStack = [
    { category: "Frontend", skills: ["React", "HTML", "CSS", "JavaScript", "Bootstrap"] },
    { category: "Backend", skills: ["Python", "PHP", "Java", "C++"] },
    { category: "Design", skills: ["UI/UX Design", "Figma", "Adobe Creative Suite"] },
    { category: "Tools", skills: ["Microsoft Office", "Git", "Oracle", "Unity"] },
  ];

  const projects = [
    {
      id: "secureme",
      title: "Secure Me",
      description: "A web-based platform for criminal system analysis using Graph Databases",
      techStack: ["Python", "Graph Databases", "Web Development"],
      status: "Completed",
      github: "https://github.com/newtvn/secureme"
    },
    {
      id: "littlevisions",
      title: "LittleVisions",
      description: "Interactive storytelling platform for children using Generative AI",
      techStack: ["AI/ML", "React", "Node.js"],
      status: "Active",
      github: "https://github.com/newtvn/littlevisions"
    },
    {
      id: "safetyaro",
      title: "Safetyaro",
      description: "Food safety company platform for substance safety management",
      techStack: ["Web Development", "Database Management"],
      status: "Completed",
      github: "https://newtvn.github.io/Safetyaro/"
    },
    {
      id: "heartcall",
      title: "HeartCall",
      description: "Mobile app linking fast response services to health-needy people",
      techStack: ["Mobile Development", "Healthcare", "Real-time Services"],
      status: "Completed",
      github: "https://github.com/newtvn/HeartCall"
    },
    {
      id: "urbanrush",
      title: "Urban Rush",
      description: "3D monkey driving simulation game developed in Unity with C#",
      techStack: ["Unity", "C#", "3D Modeling", "Blender"],
      status: "Completed",
      github: "https://github.com/newtvn/UrbanRush"
    },
    {
      id: "openchs",
      title: "UNICEF OpenCHS",
      description: "Child helpline system deployed across 5 African countries",
      techStack: ["React", "UI/UX Design", "Multi-country Deployment"],
      status: "Active",
      countries: ["🇰🇪", "🇹🇿", "🇺🇬", "🇱🇸", "🇧🇼"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              Career
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey, technical expertise, and the projects that define my contribution to technology and innovation.
            </p>
          </div>

          {/* Current Roles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Current Positions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="floating-card bg-gradient-to-br from-blue-600/20 to-purple-600/20">
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
              
              <Card className="floating-card bg-gradient-to-br from-green-600/20 to-teal-600/20">
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

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((category, index) => (
                <Card key={index} className="floating-card bg-card/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs mr-1 mb-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Projects Showcase */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Project Showcase</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="floating-card bg-card/50 hover:bg-card/70 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <Badge 
                          variant={project.status === "Active" ? "default" : "secondary"}
                          className="text-xs mt-2"
                        >
                          {project.status}
                        </Badge>
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
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techStack.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link to={`/project/${project.id}`}>
                        <Button size="sm" variant="outline" className="text-xs">
                          Read More
                        </Button>
                      </Link>
                      {project.github && (
                        <Button size="sm" variant="ghost" className="text-xs" asChild>
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

          {/* Experience Timeline */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
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
                <Card key={i} className="floating-card bg-card/50">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-lg">{exp.role}</CardTitle>
                        <CardDescription className="text-blue-400">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{exp.period}</Badge>
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
