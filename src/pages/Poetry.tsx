
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Calendar } from "lucide-react";

const Poetry = () => {
  const poems = [
    {
      id: 1,
      title: "Digital Dreams",
      excerpt: "In circuits and code we find our way,\nThrough algorithms that light the day...",
      theme: "Technology",
      date: "2024-03-10",
      fullPoem: `In circuits and code we find our way,
Through algorithms that light the day,
Where ones and zeros dance in time,
Creating worlds through rhythm and rhyme.

The screen glows bright with endless possibility,
Each keystroke holds responsibility,
To build, to create, to innovate,
A digital future we contemplate.`
    },
    {
      id: 2, 
      title: "Ubuntu Spirit",
      excerpt: "I am because we are, they say,\nIn Kenya's heart, Ubuntu's way...",
      theme: "Culture",
      date: "2024-02-15",
      fullPoem: `I am because we are, they say,
In Kenya's heart, Ubuntu's way,
Connected souls across the land,
Together we rise, hand in hand.

From Nairobi's streets to mountain peaks,
The spirit of community speaks,
In every smile, in every deed,
Ubuntu plants the helping seed.`
    },
    {
      id: 3,
      title: "Code of Life",
      excerpt: "Like functions that we write with care,\nLife's logic flows everywhere...",
      theme: "Philosophy",
      date: "2024-01-20",
      fullPoem: `Like functions that we write with care,
Life's logic flows everywhere,
Each decision is a branch we take,
Each choice determines what we make.

Debug the errors, refactor the pain,
Optimize joy, let love remain,
For in the end, our human code,
Determines the path that we have strode.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">Poetry Corner</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Where technology meets humanity - exploring life, culture, and dreams through verse.
            </p>
          </div>

          {/* Poetry Collection */}
          <div className="space-y-8">
            {poems.map((poem) => (
              <Card key={poem.id} className="floating-card bg-card/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                        {poem.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(poem.date).toLocaleDateString()}
                        </div>
                        <Badge variant="outline">{poem.theme}</Badge>
                      </div>
                    </div>
                    <Heart className="w-5 h-5 text-red-400 opacity-70" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-muted-foreground italic leading-relaxed">
                      {poem.excerpt}
                    </div>
                    <details className="cursor-pointer group">
                      <summary className="text-blue-400 hover:text-blue-300 transition-colors list-none">
                        <span className="group-open:hidden">Read full poem ↓</span>
                        <span className="hidden group-open:inline">Hide poem ↑</span>
                      </summary>
                      <div className="mt-4 p-4 bg-muted/20 rounded-lg">
                        <pre className="whitespace-pre-wrap font-serif text-sm leading-relaxed">
                          {poem.fullPoem}
                        </pre>
                      </div>
                    </details>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Inspiration Section */}
          <div className="mt-16">
            <Card className="floating-card bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <CardContent className="pt-8 pb-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Poetry as Expression</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Poetry allows me to explore the intersection of technology and humanity. 
                  Through verse, I express thoughts on culture, innovation, and the human 
                  experience in our digital age. Each poem is a reflection of moments, 
                  ideas, and dreams that shape our world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poetry;
