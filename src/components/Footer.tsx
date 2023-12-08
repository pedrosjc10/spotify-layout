import { Play, Shuffle, SkipBack, SkipForward, Repeat2Icon, Mic2, Heart, ListMusic, PlaySquare, MonitorSpeaker, Volume2, Minimize2} from 'lucide-react'
import Image from 'next/image'

export function Footer(){
    return(
        <footer className="bg-zinc-800 border-t border-zinc-700 p-5 flex items-center justify-between">
            <div className="flex items-center">
                <Image src="/album.jpeg" className="rounded-md" width={56} height={56} alt="capa do album exaltasamba"/>
                <div className="flex flex-col pl-4">
                    <a href =""  className="font-bold hover:underline">Separação</a>
                    <a href="" className="text-sm text-zinc-400 hover:underline">Exaltasamba</a>
                </div>
                <a href="" className="pl-6 pr-0">
                    <Heart size={15}/>
                </a>

            </div>
            <div className="flex flex-col items-center">
                <div className="flex items-center gap-2">
                    <Shuffle size={20} className="text-zinc-200"/>
                    <SkipBack size={20} className="text-zinc-200"/>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center pl-0.5 text-black">
                        <Play />
                    </button>
                    <SkipForward size={20} className="text-zinc-200"/>
                    <Repeat2Icon size={20} className="text-zinc-200"/>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">0:31</span>
                    <div className="h-1 rounded_full w-96 bg-zinc-600">
                        <div className="bg-green-500 w-40 h-1 flex items-center rounded-md">
                             <div className="w-3 h-3 ml-auto bg-zinc-200 rounded-full"/>
                        </div>
                    </div>
                    <span className="text-xs text-zinc-400">4:32</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <PlaySquare size={20}/>
                <Mic2 size={20}/>
                <ListMusic size={20}/>
                <MonitorSpeaker size={20}/>
                <div className="flex items-center">
                    <Volume2 size={20}/>
                    <div className="bg-green-500 w-20 h-1 flex items-center ml-3 rounded-md">
                        <div className="w-3 h-3 ml-auto bg-zinc-200 rounded-full"/>
                    </div>
                </div>
                <Minimize2 size={20}/>
            </div>

        </footer>
    )
}