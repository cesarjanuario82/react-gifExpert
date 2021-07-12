import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( valor ) => {


    //const categories = ['One Punch','Samurai x','Dragon Ball']
    const [ categories, setCategories ]= useState(['One Punch']);
    console.log('jan valor: ', valor);
    // const handleAdd = () =>{
    //     setCategories( [...categories, 'bleach'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories= { setCategories} />


            <ol>
                {
                    categories.map( (cat) => 
                       <GifGrid 
                            key={ cat }
                            category = {cat }
                       />
                    )
                }

            </ol>
        </>
    )
}
