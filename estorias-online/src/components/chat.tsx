'use client'
import React, {useRef, useState, useEffect} from 'react'

interface ChatProps {
    userName: string
    socket: any
}

interface MessageProps {
    userName: string
    message: string
    text:string
}

export default function Chat({userName, socket}:ChatProps) {
    const messageRef = useRef<HTMLInputElement>(null) as any

    const [messageList, setMessageList] = useState<any>([])

    useEffect(()=>{
        socket.on('receive_message', (data:any) => {
            console.log(data)
            setMessageList((current:[]) => [...current, data])
        })
      
        return () => socket.off('receive_message')
    },[socket])

    const handleSendMessage = () =>{
        const message = messageRef.current
        socket.emit('message',message?.value)
        messageRef.current.value = ''
    }

    return (
    <div className='flex w-full'>
        
        <div className='flex flex-col w-1/2 h-screen bg-slate-400 items-center justify-center gap-8'>
            <span>{userName}</span>
            <input ref={messageRef}></input>
            <button onClick={()=> handleSendMessage()}>Enviar Msg</button>
        </div>

        <div className='w-1/2 flex flex-col justify-center items-center'>
            <div className='flex overflow-auto h-4/5 w-4/5 flex-col p-16 gap-8 bg-cyan-200 '>
                {
                    messageList.map((message:MessageProps, index:number) =>{
                        return(
                            <div key={index} className='w-1/2 flex justify-center items-center gap-8'>
                                <span>{message.userName}</span>
                                <span>{message.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}
