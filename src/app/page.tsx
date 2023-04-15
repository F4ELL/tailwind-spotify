import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Pause } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-black p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-red-500' />
            <div className='w-3 h-3 rounded-full bg-yellow-500' />
            <div className='w-3 h-3 rounded-full bg-green-500' />
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-4 text-sm font-semibold'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-4 text-sm font-semibold'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>FUNK 2023 ATUALIZADO ✨</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>TRAP 2023 ATUALIZADO</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Todays Top Hits</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Sertanejo 2023 🚀</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Potência Sertaneja</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Mix Internationals</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>As mais tocadas do seu 2022</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Workout Music 2023</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Actually</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Paredão Explode</a>
          </nav>
        </aside>

        <main className="flex-1 p-6 pb-10">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/top-brasil.jpeg" width={104} height={104} alt='Album Top Brasil' />
              <strong>Top Brasil</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/funkhits.jpeg" width={104} height={104} alt='Album Top Brasil' />
              <strong>Funk Hits</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/paredao.jpeg" width={104} height={104} alt='Album Top Brasil' />
              <strong>Paredão Explode</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/potencia.jpeg" width={104} height={104} alt='Album Top Brasil' />
              <strong>Potência Sertaneja</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/todays.jpeg" width={104} height={104} alt='Album Top Brasil' />
              <strong>Todays Top Hits</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/esquenta.jpeg" width={104} height={104} alt='Album Top Brasil' />
              <strong>Esquenta Sertanejo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Rafael Peres</h2>

          <div className='grid grid-cols-6 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/top-brasil.jpeg" className='w-full rounded-md' width={120} height={120} alt='Album Top Brasil' />
              <strong className='font-semibold'>Top Brasil</strong>
              <span className='text-sm text-zinc-400'>KayBlack e os maiores hits do país.</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/paredao.jpeg" className='w-full rounded-md' width={120} height={120} alt='Album Top Brasil' />
              <strong className='font-semibold'>Paredão Explode</strong>
              <span className='text-sm text-zinc-400'>Os hist do forró, piseiro, arrocha, pagodão e bregadeira.</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/esquenta.jpeg" className='w-full rounded-md' width={120} height={120} alt='Album Top Brasil' />
              <strong className='font-semibold'>Esquenta Sertanejo</strong>
              <span className='text-sm text-zinc-400'>O melhor do sertanejo numa só playlist.</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/todays.jpeg" className='w-full rounded-md' width={120} height={120} alt='Album Top Brasil' />
              <strong className='font-semibold'>Todays Top Hits</strong>
              <span className='text-sm text-zinc-400'>Post Malone is on top of the Hottest 50!</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src="/potencia.jpeg" className='w-full rounded-md' width={120} height={120} alt='Album Top Brasil' />
              <strong className='font-semibold'>Potência Sertaneja</strong>
              <span className='text-sm text-zinc-400'>Fique por dentro dos lançamentos e das músicas que estão na boca da galera.</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src="/song.jpeg" className='rounded' width={56} height={56} alt='Album Top Brasil' />
          <div className='flex flex-col gap-1'>
            <strong className='font-normal'>Nosso Quadro</strong>
            <span className='text-xs text-zinc-400'>Ana Castela</span>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-7'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />
            <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-black'>
              <Pause />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span>1:19</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span>2:54</span>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}
