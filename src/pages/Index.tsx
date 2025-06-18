
import Navigation from "@/components/Navigation";
import DynamicIsland from "@/components/DynamicIsland";
import MusicWidget from "@/components/MusicWidget";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Generate enhanced stars for the background
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 150; i++) {
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
      <DynamicIsland />
      
      {/* Enhanced starry night sky background */}
      <div className="starry-sky">
        {generateStars()}
        <div className="shooting-star" style={{ top: '20%', animationDelay: '2s' }} />
        <div className="shooting-star" style={{ top: '60%', animationDelay: '7s' }} />
        <div className="shooting-star" style={{ top: '40%', animationDelay: '12s' }} />
        <div className="shooting-star" style={{ top: '80%', animationDelay: '15s' }} />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile and Widget Container */}
          <div className="mb-8 flex justify-center items-center relative">
            {/* Enhanced Profile Image with glassmorphism */}
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden glass-card profile-glow animate-float">
                <img
                  src="/lovable-uploads/3c69cc42-6c83-43c1-bef0-1ebae23587a4.png"
                  alt="Newton Brian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-green-400/20 to-emerald-500/20 animate-pulse" />
              {/* Floating particles around profile */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
            </div>
            
            {/* Music Widget positioned to the right of profile */}
            <div className="absolute right-[-320px] top-1/2 transform -translate-y-1/2 hidden lg:block">
              <MusicWidget />
            </div>
          </div>
          
          {/* Navigation arrows with glassmorphism */}
          <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2">
            <div className="w-12 h-12 rounded-full glass-button flex items-center justify-center hover:bg-green-500/20 transition-all duration-300 cursor-pointer">
              <ArrowLeft className="w-6 h-6 text-green-400" />
            </div>
          </div>
          
          <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2">
            <div className="w-12 h-12 rounded-full glass-button flex items-center justify-center hover:bg-green-500/20 transition-all duration-300 cursor-pointer">
              <ArrowRight className="w-6 h-6 text-green-400" />
            </div>
          </div>
          
          {/* Main content with responsive typography */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-3xl max-w-2xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium tracking-wide">
                DESIGNING FOR THE FUTURE
              </p>
              <p className="text-sm md:text-base text-green-400 mt-2 opacity-80">
                Full Stack Developer • UI/UX Designer • AI Enthusiast
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-green-400/70 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              <div className="w-3 h-3 bg-green-400/50 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
              <div className="w-3 h-3 bg-green-400/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
            </div>
            
            <Link to="/about">
              <Button 
                size="lg" 
                className="mt-8 px-8 py-4 text-white btn-primary text-lg font-semibold transform hover:scale-105 transition-all duration-300 rounded-full shadow-lg shadow-green-500/25"
              >
                EXPLORE MY WORK
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Fallback Music Widget for smaller screens */}
      <div className="lg:hidden">
        <MusicWidget />
      </div>
    </div>
  );
};

export default Index;
