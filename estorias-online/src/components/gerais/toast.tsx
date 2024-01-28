'use client'

import { useState } from "react"

export default function Toast(props:any){
    const [visible, setVisible] = useState(true)
    const {type} = props
    console.log(type)
    return(
        <div className="">
            <div
                className={
                    !visible?
                        "hidden"
                    :
                    type==='danger'? 'border-slate-800': "absolute top-4 right-16 flex flex-col justify-center shadow-xl border-1 p-1 w-1/4 rounded border-l-8 border-lime-600"
                }
                onClick={()=>setVisible(!visible)}
            >
                <h1 className="ml-4">Hello</h1>
                <p  className="ml-4">Message</p>
            </div>
        </div>
    )
}