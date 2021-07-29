import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {

    // no importa el nombre puesta aqui abajo
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // los efectos no pueden ser async xq esperan algo sincrono

    useEffect(() => {
        getGifs( category )
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            })
    }, [category]);

    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: true
    //     })
    // }, 3000);

    return state;

}

