
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Background = () => {
  const education = [
    {
      period: "2021 - Current",
      institution: "Strathmore University",
      degree: "Bachelor's in Informatics and Computer Science",
      description: "Pursuing comprehensive studies in computer science with focus on software development, AI, and data analytics.",
      achievements: [
        "Senate Vice Chairperson",
        "Project Manager - SCESA",
        "Microsoft Student Ambassador",
        "St John Ambulance Secretary"
      ]
    },
    {
      period: "2016 - 2021",
      institution: "Alliance High School",
      degree: "High School Diploma",
      description: "Focused on Natural Sciences, Mathematics, Statistics and Humanities with leadership roles.",
      achievements: [
        "Medical Prefect",
        "House Administrator",
        "Debate Club Member",
        "Science & Robotics Club"
      ]
    }
  ];

  const certifications = [
    {
      title: "Cisco Web Development Certificate",
      issuer: "Cisco Systems",
      description: "Comprehensive web development course covering modern web technologies and best practices."
    },
    {
      title: "Oracle Certificate of Excellence",
      issuer: "Oracle",
      description: "Recognized for exceptional performance in Oracle technologies and hackathon participation."
    },
    {
      title: "Certificate of Excellence",
      issuer: "Rotary Club Alliance High School",
      description: "Awarded for outstanding contribution to community service initiatives."
    },
    {
      title: "St John Ambulance Certification",
      issuer: "St John Ambulance",
      description: "Certified in comprehensive first aid training and emergency care."
    },
    {
      title: "DevNet Certificate",
      issuer: "Cisco",
      description: "Proficiency in developing and maintaining applications on Cisco platforms."
    },
    {
      title: "National Research Fund Finalist",
      issuer: "National Research Fund - Kenya",
      description: "Innovation hackathon finalist fostering technological solutions for youth."
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
              Background
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My educational journey and professional certifications that have shaped my expertise in technology and leadership.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-4 top-16 w-0.5 h-full bg-border" />
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                      <div className="w-4 h-4 bg-background rounded-full" />
                    </div>
                    
                    {/* Content */}
                    <Card className="flex-1 floating-card bg-card/50">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <CardTitle className="text-xl">{edu.degree}</CardTitle>
                            <CardDescription className="text-lg text-blue-400">{edu.institution}</CardDescription>
                          </div>
                          <Badge variant="outline" className="text-sm md:mt-0 mt-2 w-fit">
                            {edu.period}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{edu.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Certifications & Awards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="floating-card bg-card/50 hover:bg-card/70 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-400">{cert.title}</CardTitle>
                    <CardDescription className="font-medium">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Language Skills */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Language Proficiency</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="floating-card bg-card/50">
                <CardHeader>
                  <CardTitle className="text-green-400">English</CardTitle>
                  <CardDescription>Proficient User (C2)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Speaking</span>
                      <span className="text-green-400">C2</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Writing</span>
                      <span className="text-green-400">C2</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Reading</span>
                      <span className="text-green-400">C2</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="floating-card bg-card/50">
                <CardHeader>
                  <CardTitle className="text-blue-400">Kiswahili</CardTitle>
                  <CardDescription>Native Speaker</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Mother tongue with full proficiency in all aspects of communication.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="floating-card bg-card/50">
                <CardHeader>
                  <CardTitle className="text-yellow-400">Luhya</CardTitle>
                  <CardDescription>Independent User (A2)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Good conversational ability in local dialect with cultural understanding.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
