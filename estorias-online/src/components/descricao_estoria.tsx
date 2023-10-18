
export default function DescricaoEstoria(props:any){
    const {titulo, handleTitulo, escritor, handleEscritor} = props
    return(
        <>
            <p className='font-bold text-xl'>Nome da História</p>
                <input
                    value={titulo}
                    onChange={handleTitulo} 
                    className='text-center w-3/4 bg-slate-200' type='text'
                />

                <p className='font-bold text-xl'>Escrito Por</p>
                <input
                    value={escritor}
                    onChange={handleEscritor} 
                    className='text-center w-3/4 bg-slate-200' type='text'
                />
        </>
    )
}