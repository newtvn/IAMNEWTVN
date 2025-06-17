
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, MapPin, Clock, Target, Trophy, TrendingUp } from "lucide-react";

const Running = () => {
  const stats = {
    totalDistance: "1,247",
    totalRuns: "156",
    averagePace: "4:42",
    personalBest: "21:30",
    weeklyGoal: "25"
  };

  const recentRuns = [
    {
      id: 1,
      date: "2024-03-18",
      distance: "8.2 km",
      time: "46:24",
      pace: "4:39 /km",
      location: "Karura Forest",
      type: "Long Run"
    },
    {
      id: 2,
      date: "2024-03-15",
      distance: "7.0 km",
      time: "28:15",
      pace: "4:39 /km",
      location: "Nairobi CBD",
      type: "Tempo Run"
    },
    {
      id: 3,
      date: "2024-03-12",
      distance: "14.5 km",
      time: "59:30",
      pace: "4:50 /km",
      location: "Ngong Hills",
      type: "Trail Run"
    }
  ];

  const achievements = [
    {
      title: "First 10K",
      description: "Completed my first 15K run in under 60 minutes",
      date: "2023-08-15",
      icon: Trophy
    },
    {
      title: "Consistency Champion",
      description: "Ran for 30 consecutive days",
      date: "2024-01-30",
      icon: Target
    },
    {
      title: "Distance Milestone", 
      description: "Reached 1000km total distance",
      date: "2024-02-20",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">Running Journey</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Balancing code and kilometers - tracking my journey through Nairobi's streets and trails.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <Card className="floating-card bg-card/50 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-blue-400">{stats.totalDistance}</div>
                <div className="text-sm text-muted-foreground">Total KM</div>
              </CardContent>
            </Card>
            
            <Card className="floating-card bg-card/50 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-green-400">{stats.totalRuns}</div>
                <div className="text-sm text-muted-foreground">Total Runs</div>
              </CardContent>
            </Card>
            
            <Card className="floating-card bg-card/50 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-purple-400">{stats.averagePace}</div>
                <div className="text-sm text-muted-foreground">Avg Pace</div>
              </CardContent>
            </Card>
            
            <Card className="floating-card bg-card/50 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-yellow-400">{stats.personalBest}</div>
                <div className="text-sm text-muted-foreground">5K PB</div>
              </CardContent>
            </Card>
            
            <Card className="floating-card bg-card/50 text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-red-400">{stats.weeklyGoal}</div>
                <div className="text-sm text-muted-foreground">Weekly Goal</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Runs */}
            <div>
              <Card className="floating-card bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-blue-400" />
                    Recent Runs
                  </CardTitle>
                  <CardDescription>Latest running activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentRuns.map((run) => (
                      <div key={run.id} className="border rounded-lg p-4 hover:bg-muted/10 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">{run.type}</Badge>
                            <span className="text-sm text-muted-foreground">
                              {new Date(run.date).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="text-lg font-semibold">{run.distance}</div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="w-4 h-4 mr-1" />
                            {run.time}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {run.location}
                          </div>
                          <div className="text-blue-400 font-medium">{run.pace}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div>
              <Card className="floating-card bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                    Achievements
                  </CardTitle>
                  <CardDescription>Milestones and personal records</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-muted/10 transition-colors">
                        <div className="p-2 bg-yellow-400/10 rounded-full">
                          <achievement.icon className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {achievement.description}
                          </p>
                          <div className="text-xs text-muted-foreground">
                            {new Date(achievement.date).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Running Philosophy */}
          <div className="mt-12">
            <Card className="floating-card bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20">
              <CardContent className="pt-8 pb-8">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-2xl font-semibold mb-4">Why I Run</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Running has become more than just exercise - it's my moving meditation. 
                    In the early mornings through Nairobi's streets, I find clarity for solving 
                    complex coding problems and inspiration for new projects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every kilometer is a reminder that persistence in running mirrors persistence 
                    in development - consistent effort, gradual improvement, and celebrating 
                    every milestone along the way.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Running;
