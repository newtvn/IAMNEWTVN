
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  const projectData = {
    secureme: {
      title: "Secure Me",
      description: "A comprehensive web-based platform designed to revolutionize criminal system analysis through the power of Graph Databases. This project aims to ease the process of analysis and relationship detection in the current criminal justice system.",
      longDescription: "Secure Me leverages advanced graph database technology to map relationships between criminal entities, incidents, and patterns. The platform provides law enforcement agencies with powerful analytical tools to visualize criminal networks, identify connections that might otherwise go unnoticed, and predict potential criminal activities based on historical data patterns.",
      techStack: ["Python", "Neo4j Graph Database", "React", "D3.js", "Machine Learning"],
      features: [
        "Real-time relationship mapping",
        "Advanced pattern recognition",
        "Interactive data visualization",
        "Predictive analytics",
        "Secure data handling"
      ],
      challenges: [
        "Implementing efficient graph traversal algorithms",
        "Ensuring data privacy and security compliance",
        "Creating intuitive visualizations for complex relationships",
        "Optimizing performance for large datasets"
      ],
      github: "https://github.com/newtvn/secureme",
      status: "Completed"
    },
    littlevisions: {
      title: "LittleVisions",
      description: "An innovative web-based platform that unleashes children's creativity by allowing them to create interactive stories using the power of Generative AI.",
      longDescription: "LittleVisions combines storytelling with cutting-edge AI technology to create an engaging platform where children can bring their imagination to life. The platform uses advanced natural language processing to help children develop their narratives while maintaining age-appropriate content and encouraging creative thinking.",
      techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
      features: [
        "AI-powered story generation",
        "Interactive story elements",
        "Child-safe content filtering",
        "Collaborative storytelling",
        "Visual story presentation"
      ],
      challenges: [
        "Implementing child-safe AI content filtering",
        "Creating engaging user interfaces for children",
        "Balancing AI assistance with creative independence",
        "Real-time collaborative features"
      ],
      github: "https://github.com/newtvn/littlevisions",
      status: "Active"
    },
    openchs: {
      title: "UNICEF OpenCHS",
      description: "A comprehensive child helpline system deployed across 5 African countries, providing critical support services to children in need.",
      longDescription: "As the Lead UI/UX Designer and sole front-end developer for this UNICEF initiative, I've created a robust platform that serves as a lifeline for children across Tanzania, Kenya, Lesotho, Uganda, and Botswana. The system handles emergency calls, provides counseling resources, and connects children with appropriate support services.",
      techStack: ["React", "Node.js", "PostgreSQL", "Twilio API", "AWS"],
      features: [
        "Multi-country deployment",
        "Real-time call handling",
        "Crisis intervention protocols",
        "Multi-language support",
        "Comprehensive reporting system"
      ],
      challenges: [
        "Coordinating across 5 different countries",
        "Ensuring 24/7 system reliability",
        "Implementing multi-language support",
        "Meeting strict security and privacy requirements"
      ],
      countries: ["🇰🇪 Kenya", "🇹🇿 Tanzania", "🇺🇬 Uganda", "🇱🇸 Lesotho", "🇧🇼 Botswana"],
      status: "Active"
    }
  };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/career">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Career
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/career" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Career
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-4xl md:text-6xl font-bold glow-text">{project.title}</h1>
              <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                {project.status}
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            
            {project.countries && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Deployed Countries:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.countries.map((country, i) => (
                    <Badge key={i} variant="outline" className="text-sm">
                      {country}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-4">
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            {/* Overview */}
            <Card className="floating-card bg-card/50">
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="floating-card bg-card/50">
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="floating-card bg-card/50">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="floating-card bg-card/50">
              <CardHeader>
                <CardTitle>Technical Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
