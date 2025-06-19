
const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';

export interface SpotifyTrack {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string; height: number; width: number }>;
  };
  duration_ms: number;
}

export interface SpotifyPlaybackState {
  is_playing: boolean;
  progress_ms: number;
  item: SpotifyTrack;
}

export class SpotifyService {
  private accessToken: string | null = null;

  setAccessToken(token: string) {
    this.accessToken = token;
    localStorage.setItem('spotify_access_token', token);
  }

  getAccessToken(): string | null {
    if (!this.accessToken) {
      this.accessToken = localStorage.getItem('spotify_access_token');
    }
    return this.accessToken;
  }

  async getCurrentlyPlaying(): Promise<SpotifyPlaybackState | null> {
    const token = this.getAccessToken();
    if (!token) {
      throw new Error('No access token available');
    }

    try {
      const response = await fetch(`${SPOTIFY_API_BASE}/me/player/currently-playing`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 204) {
        return null; // No content - nothing playing
      }

      if (!response.ok) {
        throw new Error(`Spotify API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching currently playing:', error);
      throw error;
    }
  }

  generateAuthUrl(): string {
    const clientId = 'YOUR_SPOTIFY_CLIENT_ID'; // This will need to be set
    const redirectUri = window.location.origin;
    const scopes = ['user-read-currently-playing', 'user-read-playback-state'];
    
    const params = new URLSearchParams({
      client_id: clientId,
      response_type: 'token',
      redirect_uri: redirectUri,
      scope: scopes.join(' '),
    });

    return `https://accounts.spotify.com/authorize?${params.toString()}`;
  }
}

export const spotifyService = new SpotifyService();
