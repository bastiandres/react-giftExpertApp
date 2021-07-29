
// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


// me permite reutilizar el codigo para traer datos.
export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    //mandar el arreglo vacio hace que solo se mande 1 vez. Esto es el componentDidMount, solo se ejecuta cuando el componente
    // es renderizado la primera vez.

    // hace que cuando se hace la peticion por primera vez, lance los gifs y los coloca en las imagenes.
    // useEffect( () => {
    //     // getGifs( category ).then( imgs => setImages( imgs ))
    //     getGifs( category )
    //         .then( setImages )
    // }, [ category ]);

    // customhook: carga la peticion fetch e indica cuando carga y cuando termino la carga
    // cada vez q el componente cambie, va a volcer a disparar, entonces se necesita un useeffect para que se renderice solo cuando la categ cambia
    
    // dos puntos y el nombre que le quieres dar.
    const { data:images, loading } = useFetchGifs( category );


    return (
        <>
            <h3 className="animate__animated animate__fadein"> { category } </h3>
            {/* Si es que es true muestra la p sino no muestra nada */}
            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                            <GifGridItem 
                                key = { img.id } 
                                { ...img }
                            />
                            
                        )
                    )
                }
                
            </div>
        </>
    )
}
