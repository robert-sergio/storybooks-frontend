import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col gap-4 justify-center items-center h-screen'>
      <span className='text-xl font-bold'>Site de Escrita e Leitura de Estórias</span>
      <Link className='bg-slate-200 p-2 rounded' href='/escrita'>Quero Escrever</Link>
      <Link className='bg-slate-200 p-2 rounded' href='/leitura'>Quero Ler</Link>
    </main>
  )
}
