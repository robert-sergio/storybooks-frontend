'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../components/games/tutorial/game'),
  { ssr: false,
  loading: () => <p className='w-[800px] h-[640px] flex justify-center items-center bg-slate-400'>Loading...</p> }
);

export default function Home() {
  const [ element, setElement ] = useState<any>(<></>)

  useEffect(()=>{
    console.log('Rodei')
    setElement(
      <>
        <div className="flex justify-center items-center">
          <DynamicComponentWithNoSSR/>
        </div>
      </>
    )
  },[])

  return (
    <main>
      {
        element
      }
    </main>
  );
}