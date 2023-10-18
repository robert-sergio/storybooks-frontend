'use client'
import Image from "next/image";

export default function TrechoImagem(){
    return(
        <>
            <button>Adicionar Imagem</button>
            <div>
                <span>Url Imagem</span>
                <input className="w-3/4 bg-slate-200" type="text"></input>
            </div>
            <div>
                <img className="border rounded-md p-2" src='https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-cat-names-nationalgeographic_1525054.jpg?w=400&h=400&q=75'></img>
            </div>
            {/* <Image></Image> */}
        </>
    )
}