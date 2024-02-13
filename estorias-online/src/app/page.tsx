import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col gap-4 justify-center items-center h-screen'>
        <span className='text-xl font-bold'>Stories Website - What do you wanna do ?</span>
        <Link className='bg-slate-200 p-2 rounded' href='/escrita'>Write</Link>
        <Link className='bg-slate-200 p-2 rounded' href='/leitura'>Read </Link>
        <Link className='bg-slate-200 p-2 rounded' href='/reading-component'>See the Reading Component</Link>   
        <Link className='bg-slate-200 p-2 rounded' href='/chat'>Chat!</Link>   
    </main>
  )
}
