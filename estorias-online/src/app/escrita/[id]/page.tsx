'use client'
import { EstoriaContext } from '@/data/context/estoriacontext';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Escrita(props:any) {
    const [texto, setTexto] = useState('');
    const [titulo, setTitulo] = useState('');
    const [escritor, setEscritor] = useState('');

    const { estoria, setEstoria } = useContext(EstoriaContext)
    
    const PageProps = useParams()

    useEffect(()=>{
        estoria.map((a:any)=>{
            if (Number(a.id) === Number(PageProps.id)){
                setTitulo(a.titulo)
                setEscritor(a.escritor)
                setTexto(a.estoria)
            }
        })

    },[])
    
    const handleTitulo = (event:any)=>{
        setTitulo(event.target.value)
    }

    const handleEscritor = (event:any)=>{
        setEscritor(event.target.value)
    }

    function SalvaEstoria(){
        let test = estoria.map((a:any)=>{
            let achou = false
            if (Number(a.id) === Number(PageProps.id)){
                achou = true
            }
            return achou
        })

        console.log(test)
        // const id = ( estoria.length +1 )
        // const nova_estoria = {
        //         'titulo':titulo,
        //         'escritor':escritor,
        //         'estoria':texto,
        //         'id': id,
        // }
        // setEstoria([...estoria, nova_estoria])
        // window.localStorage.setItem('ESTORIAS', JSON.stringify([...estoria, nova_estoria]));

    }
    
    return (
    <div className='flex flex-col justify-center items-center w-full h-screen gap-4'>

        <Link className='bg-slate-200 rounded p-2 font-bold' href='/escrita'>Voltar as suas estorias</Link>

        <div
            className='flex flex-col gap-4 justify-center items-center w-3/4'
        >
            <p className='font-bold text-xl'>Nome da História</p>
            <input
                value={titulo}
                onChange={handleTitulo} 
                className='text-center w-3/4 bg-slate-200' type='text'/>

            <p className='font-bold text-xl'>Escrito Por</p>
            <input
                value={escritor}
                onChange={handleEscritor} 
                className='text-center w-3/4 bg-slate-200' type='text'/>

            <div className='bg-slate-50 w-3/4'>
                <ReactQuill theme="snow" readOnly={false} value={texto} onChange={setTexto} />
            </div>
            <button 
                onClick={SalvaEstoria}
                className='bg-slate-200 p-2 rounded'>Guardar História</button>
        </div>
    </div>
    )
}