'use client'
import DescricaoEstoria from '@/components/descricao_estoria';
import TrechoImagem from '@/components/trecho imagem';
import HeaderEstoria from '@/components/header_estoria';
import TrechoEstoria from '@/components/trecho_estoria';
import { EstoriaContext } from '@/data/context/estoriacontext';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

export default function Escrita(props:any) {
    const [texto, setTexto] = useState('');
    const [titulo, setTitulo] = useState('');
    const [escritor, setEscritor] = useState('');
    const { estoria, setEstoria } = useContext(EstoriaContext)
    const PageProps = useParams()

    const divArray = new Array()

    useEffect(()=>{
        const a = estoria.filter((e:any)=>{
            if(Number(e.id) === Number(PageProps.id)){
                return e
            }
        })[0]

        if (a != undefined){
            setTitulo(a.titulo)
            setEscritor(a.escritor)
            setTexto(a.estoria)
        }
    },[])
    
    const handleTitulo = (event:any)=>{
        setTitulo(event.target.value)
    }

    const handleEscritor = (event:any)=>{
        setEscritor(event.target.value)
    }

    function SalvaEstoria(){
        const a = estoria.filter((e:any)=>{
            if(Number(e.id) === Number(PageProps.id)){
                return e
            }
        })[0]

        if (a != null){
            const outras_estorias = estoria.filter((item:any) => {
                if(Number(item.id) != Number(PageProps.id)){
                    return item
                }
            })
            const nova_estoria = {
                'titulo':titulo,
                'escritor':escritor,
                'estoria':texto,
                'id': Number(PageProps.id),
            }
            setEstoria([...outras_estorias, nova_estoria])
            window.localStorage.setItem('ESTORIAS', JSON.stringify([...outras_estorias, nova_estoria]));
        } else {
            const max = estoria.reduce(function(prev:any, current:any) {
                return (prev && prev.id > current.id) ? prev : current
            })
            const id = ( max.id +1 )
            const nova_estoria = {
                    'titulo':titulo,
                    'escritor':escritor,
                    'estoria':texto,
                    'id': Number(id),
            }
            setEstoria([...estoria, nova_estoria])
            window.localStorage.setItem('ESTORIAS', JSON.stringify([...estoria, nova_estoria]));
        }
    }

    const AddTexto = () =>{
        divArray.push(
            // <TrechoEstoria key={divArray.length+1}/>
            <h1 key={divArray.length+1}>Oi</h1>
        )
        console.log(divArray)
    }

    
    return (
    <div className='flex flex-col items-center w-full h-screen gap-4 p-2'>

        <HeaderEstoria>
            <button 
                onClick={SalvaEstoria}
                className='bg-slate-200 p-2 rounded'>Guardar História</button>
        </HeaderEstoria>

        <div className='flex flex-col gap-4 items-center w-3/4 overflow-auto'>

            <DescricaoEstoria
                titulo={titulo} handleTitulo={handleTitulo} escritor={escritor} handleEscritor={handleEscritor}
            />

            <div className='flex gap-8'>
                <button onClick={()=>AddTexto()}>
                    Adicionar Texto
                </button>
            </div>

                {
                    divArray.map((div:any)=>{
                        return(
                            div
                        )
                    })
                }
            {/* <TrechoImagem />
             */}

        </div>
    </div>
    )
}