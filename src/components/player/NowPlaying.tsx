import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Howl } from 'howler';

const tracks = [
  {
    id: 1,
    title: 'Beat It',
    artist: 'Michael Jackson',
    duration: 258,
    cover: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=300',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 2,
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    duration: 293,
    cover: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=300',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
];

export const NowPlaying: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0); 
  const [sound, setSound] = useState<Howl | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
   
    const newSound = new Howl({
      src: [currentTrack.url],
      html5: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: handleNextTrack,
      onseek: () => setProgress(sound?.seek() as number),
    });

    setSound(newSound);

   
    return () => {
      if (sound) sound.unload();
    };
  }, [currentTrack]);

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (sound?.playing()) {
        setProgress(sound.seek() as number);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sound]);

  const handlePlayPause = () => {
    if (sound) {
      if (sound.playing()) {
        sound.pause();
      } else {
        sound.play();
      }
    }
  };

  const handleNextTrack = () => {
    setProgress(0);
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handlePrevTrack = () => {
    setProgress(0);
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

  const handleSeek = (value: number[]) => {
    const newTime = (value[0] / 100) * currentTrack.duration; 
    sound?.seek(newTime);
    setProgress(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="mt-[300px]">
      <div className="fixed bottom-0 left-0 right-0 lg:relative lg:w-80">
        <div className="m-6 bg-red-900/80 backdrop-blur-lg rounded-xl">
          <div className="flex flex-col items-center">
            <h3 className="hidden font-bold text-white mb-2">Now Playing</h3>

            <img
              src={currentTrack.cover}
              alt={currentTrack.title}
              className="h-32 w-56 rounded-2xl object-cover mt-4 lg:block hidden"
            />

            <div className="mt-2 w-full text-center">
              <h3 className="text-lg font-bold text-white">{currentTrack.title}</h3>
              <p className="text-sm text-neutral-400">{currentTrack.artist}</p>
            </div>

            <div className="mt-4 w-full p-4">
              <Slider
                value={[(progress / currentTrack.duration) * 100]}
                max={100}
                step={1}
                onValueChange={handleSeek}
                className="w-full text-neutral-400"
              />
              <div className="mt-1 flex justify-between text-xs text-neutral-400">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(currentTrack.duration)}</span>
              </div>
            </div>

            <div className="mt-4 flex w-full items-center justify-center gap-2 pb-4">
              <button className="rounded-full p-2 text-neutral-400 transition-colors hover:text-white">
                <Shuffle className="h-5 w-5" />
              </button>
              <button
                className="rounded-full p-2 text-neutral-400 transition-colors hover:text-white"
                onClick={handlePrevTrack}
              >
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                className="rounded-full bg-red-600 p-4 text-white transition-transform hover:scale-105"
                onClick={handlePlayPause}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
              </button>
              <button
                className="rounded-full p-2 text-neutral-400 transition-colors hover:text-white"
                onClick={handleNextTrack}
              >
                <SkipForward className="h-5 w-5" />
              </button>
              <button className="rounded-full p-2 text-neutral-400 transition-colors hover:text-white">
                <Repeat className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
