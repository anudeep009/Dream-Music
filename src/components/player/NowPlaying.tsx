import { Play, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

export function NowPlaying() {
  return (
    <div className="font-poppins mt-[200px] fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-[#0A0A0A] to-[#0A0A0A]/90 p-4 backdrop-blur-lg lg:relative lg:h-screen lg:w-80">
      <div className="flex flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=300"
          alt="Now Playing"
          className="aspect-square w-full rounded-2xl object-cover"
        />
        
        <div className="mt-2 w-full text-center">
          <h3 className="text-lg font-bold text-white">Beat It</h3>
          <p className="text-sm text-neutral-400">Michael Jackson</p>
        </div>

        <div className="mt-8 w-full">
          <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
          <div className="mt-1 flex justify-between text-xs text-neutral-400">
            <span>2:15</span>
            <span>4:18</span>
          </div>
        </div>

        <div className="mt-4 flex w-full items-center justify-center gap-4">
          <button className="rounded-full p-2 text-neutral-400 transition-colors hover:text-white">
            <Shuffle className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 text-neutral-400 transition-colors hover:text-white">
            <SkipBack className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-red-600 p-4 text-white transition-transform hover:scale-105">
            <Play className="h-6 w-6" />
          </button>
          <button className="rounded-full p-2 text-neutral-400 transition-colors hover:text-white">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 text-neutral-400 transition-colors hover:text-white">
            <Repeat className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 w-full">
          <Slider defaultValue={[80]} max={100} step={1} className="w-full" />
        </div>
      </div>
    </div>
  );
}