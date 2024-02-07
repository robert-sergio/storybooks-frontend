'use client'
import { useState } from "react"

export default function ReadingComponent(){
    const [page, setPage]= useState(1)
    const [open, setOpen]= useState(true)

    return(
        <div className="h-screen w-full flex flex-col gap-8 justify-center items-center ">
            <h1>I will make a Book Reading Component Here. :D</h1>
            <div 
                onClick={()=> setOpen(!open)}
                className="flex justify-between w-3/4 h-1/4 bg-amber-200">
                <div className="flex flex-col justify-start">
                    <div className={`w-0 h-0 z-0
                    ${!open?'scale-0':''} origin-left
                    -rotate-90
                    border-l-[100px] border-l-transparent
                    border-t-[100px] border-t-amber-100
                    `} />
                    <span className="-translate-y-24 translate-x-4 z-10">Back</span>
                </div>

                <h1 className="bg-amber-100 w-3/4 flex flex-col items-center gap-4 p-3">
                    <span>Dados</span>
                    <span>Algum Texto</span>
                </h1>

                <div
                    onClick={()=> setPage(page+1)} 
                    className="flex flex-col justify-end ">
                    <span className="translate-y-24 z-10 translate-x-10">Next</span>
                    <div className="w-0 h-0 z-0
                    rotate-90
                    border-l-[100px] border-l-transparent
                    border-t-[100px] border-t-amber-100
                    " />
                </div>
            </div>

            <button onClick={()=> setOpen(!open)}>Abrir Fechar</button>
            {open?<>Aberto</>:<>Fechado</>}

            <div className={`w-3/4 h-1/4 bg-slate-300 
                    ${open?'':'-scale-x-0'}
                    duration-1000
                    origin-left
                    `}>
                Teste askjasoijai asdiosjadasnmdiosamd asidjsadjm
            </div>
        </div>
    )
}