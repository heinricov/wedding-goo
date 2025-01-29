import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

export function MusicPlayer({ autoPlay = false }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio("/music/wedding.mp3"));

  useEffect(() => {
    audio.loop = true;

    // Auto play when component mounts if autoPlay is true
    if (autoPlay) {
      audio.play().catch((error) => {
        console.error("Error auto-playing audio:", error);
      });
      setIsPlaying(true);
    }

    // Cleanup on unmount
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, autoPlay]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-4 right-4 z-50 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white/90 transition-all duration-300"
    >
      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
    </button>
  );
}
