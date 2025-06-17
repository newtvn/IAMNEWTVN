
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Activity } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              About Newton
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate full-stack developer, UI/UX designer, and co-founder with a vision for creating innovative digital solutions that make a difference.
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Who I Am</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Newton Brian Wanyonyi Nyongesa, a 21-year-old innovator from Kenya who believes in the power of technology to transform lives. Currently pursuing my Bachelor's in Informatics and Computer Science at Strathmore University, I've already made significant strides in the tech industry.
                </p>
                <p>
                  As the Lead UI/UX Designer at BITZ-ITC, I'm the sole designer and front-end developer for UNICEF's OpenCHS project, a child helpline system deployed across 5 countries including Tanzania, Kenya, Lesotho, and Uganda. This work reflects my commitment to using technology for social impact.
                </p>
                <p>
                  I'm also the co-founder and CEO of Word and Learn, an EdTech platform that leverages AI to revolutionize learning experiences. My journey spans from being a Market Research Analyst at Beats by Dre to serving in various leadership roles at my university.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/3c69cc42-6c83-43c1-bef0-1ebae23587a4.png"
                  alt="Newton Brian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent rounded-lg" />
            </div>
          </div>

          {/* Achievements Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="floating-card bg-card/50">
                <CardHeader>
                  <CardTitle className="text-blue-400">Oracle Hackathon</CardTitle>
                  <CardDescription>Runner-up in East & Central Africa</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Competed against top developers across multiple countries and secured runner-up position.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="floating-card bg-card/50">
                <CardHeader>
                  <CardTitle className="text-green-400">A2SV Hackathon</CardTitle>
                  <CardDescription>Semi-Finalist</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Reached the semifinals of the prestigious Africa to Silicon Valley hackathon.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="floating-card bg-card/50">
                <CardHeader>
                  <CardTitle className="text-purple-400">UNICEF Project</CardTitle>
                  <CardDescription>Lead Designer & Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leading the design and development of OpenCHS across 5 African countries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Floating Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link to="/poetry">
              <Card className="floating-card bg-gradient-to-br from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 cursor-pointer h-48 flex flex-col justify-center items-center text-center transition-all duration-300 animate-float">
                <CardContent className="p-8">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <CardTitle className="text-2xl mb-2">Poetry & Writing</CardTitle>
                  <CardDescription>
                    Explore my creative side through poetry and written expressions
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/running">
              <Card className="floating-card bg-gradient-to-br from-green-600/20 to-teal-600/20 hover:from-green-600/30 hover:to-teal-600/30 cursor-pointer h-48 flex flex-col justify-center items-center text-center transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <CardContent className="p-8">
                  <Activity className="w-12 h-12 mx-auto mb-4 text-green-400" />
                  <CardTitle className="text-2xl mb-2">Running Stats</CardTitle>
                  <CardDescription>
                    Track my fitness journey and running achievements
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing together
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
