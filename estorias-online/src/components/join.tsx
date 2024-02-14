'use client'
import React, { useRef, Dispatch, SetStateAction } from 'react'
import * as io from "socket.io-client";

interface JoinProps {
    setLogged: Dispatch<SetStateAction<boolean>>,
    setUserName: Dispatch<SetStateAction<any>>,
    setSocket: Dispatch<SetStateAction<any>>,
}

export default function Join({setLogged, setUserName, setSocket}:JoinProps) {
    const userNameRef = useRef<HTMLInputElement>(null)

    const handleJoin = async () => {
        const name = userNameRef.current
        console.log(name?.value)

        const socket = await io.connect('10.0.0.197:3001')
        socket.emit('set_username', name?.value)
        setSocket(socket)

        setLogged(true)
        setUserName(name?.value)
    }

    return (
    <div className='flex flex-col justify-center items-center gap-8 border rounded-md bg-slate-400 p-4'>
        <span>Entre no Chat</span>
        <div className='flex gap-8'>
            <input ref={userNameRef} placeholder='Seu Nome'></input>
            <button onClick={()=> handleJoin()}>Entrar</button>
        </div>
    </div>
  )
}
