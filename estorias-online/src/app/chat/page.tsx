'use client'
import React from 'react'
import Chat from "../../components/chat"
import Join from '@/components/join'
import { useState } from 'react'

export default function ChatPage() {
    const [logged, setLogged] = useState<boolean>(false)
    const [userName, setUserName ] = useState<any>('')
    const [socket, setSocket] = useState<any>()

    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            {
                logged?
                <Chat userName={userName} socket={socket} />
                :
                <Join setLogged={setLogged} setUserName={setUserName} setSocket={setSocket}/>
            }
        </div>
    )
}
