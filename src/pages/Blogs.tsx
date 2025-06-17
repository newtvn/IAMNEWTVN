
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Leveraging Graph Databases for Criminal Analysis",
      description: "A deep dive into how graph databases can revolutionize criminal justice analysis and relationship detection.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Graph Databases", "Criminal Justice", "Data Analysis"]
    },
    {
      id: 2,
      title: "Building Child-Safe AI Applications",
      description: "Exploring the challenges and solutions in creating AI-powered platforms that prioritize child safety and appropriate content filtering.",
      date: "2024-02-28",
      readTime: "6 min read",
      category: "AI Ethics",
      tags: ["AI Safety", "Child Protection", "Content Filtering"]
    },
    {
      id: 3,
      title: "UI/UX Design for Crisis Management Systems",
      description: "Design principles and considerations when building user interfaces for emergency response and crisis management platforms.",
      date: "2024-01-20",
      readTime: "12 min read",
      category: "Design",
      tags: ["UI/UX", "Crisis Management", "Emergency Response"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">Academic Writings</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing insights and research on technology, design, and social impact through academic writing and thought leadership.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="floating-card bg-card/50 cursor-pointer hover:bg-card/70 transition-colors">
                <CardHeader>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {post.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="mr-2">Read More</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center">
            <Card className="floating-card bg-card/30 border-dashed">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-2xl font-semibold mb-4">More Coming Soon</h3>
                <p className="text-muted-foreground">
                  I'm currently working on new academic papers and research articles. 
                  Stay tuned for more insights on technology, design, and social impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
