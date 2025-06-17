
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <Navigation />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 animate-glow">
                <img
                  src="/lovable-uploads/3c69cc42-6c83-43c1-bef0-1ebae23587a4.png"
                  alt="Newton Brian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-500/20 animate-pulse" />
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <ArrowLeft className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {/* Main content */}
          <div className="space-y-8">
            <h1 className="text-8xl md:text-9xl font-bold tracking-wider text-white mb-6">
              N E W T V N
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
              DESIGNING FOR THE FUTURE
            </p>
            
            <div className="flex justify-center space-x-4 mt-8">
              <div className="w-2 h-2 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white/50 rounded-full" />
              <div className="w-2 h-2 bg-white/30 rounded-full" />
              <div className="w-2 h-2 bg-white/20 rounded-full" />
            </div>
            
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="mt-8 px-8 py-3 text-white border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                EXPLORE MY WORK
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Import ArrowLeft from lucide-react
import { ArrowLeft } from "lucide-react";

export default Index;
