"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { PreviewTrack } from "@/lib/site-data";

type AudioPreviewContextValue = {
  currentTrack: PreviewTrack | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  toggleTrack: (track: PreviewTrack) => void;
  pause: () => void;
  resume: () => void;
  seek: (value: number) => void;
  clear: () => void;
};

const AudioPreviewContext = createContext<AudioPreviewContextValue | null>(null);

export function AudioPreviewProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<PreviewTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "metadata";
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0);
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };

    const handleLoaded = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("durationchange", handleLoaded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.pause();
      audio.src = "";
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("durationchange", handleLoaded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audioRef.current = null;
    };
  }, []);

  const pause = () => {
    audioRef.current?.pause();
  };

  const resume = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    void audio.play().catch(() => {
      setIsPlaying(false);
    });
  };

  const clear = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.src = "";
    setCurrentTrack(null);
    setCurrentTime(0);
    setDuration(30);
    setIsPlaying(false);
  };

  const seek = (value: number) => {
    const audio = audioRef.current;

    if (!audio || !Number.isFinite(audio.duration) || audio.duration <= 0) {
      return;
    }

    audio.currentTime = value;
    setCurrentTime(value);
  };

  const toggleTrack = (track: PreviewTrack) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (currentTrack?.id === track.id) {
      if (audio.paused) {
        void audio.play().catch(() => {
          setIsPlaying(false);
        });
      } else {
        audio.pause();
      }

      return;
    }

    setCurrentTrack(track);
    setCurrentTime(0);
    setDuration(30);
    audio.pause();
    audio.src = track.previewUrl;
    audio.currentTime = 0;
    audio.load();

    void audio.play().catch(() => {
      setIsPlaying(false);
    });
  };

  return (
    <AudioPreviewContext.Provider
      value={{
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        toggleTrack,
        pause,
        resume,
        seek,
        clear,
      }}
    >
      {children}
    </AudioPreviewContext.Provider>
  );
}

export function useAudioPreview() {
  const context = useContext(AudioPreviewContext);

  if (!context) {
    throw new Error("useAudioPreview must be used inside AudioPreviewProvider");
  }

  return context;
}
