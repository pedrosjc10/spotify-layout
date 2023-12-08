import { Footer } from '@/components/Footer'
import { Aside } from '@/components/Aside'
import { ChevronRight, ChevronLeft, Play} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
        <div className="flex flex-1">
            <Aside />
            <main className="flex-1 p-6 overflow-y">
                <div className="flex items-center gap-4">
                    <button className="rounded-full bg-black/40 p-1">
                        <ChevronLeft />
                    </button>
                    <button className="rounded-full bg-black/40 p-1">
                        <ChevronRight />
                    </button>
                </div>

                <h1 className="font-semibold text-3xl mt-6">Good Afternoon</h1>

                <div className="grid grid-cols-3 gap-4 mt-4 ">
                    <a href="#" className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/album.jpeg" width={88} height={88} alt="capa do album exaltasamba"/>
                        <strong className="flex items-center">Separação - Extra</strong>

                        <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center pl-0.5 ml-auto mr-6 text-black invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>
                    <a href="#" className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/album.jpeg" width={88} height={88} alt="capa do album exaltasamba"/>
                        <strong className="flex items-center">Separação - Extra</strong>

                        <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center pl-0.5 ml-auto mr-6 text-black invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>
                    <a href="#" className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/album.jpeg" width={88} height={88} alt="capa do album exaltasamba"/>
                        <strong className="flex items-center">Separação - Extra</strong>

                        <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center pl-0.5 ml-auto mr-6 text-black invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>
                    <a href="#" className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/120 transition-colors">
                        <Image src="/album.jpeg" width={88} height={88} alt="capa do album exaltasamba"/>
                        <strong className="flex items-center">Separação - Extra</strong>

                        <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center pl-0.5 ml-auto mr-6 text-black invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>
                    <a href="#" className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/album.jpeg" width={88} height={88} alt="capa do album exaltasamba"/>
                        <strong className="flex items-center">Separação - Extra</strong>

                        <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center pl-0.5 ml-auto mr-6 text-black invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>
                    <a href="#" className="group bg-white/5 rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
                        <Image src="/album.jpeg" width={88} height={88} alt="capa do album exaltasamba"/>
                        <strong className="flex items-center">Separação - Extra</strong>

                        <button className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center pl-0.5 ml-auto mr-6 text-black invisible group-hover:visible">
                            <Play />
                        </button>
                    </a>
                </div>


                <h2 className="font-semibold text-2xl mt-4">Made for Pedro Dias</h2>

                <div className="grid grid-cols-8 gap-4 mt-4">
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 1</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 2</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 3</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 4</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 5</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                </div>

                <h3 className="font-semibold text-2xl mt-4">Seus mixes mais ouvidos</h3>

                <div className="grid grid-cols-8 gap-4 mt-4">
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 1</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 2</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 3</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 4</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                    <a href="" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
                        <Image src="/album.jpeg" className="w-full" width={120} height={120} alt="capa do album exaltasamba"/>
                        <strong className="font-semibold">Mix 5</strong>
                        <span className="text-sm text-zinc-400">Pixote e mais</span>
                    </a>
                </div>
                <div className="mb-24"></div>
            </main>
        </div>
        <Footer />
    </div>
  )
}
