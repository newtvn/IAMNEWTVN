
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Generate stars for the background
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push(
        <div
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <Navigation />
      
      {/* Starry night sky background */}
      <div className="starry-sky">
        {generateStars()}
        <div className="shooting-star" style={{ top: '20%', animationDelay: '2s' }} />
        <div className="shooting-star" style={{ top: '60%', animationDelay: '7s' }} />
        <div className="shooting-star" style={{ top: '40%', animationDelay: '12s' }} />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-emerald-400 animate-glow">
                <img
                  src="/lovable-uploads/3c69cc42-6c83-43c1-bef0-1ebae23587a4.png"
                  alt="Newton Brian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/20 to-green-500/20 animate-pulse" />
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <div className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <ArrowLeft className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
              <ArrowRight className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {/* Main content */}
          <div className="space-y-8">
            <h1 className="text-8xl md:text-9xl font-bold tracking-wider mb-6 newtvn-text">
              N E W T V N
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
              DESIGNING FOR THE FUTURE
            </p>
            
            <div className="flex justify-center space-x-4 mt-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-emerald-400/50 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <div className="w-2 h-2 bg-emerald-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <div className="w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
            </div>
            
            <Link to="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="mt-8 px-8 py-4 text-white border-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300 transform hover:scale-105 rounded-2xl"
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

export default Index;
