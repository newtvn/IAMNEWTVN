
import React, { useState } from 'react';
import { Play, Pause, Music, Heart, Wifi, WifiOff } from 'lucide-react';
import { useSpotify } from '../hooks/useSpotify';
import { Button } from './ui/button';

const MusicWidget = () => {
  const [isLiked, setIsLiked] = useState(true);
  const { currentTrack, isConnected, isLoading, error, connectToSpotify, disconnect } = useSpotify();

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isConnected) {
    return (
      <div className="z-40">
        <div className="glass-card p-4 rounded-2xl w-72 animate-float">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Music className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-white mb-2">Connect to Spotify</p>
            <p className="text-xs text-gray-400 mb-4">See what you're currently playing</p>
            <Button 
              onClick={connectToSpotify}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              size="sm"
            >
              <Wifi className="w-4 h-4 mr-2" />
              Connect Spotify
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading && !currentTrack) {
    return (
      <div className="z-40">
        <div className="glass-card p-4 rounded-2xl w-72 animate-float">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3 animate-pulse">
              <Music className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-white">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !currentTrack) {
    return (
      <div className="z-40">
        <div className="glass-card p-4 rounded-2xl w-72 animate-float">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Music className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-white mb-2">Nothing playing</p>
            <p className="text-xs text-gray-400 mb-2">Start playing music on Spotify</p>
            <Button 
              onClick={disconnect}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              <WifiOff className="w-3 h-3 mr-1" />
              Disconnect
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const { item: track, is_playing, progress_ms } = currentTrack;
  const progressPercentage = (progress_ms / track.duration_ms) * 100;

  return (
    <div className="z-40">
      <div className="glass-card p-4 rounded-2xl w-72 animate-float">
        <div className="flex items-center space-x-3">
          {/* Album Art */}
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            {track.album.images[0] ? (
              <img 
                src={track.album.images[0].url} 
                alt={track.album.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
            )}
          </div>
          
          {/* Song Info */}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">
              {track.name}
            </div>
            <div className="text-xs text-gray-400 truncate">
              {track.artists.map(artist => artist.name).join(', ')}
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
            
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              {is_playing ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>{formatTime(progress_ms)}</span>
            <span>{formatTime(track.duration_ms)}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div 
              className="bg-green-400 h-1 rounded-full transition-all duration-1000"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
        
        {/* Disconnect button */}
        <div className="mt-2 text-center">
          <button
            onClick={disconnect}
            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            <WifiOff className="w-3 h-3 inline mr-1" />
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicWidget;
