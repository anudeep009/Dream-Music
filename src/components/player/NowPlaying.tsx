import { Play, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { Slider } from '@/components/ui/slider';


export function NowPlaying() {
  return (
    <div className='mt-[200px]'>
      <div className="fixed bottom-0 left-0 right-0 lg:relative lg:w-80">
      <div className='m-6 bg-red-900/80 backdrop-blur-l p-10 rounded-xl'>
        <div className="flex flex-col items-center">
        <h3 className="hidden font-bold text-white mb-2">Now Playing</h3>
        
        <img
          src="https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&q=80&w=300"
          alt="Now Playing"
          className="aspect-square rounded-2xl object-cover lg:block hidden"
        />

        <div className="mt-2 w-full text-center">
          <h3 className="text-lg font-bold text-white">Beat It</h3>
          <p className="text-sm text-neutral-400">Michael Jackson</p>
        </div>
        {/* bg-red-900/80 z-50 p-20 backdrop-blur-l */}
        <div className="mt-4 w-full">
          <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
          <div className="mt-1 flex justify-between text-xs text-neutral-400">
            <span>2:15</span>
            <span>4:18</span>
          </div>
        </div>

        <div className="mt-4 flex w-full items-center justify-center gap-2">
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
      </div>
      </div>
    </div>
    </div>
  );
}
