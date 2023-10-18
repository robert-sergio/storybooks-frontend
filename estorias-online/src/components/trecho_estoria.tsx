'use client'
import { useState } from 'react';
import ReactQuill from 'react-quill';

export default function TrechoEstoria(props:any){
    const { estoria, setEstoria } = props
    const [ texto, setTexto ] = useState('');
    
    const handleTrecho = (event:any)=>{
        const trecho = texto+'<section>'+event.target.value+'</section>'
        setTexto(trecho)
    }

    return(
        <div className='w-3/4 mb-4 flex flex-col justify-center gap-16'>
            <ReactQuill theme="snow" readOnly={false} value={texto} onChange={setTexto} />
            <button className=''>Salvar Trecho</button>
        </div>
    )
}