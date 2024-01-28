'use client'
import Link from "next/link";

export default function HeaderEstoria(props:any){
    return(
        <div className='flex justify-start gap-8 w-3/4'>
            <Link className='bg-slate-200 rounded p-2' href='/escrita'>Voltar as suas estorias</Link>
            { props.children }
        </div>
    )
}