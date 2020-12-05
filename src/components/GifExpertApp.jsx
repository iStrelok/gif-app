import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid'

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Naruto'])

    return (
        <div>
            <h1 className="text-center">GifApp</h1>
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