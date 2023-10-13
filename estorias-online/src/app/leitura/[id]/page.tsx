'use client'

import { EstoriaContext } from "@/data/context/estoriacontext"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useContext } from "react"

export default function Leitura(props:any){
    const pageProps = useParams()
    const { estoria } = useContext(EstoriaContext)

    return(
        <div className="flex flex-col h-screen justify-center items-center gap-4">
            <Link className="text-xl font-bold p-2 rounded bg-slate-200" href='/leitura'>Voltar para todas as Estorias</Link>
            {
                estoria.map((a:any)=>{
                    return(
                        Number(a.id) === Number(pageProps.id)?
                        <div className="flex flex-col justify-center items-center gap-2 w-full" key={a.id}>
                            <label className="font-semibold">Titulo</label>
                            <span className="text-xl font-bold">{a.titulo}</span>
                            <span className="font-semibold text-sm">Escrito por {a.escritor}</span>
                            <div className="border flex items-center justify-center border-zinc-500 w-3/4 rounded">
                                <div dangerouslySetInnerHTML={{__html:a.estoria}} />
                            </div>
                        </div>
                        :
                        <></>
                )})
            }

        </div>
    )
}