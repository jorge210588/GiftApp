import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Samurai x'])
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories = {setCategories}/>
            
            <ol>
                {
                    categories.map((item) => {
                        return (<GifGrid 
                                    key ={ item } 
                                    category={item}
                                    />);
                    })
                }

            </ol>

        </>
    )
}

export default GifExpertApp
