import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid'

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Naruto'])

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category } 
                            category={ category }    
                        />
                    ))
                }
            </ol>
            <hr/>
        </div>
    );
};

export default GifExpertApp;