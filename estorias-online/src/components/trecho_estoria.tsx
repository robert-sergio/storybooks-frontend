'use client'
import ReactQuill from 'react-quill';

export default function TrechoEstoria(props:any){
    const {texto, setTexto} = props
    return(
        <div className='bg-slate-50 w-3/4 mb-4'>
            <ReactQuill theme="snow" readOnly={false} value={texto} onChange={setTexto} />
        </div>
    )
}