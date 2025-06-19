
import { useState, useEffect } from 'react';
import { spotifyService, SpotifyPlaybackState } from '../services/spotifyService';

export const useSpotify = () => {
  const [currentTrack, setCurrentTrack] = useState<SpotifyPlaybackState | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for access token in URL hash (after OAuth redirect)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.slice(1));
      const accessToken = params.get('access_token');
      
      if (accessToken) {
        spotifyService.setAccessToken(accessToken);
        setIsConnected(true);
        // Clean up the URL
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } else {
      // Check if we have a stored token
      const token = spotifyService.getAccessToken();
      if (token) {
        setIsConnected(true);
      }
    }
  }, []);

  const fetchCurrentTrack = async () => {
    if (!isConnected) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const track = await spotifyService.getCurrentlyPlaying();
      setCurrentTrack(track);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch current track');
      console.error('Error fetching current track:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const connectToSpotify = () => {
    const authUrl = spotifyService.generateAuthUrl();
    window.location.href = authUrl;
  };

  const disconnect = () => {
    localStorage.removeItem('spotify_access_token');
    setIsConnected(false);
    setCurrentTrack(null);
  };

  // Poll for current track every 5 seconds when connected
  useEffect(() => {
    if (!isConnected) return;

    fetchCurrentTrack();
    const interval = setInterval(fetchCurrentTrack, 5000);

    return () => clearInterval(interval);
  }, [isConnected]);

  return {
    currentTrack,
    isConnected,
    isLoading,
    error,
    connectToSpotify,
    disconnect,
    refreshTrack: fetchCurrentTrack,
  };
};
