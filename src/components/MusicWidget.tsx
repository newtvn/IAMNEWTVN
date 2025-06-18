
import React, { useState } from 'react';
import { Play, Pause, Music, Heart } from 'lucide-react';

const MusicWidget = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="glass-card p-4 rounded-2xl w-72 animate-float">
        <div className="flex items-center space-x-3">
          {/* Album Art */}
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          
          {/* Song Info */}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">
              Holy Ghost
            </div>
            <div className="text-xs text-gray-400 truncate">
              Tom Walker
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`p-1 rounded-full transition-colors ${
                isLiked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>1:23</span>
            <span>3:45</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div 
              className="bg-green-400 h-1 rounded-full transition-all duration-1000"
              style={{ width: isPlaying ? '36%' : '30%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicWidget;
