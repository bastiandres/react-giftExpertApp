
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Dragon Ball'])

    // const handleAdd = () => {

    //     //con el useState react sabe que el estado cambio x tanto debe renderizarlo.

    //     // setCategories(categories.concat('hunter'));
    //     // setCategories( [...categories,'hunter']);
    //     // setCategories( cats => [ ...cats, 'hunter' ] );
    // }

    

    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories = { setCategories }/>

            <hr />

            <ol>
ß            
                { 
                    categories.map( (category ) => {
                        
                        return ( 
                            // <li key = { category }> { category } </li> 
                            <GifGrid 
                                category= { category }
                                key = { category }
                            />
                        );
                    })
                }

            </ol>
        </>
    );

}
