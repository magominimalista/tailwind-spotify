import { Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react"
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/album1.jfif" width={52} height={52} alt="Capa do album Joane de Lady Gaga"/>
          <div className="flex flex-col">
            <strong className="font-normal">Angel Down</strong>
            <span className="text-xs text-zinc-400">Lady Gaga</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center lg:gap-6 sm:gap-2">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black" title="Play Button">
              <Play />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">
              0:31
            </span>
            <div className="h-1 rounded-full lg:w-96 md:w-60 sm:w-40 bg-zinc-600">
              <div className="lg:w-40 md:w-32 sm:w-16 h-1 rounded-full bg-zinc-200"></div>
            </div>
            <span className="text-xs text-zinc-400">
              2:14
            </span>
          </div>
        </div>

        <div className="flex items-center lg:gap-4 sm:gap-2">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className="flex items-center gap-2">
            <Volume size={20} />
            <div className="h-1 rounded-full lg:w-24 md:w-12 sm:w-8 bg-zinc-600">
              <div className="lg:w-20 md:w-8 h-1 sm:w-6 rounded-full bg-zinc-200"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
        
      </footer>
    )
}