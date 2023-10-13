'use client'
import { EstoriaContext } from "@/data/context/estoriacontext"
import Link from "next/link"
import { useContext } from "react"

export default function Estorias(){
    const { estoria } = useContext(EstoriaContext)

    return(
        <div className="flex flex-col h-screen justify-center items-center gap-4">
            <Link className="bg-slate-200 font-bold rounded p-2" href='/'>Voltar ao Inicio</Link>
            <h1 className="text-xl font-bold">Lista de Estórias</h1>
            <ul className="flex flex-col justify-center items-center">
                {
                    estoria.map((a:any)=>{
                        return(
                           <Link href={'/leitura/'+a.id} key={a.id}>Ler : {a.titulo}</Link>
                        )
                    })
                }
            </ul>
        </div>
    )
}