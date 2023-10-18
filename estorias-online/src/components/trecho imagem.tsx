'use client'
import Image from "next/image";
import { useState } from "react";

export default function TrechoImagem(props:any){
    const { texto, setTexto} = props
    const [ adicionado, setAdicionado ] = useState(false);

    const [ imgUrl, setImgUrl] = useState('')

    const handleImg = (event:any)=>{
        const trecho = texto+'<section><img src="'+imgUrl+'"></section>'
        setTexto(trecho)
        setAdicionado(true)
    }

    const handleChange = (event:any)=>{
        setImgUrl(event.target.value)
    }

    return(
        <div className="border border-slate-600 p-2">
            {
                adicionado === false?
                <div className="flex items-center gap-2">
                    <input 
                        placeholder="url da imagem" 
                        className="w-3/4 bg-slate-200 p-2" type="text"
                        onChange={handleChange}
                    ></input>
                    <button
                        className="bg-slate-200 p-2 rounded" 
                        onClick={handleImg}>Adicionar Imagem</button>
                </div>
                :
                <div className="flex justify-center items-center gap-2">
                    <Image width={250} height={250} className="border rounded-md p-2" src={imgUrl} alt=''></Image>
                </div>
            }
        </div>
    )
}