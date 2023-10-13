'use client'

import { EstoriaContext } from "@/data/context/estoriacontext"
import Link from "next/link"
import { useContext } from "react"

export default function Escrever(){
    const { estoria } = useContext(EstoriaContext)
    
    return(
        <div className="flex flex-col h-screen justify-center items-center gap-4">
            <Link className='bg-slate-200 rounded p-2 font-bold' href='/'>Voltar ao inicio</Link>
            <h1 className="font-bold text-xl">Suas Estorias</h1>
            <div>
                <span>Estorias já escritas</span>
                <ul>
                    {
                        estoria.map((a:any)=>{
                            return(
                                <div className="grid grid-cols-2 gap-4" key={a.id}>
                                    <span className="w-3/4">{a.titulo}</span>
                                    <span className="w-1/4"><Link href={'/escrita/'+a.id}>Editar</Link></span>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            <span>Criar Nova Estoria</span>
        </div>
    )
}