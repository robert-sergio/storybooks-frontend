'use client'
import { useState } from "react"

export default function ReadingComponent(){
    const [page, setPage]= useState(1)
    const [open, setOpen] = useState(true)
    const [opened, setOpened]= useState(0)
    const pageContents = ['Texto1','Texto2']

    return(
        <div className="h-screen w-full flex flex-col gap-8 justify-center items-center ">
            <>tEST</>
            {
                pageContents.map((value, index) =>{
                    return(
                        <div key={index} className={`${index===opened?'z-10':'z-0'} w-4/5 h-4/5 absolute`}>
                            <div
                                className="flex justify-between bg-amber-200">
                                {
                                    index===0?
                                    <div
                                        className="flex flex-col justify-start">
                                        <div className={`w-0 h-0 z-0
                                        -rotate-90
                                        border-l-[100px] border-l-transparent
                                        border-t-[100px] border-t-amber-100
                                        `} />
                                        <span className="-translate-y-24 translate-x-4 z-10"></span>
                                    </div>
                                    :
                                    <div
                                        onClick={()=> setOpened(index-1)} 
                                        className="flex flex-col justify-start">
                                        <div className={`w-0 h-0 z-0
                                        -rotate-90
                                        border-l-[100px] border-l-transparent
                                        border-t-[100px] border-t-amber-100
                                        `} />
                                        <span className="-translate-y-24 translate-x-4 z-10">Back</span>
                                    </div>
                                }

                                <h1 className="bg-amber-100 w-3/4 flex flex-col items-center gap-4 p-3">
                                    <span>{opened}</span>
                                    <span>{pageContents.length}</span>
                                    <span>{index}</span>
                                    <span>{value}</span>
                                </h1>
                                
                                {
                                 index === pageContents.length-1?
                                 <div
                                 className="flex flex-col justify-end ">
                                 <span className="translate-y-24 z-10 translate-x-10"></span>
                                 <div className="w-0 h-0 z-0
                                 rotate-90
                                 border-l-[100px] border-l-transparent
                                 border-t-[100px] border-t-amber-100
                                 " />
                             </div>
                                 :
                                <div
                                    onClick={()=> setOpened(index+1)}
                                    className="flex flex-col justify-end ">
                                    <span className="translate-y-24 z-10 translate-x-10">Next</span>
                                    <div className="w-0 h-0 z-0
                                    rotate-90
                                    border-l-[100px] border-l-transparent
                                    border-t-[100px] border-t-amber-100
                                    " />
                                </div>
                                }
                            </div>
                        </div>
                    )
                })
            }

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