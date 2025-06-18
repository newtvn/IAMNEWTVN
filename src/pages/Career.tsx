
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Star, GitFork, Mail, Phone, MapPin } from "lucide-react";

const Career = () => {
  const techStack = [
    { 
      category: "Programming", 
      skills: ["JavaScript (ES6+)", "TypeScript", "PHP", "Java", "C++", "Python", "Go (learning)"] 
    },
    { 
      category: "Frontend", 
      skills: ["HTML5", "CSS3", "Sass/SCSS", "React", "Vue.js", "Nuxt.js (learning)", "Next.js", "Angular (basic)", "Bootstrap", "Tailwind CSS", "Material-UI", "Ant Design", "Chakra UI", "Framer Motion"] 
    },
    { 
      category: "Backend", 
      skills: ["Node.js", "Django", "Django REST Framework", "RESTful APIs", "GraphQL", "JWT", "OAuth", "Nginx", "Apache", "PM2"] 
    },
    { 
      category: "Databases", 
      skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Neo4j", "Firebase", "Supabase", "TypeORM", "Django ORM"] 
    },
    { 
      category: "Cloud & DevOps", 
      skills: ["AWS (EC2)", "Vercel", "Netlify", "Digital Ocean", "Docker", "Docker Compose", "GitHub Actions", "GitLab CI", "Cloudflare", "AWS CloudFront"] 
    },
    { 
      category: "Mobile & Design", 
      skills: ["Flutter (learning)", "Progressive Web Apps", "Figma", "Adobe XD", "Sketch", "Canva", "GIMP", "Wireframing", "Prototyping", "InVision", "Marvel"] 
    },
    { 
      category: "Tools & APIs", 
      skills: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "npm", "yarn", "Webpack", "Vite", "M-Pesa", "Google Maps API", "OpenAI API"] 
    }
  ];

  const projects = [
    {
      id: "safetayaro",
      title: "Safetayaro",
      description: "Food safety platform for substance safety management",
      techStack: ["Web Development", "Database Management"],
      status: "Completed",
      github: "https://newtvn.github.io/Safetayaro/",
      stars: 15,
      forks: 5
    },
    {
      id: "simple-survey",
      title: "Simple Survey",
      description: "Web-based survey system for data collection",
      techStack: ["React", "Node.js", "Database"],
      status: "Completed",
      github: "https://github.com/newtvn/simple_survey_client",
      stars: 8,
      forks: 3
    },
    {
      id: "heartcall",
      title: "HeartCall",
      description: "Health emergency response app linking fast response services",
      techStack: ["Mobile Development", "Healthcare", "Real-time Services"],
      status: "Completed",
      github: "https://github.com/newtvn/HeartCall",
      stars: 22,
      forks: 7
    },
    {
      id: "secureme",
      title: "Secure Me",
      description: "Criminal system analysis platform using Graph Databases",
      techStack: ["Python", "Neo4j", "Graph Databases"],
      status: "Completed",
      github: "https://github.com/newtvn/secureme",
      stars: 18,
      forks: 4
    },
    {
      id: "littlevisions",
      title: "LittleVisions",
      description: "Children's generative AI storytelling platform",
      techStack: ["AI/ML", "React", "OpenAI API"],
      status: "Active",
      github: "https://github.com/newtvn/littlevisions",
      stars: 31,
      forks: 12
    },
    {
      id: "file-verification",
      title: "File Verification",
      description: "CSV validation system for data integrity",
      techStack: ["Python", "Data Processing", "Validation"],
      status: "Completed",
      github: "https://github.com/newtvn/file_verification_app",
      stars: 6,
      forks: 2
    },
    {
      id: "urbanrush",
      title: "Urban Rush",
      description: "3D monkey driving simulation game developed in Unity",
      techStack: ["Unity", "C#", "3D Modeling", "Blender"],
      status: "Completed",
      github: "https://github.com/newtvn/UrbanRush",
      stars: 28,
      forks: 11
    }
  ];

  const workExperience = [
    {
      period: "Mar 2025 - Present",
      role: "UI/UX Designer",
      company: "Bitz.itc",
      description: "Design intuitive interfaces and create wireframes/prototypes for web and mobile applications. Skills: Figma, Adobe XD, Sketch, Wireframing, Prototyping, User Research, Usability Testing, Design Systems"
    },
    {
      period: "Jan 2024 - Present",
      role: "Chief Executive Officer",
      company: "Word and Learn",
      description: "Co-founder leading strategy and UI/UX design. Skills: Project Management, AI Model Training, ALoRA, UI/UX Strategy, Product Development"
    },
    {
      period: "Feb 2024 - Jul 2024",
      role: "Market Research Analyst Extern",
      company: "Beats by Dre",
      description: "Analysed market trends, created reports, and delivered presentations. Skills: Data Analysis, Excel, PowerPoint, Market Research, Statistical Analysis, Reporting"
    },
    {
      period: "Feb 2024 - Apr 2024",
      role: "Full Stack Development Intern",
      company: "Sky World Limited",
      description: "Developed responsive web applications using modern frameworks. Skills: React, Node.js, Express, MongoDB, PostgreSQL, RESTful APIs, Git, Responsive Design"
    },
    {
      period: "Dec 2023 - Present",
      role: "Project Manager",
      company: "SCESA",
      description: "Coordinate events and manage tech communities (MLSA, UI PATH, Intel, IET). Skills: Event Planning, Team Management, Community Building, Technical Leadership, Documentation"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
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
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Avatar className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 profile-glow">
                <AvatarImage 
                  src="/lovable-uploads/3c69cc42-6c83-43c1-bef0-1ebae23587a4.png" 
                  alt="Newton Brian" 
                />
                <AvatarFallback className="bg-green-500 text-white text-xl sm:text-2xl">NB</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 glow-text">
              Newton Brian Nyongesa
            </h1>
            <div className="glass-card p-4 sm:p-6 rounded-3xl max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 text-sm sm:text-base text-muted-foreground">
                <div className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2 text-green-400" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center justify-center">
                  <Phone className="w-4 h-4 mr-2 text-green-400" />
                  <span>(+254) 0110952788</span>
                </div>
                <div className="flex items-center justify-center sm:col-span-2 lg:col-span-1">
                  <Mail className="w-4 h-4 mr-2 text-green-400" />
                  <span>newtvnbrian@gmail.com</span>
                </div>
              </div>
              <div className="mt-3 sm:mt-4">
                <a href="https://github.com/newtvn" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 text-sm sm:text-base">
                  www.github.com/newtvn
                </a>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-400">Work Experience</h2>
            <div className="space-y-4 sm:space-y-6">
              {workExperience.map((exp, i) => (
                <Card key={i} className="floating-card glass-card">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-base sm:text-lg text-green-400">{exp.role}</CardTitle>
                        <CardDescription className="text-emerald-400 text-sm sm:text-base">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-green-400/30 text-green-300 self-start sm:self-auto text-xs sm:text-sm">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-400">Technical Skills</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {techStack.map((category, index) => (
                <Card key={index} className="floating-card glass-card">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="text-base sm:text-lg text-green-400">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-green-500/20 text-green-300 border-green-400/30 mb-1">
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
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-400">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="floating-card glass-card hover:border-green-400/50 transition-all duration-300">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-base sm:text-lg text-green-400">{project.title}</CardTitle>
                        <div className="flex items-center space-x-2 sm:space-x-4 mt-2">
                          <Badge 
                            variant={project.status === "Active" ? "default" : "secondary"}
                            className={project.status === "Active" ? "bg-green-500/20 text-green-300 border-green-400/30 text-xs" : "text-xs"}
                          >
                            {project.status}
                          </Badge>
                          {project.stars && (
                            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <Star className="w-3 h-3" />
                              <span>{project.stars}</span>
                              <GitFork className="w-3 h-3 ml-1 sm:ml-2" />
                              <span>{project.forks}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4">
                    <p className="text-xs sm:text-sm text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-green-400/30 text-green-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link to={`/project/${project.id}`} className="flex-1">
                        <Button size="sm" className="btn-secondary text-xs w-full sm:w-auto">
                          Read More
                        </Button>
                      </Link>
                      {project.github && (
                        <Button size="sm" variant="ghost" className="text-xs hover:text-green-400 w-full sm:w-auto" asChild>
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

          {/* Education & Certifications */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-green-400">Education & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Card className="floating-card glass-card">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-green-400">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Bachelor of Informatics and Computer Science</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Strathmore University | 2021 - Awaiting Graduation</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">High School Diploma</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Alliance High School | 2016 - 2021</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="floating-card glass-card">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-green-400">Certifications & Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {["A2SV Hackathon Semi-Finalist", "Certificate of Excellence (Cisco DevNet)", "Oracle Certificate of Excellence (Hackathon runner-up)", "National Research Fund Finalist (2024)", "Cisco Web Development Certification"].map((cert, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-green-400/30 text-green-300 mr-2 mb-2">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
