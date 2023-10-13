'use client'
import EstoriaProps from "@/model/estoria";
import ListaEstorias from "@/model/lista_estorias";
import { createContext, useState, useEffect } from "react";

export const EstoriaContext = createContext({} as any)

export function EstoriaProvider(props:any){
    const [estoria, setEstoria] = useState([])

    useEffect(() => {
        const data = window.localStorage.getItem('ESTORIAS');
        if ( data !== null ) setEstoria(JSON.parse(data));
    }, []);

    return (
        <EstoriaContext.Provider value={{
            estoria, setEstoria
        }}>
            {props.children}
        </EstoriaContext.Provider>
    )
}