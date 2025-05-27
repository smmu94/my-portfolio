"use client";
import NextIcon from "public/svgs/next.svg";
import PauseIcon from "public/svgs/pause.svg";
import PlayIcon from "public/svgs/play.svg";
import PreviusIcon from "public/svgs/previous.svg";
import VinylIcon from "public/svgs/vinyl.svg";
import { useEffect, useRef, useState } from "react";
import { playlist } from "./constants";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const isNewTrack = audio.src !== location.origin + playlist[currentTrack];
    if (isNewTrack) {
      audio.src = playlist[currentTrack];
    }
    isPlaying ? audio.play() : audio.pause();
  }, [currentTrack, isPlaying]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const goToTrack = (index: number) => {
    const total = playlist.length;
    const newIndex = (index + total) % total;
    setCurrentTrack(newIndex);
    setIsPlaying(true);
  };

  const nextTrack = () => goToTrack(currentTrack + 1);

  const prevTrack = () => goToTrack(currentTrack - 1);

  const handleEnded = () => {
    nextTrack();
  };

  return (
    <div className="flex items-center space-x-3" data-testid="music-player">
      <VinylIcon
        className={`hidden md:block w-20 h-20 md:w-24 md:h-24 fill-secondary ${
          isPlaying ? "animate-spin-slow" : ""
        }`}
      />
      <div className="bg-dark border border-secondary rounded-xl flex justify-between items-center p-1 shadow-neon w-[100px] md:w-[140px]">
        <button
          onClick={prevTrack}
          aria-label="Previous track"
          type="button"
          className="transition-transform hover:scale-110 p-1"
          data-testid="previous-button"
        >
          <PreviusIcon width={24} height={24} className="fill-secondary" />
        </button>
        <button
          onClick={togglePlayPause}
          aria-label="Play/Pause"
          type="button"
          className="p-1 transition-transform hover:scale-110"
          data-testid="play-pause-button"
        >
          {isPlaying ? (
            <PauseIcon width={24} height={24} className="fill-secondary" />
          ) : (
            <PlayIcon width={24} height={24} className="fill-secondary" />
          )}
        </button>
        <button
          onClick={nextTrack}
          aria-label="Next track"
          type="button"
          className="transition-transform hover:scale-110 p-1"
          data-testid="next-button"
        >
          <NextIcon width={24} height={24} className="fill-secondary" />
        </button>
      </div>
      <audio ref={audioRef} onEnded={handleEnded} role="audio" />
    </div>
  );
};

export default MusicPlayer;
