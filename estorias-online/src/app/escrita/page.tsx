'use client'

import { EstoriaContext } from "@/data/context/estoriacontext"
import Link from "next/link"
import { useContext, useEffect, useState } from "react"

interface maxProps {
    id:number
}

export default function Escrever(){
    const { estoria, setEstoria } = useContext(EstoriaContext)
    const [max, setMax] = useState<maxProps>({id:0})

    const Excluir = (id:any) =>{
        console.log(id)
        const outras_estorias = estoria.filter((item:any) => {
            if(Number(item.id) != Number(id)){
                return item
            }
        })
        setEstoria([...outras_estorias])
        window.localStorage.setItem('ESTORIAS', JSON.stringify([...outras_estorias]));
    }

    useEffect(()=>{
        if (estoria != undefined && estoria.lenght > 0) {
            const max:maxProps = estoria.reduce(function(prev:any, current:any) {
                return (prev && prev.id > current.id) ? prev : current
            }).catch((err:any)=>{
                console.log(estoria)
            })
            setMax(max)
        }
    }, [estoria])

    return(
        <div className="flex flex-col h-screen justify-center items-center gap-4">
            <Link className='bg-slate-200 rounded p-2 font-bold' href='/'>Voltar ao inicio</Link>
            <h1 className="font-bold text-xl">Suas Estorias</h1>
            <div className="w-3/4 flex flex-col items-center">
                <ul className="w-full">
                    {
                        estoria.map((a:any)=>{
                            return(
                                <div className="flex gap-2 justify-center items-center" key={a.id}>
                                    <span className="w-2/5">{a.titulo}</span>
                                    <div className="flex gap-4">
                                        <Link href={'/escrita/'+a.id}>Editar</Link>
                                        <Link href='/escrita' className="" onClick={() => Excluir(a.id)}>Excluir</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            <Link
                className='bg-slate-200 rounded p-2 font-bold' 
                href={'/escrita/'+ ( Number(max.id)+1 )}>
                Criar Nova Estoria
            </Link>
        </div>
    )
}