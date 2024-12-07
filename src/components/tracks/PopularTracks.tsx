import React, { useState } from 'react';
import { Play, Pause, Clock, Loader } from 'lucide-react';
import { Howl, Howler } from 'howler';
import '../../css/scroll.css';

declare module 'howler' {
  interface HowlerGlobal {
    _autoResume?: () => void;
  }
}

Howler.html5PoolSize = 20;

interface Track {
  id: number;
  title: string;
  plays: string;
  duration: string;
  album: string;
  cover: string;
  url: string;
}

const tracks: Track[] = [
  {
    id: 1,
    title: 'Billie Jean',
    plays: '1,040,811,084',
    duration: '4:53',
    album: 'Thriller 25 Super Deluxe',
    cover: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=100',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  },
  {
    id: 2,
    title: 'Beat It',
    plays: '643,786,045',
    duration: '4:18',
    album: 'Thriller 25 Super Deluxe',
    cover: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=100',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  },
  {
    id: 3,
    title: 'Smooth Criminal - 2012 Remaster',
    plays: '407,234,004',
    duration: '4:17',
    album: 'Thriller 25 Super Deluxe',
    cover: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=100',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  },
  {
    id: 4,
    title: "Don't Stop 'Til You Get Enough",
    plays: '316,391,952',
    duration: '6:05',
    album: 'Bad 25th Anniversary',
    cover: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=100',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  },
  {
    id: 5,
    title: 'Rock With You - Single Version',
    plays: '268,187,218',
    duration: '3:40',
    album: 'Off The Wall',
    cover: 'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=100',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  },
];

export const PopularTracks: React.FC = () => {
  const [currentTrackId, setCurrentTrackId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Define the sounds object with proper typing
  const sounds: Record<number, Howl> = tracks.reduce((acc, track) => {
    acc[track.id] = new Howl({
      src: [track.url],
      html5: true,
      onload: () => setIsLoading(false),
      onplay: () => setIsLoading(false),
      onplayerror: () => {
        acc[track.id].once('unlock', () => acc[track.id].play());
      },
    });
    return acc;
  }, {} as Record<number, Howl>);

  const handlePlayPause = (id: number) => {
    if (isLoading) return;

    // Safeguard for _autoResume if it exists
    Howler._autoResume?.();

    if (currentTrackId === id) {
      if (sounds[id].playing()) {
        sounds[id].pause();
        setCurrentTrackId(null);
      } else {
        setIsLoading(true);
        sounds[id].play();
        setCurrentTrackId(id);
      }
    } else {
      if (currentTrackId !== null) {
        sounds[currentTrackId].stop();
      }
      setIsLoading(true);
      sounds[id].play();
      setCurrentTrackId(id);
    }
  };

  return (
    <div className="font-poppins mt-4 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-xl ml-6 font-bold text-white">Popular</h2>
        <button className="text-sm font-medium text-neutral-400 mr-6 transition-colors hover:text-white">
          See All
        </button>
      </div>
      <div className="mt-2 overflow-hidden rounded-xl">
        <div className="max-h-80 overflow-y-auto scrollbar-hidden">
          <table className="w-full table-fixed text-neutral-200">
            <thead>
              <tr className="border-b border-neutral-800 text-left text-sm text-neutral-400">
                <th className="w-12 p-4">#</th>
                <th className="p-4">TITLE</th>
                <th className="hidden p-4 md:table-cell">PLAYS</th>
                <th className="w-20 p-4 text-center">
                  <Clock className="h-4 w-4 mx-auto" />
                </th>
                <th className="hidden p-4 lg:table-cell">ALBUM</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map((track) => (
                <tr
                  key={track.id}
                  className={`group cursor-pointer text-neutral-200 transition-colors hover:bg-red-900/10 ${
                    currentTrackId === track.id ? 'bg-red-900/50 text-white' : ''
                  }`}
                  onClick={() => handlePlayPause(track.id)}
                >
                  <td className="p-4">
                    <div className="relative flex h-12 w-12 items-center justify-center">
                      {isLoading && currentTrackId === track.id ? (
                        <Loader className="h-4 w-4 animate-spin" />
                      ) : currentTrackId === track.id && sounds[track.id].playing() ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={track.cover}
                        alt={track.title}
                        className="h-12 w-12 rounded-md object-cover"
                      />
                      <span className="font-medium">{track.title}</span>
                    </div>
                  </td>
                  <td className="hidden p-4 md:table-cell">{track.plays}</td>
                  <td className="p-4 text-center">{track.duration}</td>
                  <td className="hidden truncate p-4 lg:table-cell">{track.album}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
