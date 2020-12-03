import React, { useEffect } from 'react';

const GifGrid = ({ category }) => {
    
    useEffect( () => {
        getGifs()
    })

    const getGifs = async () => {
        const res = await fetch('https://api.giphy.com/v1/gifs/search?q=Goku&api_key=fTiwV0E0oB1pV8n5950SVgHxyrDgYdtl')
        const { data } = await res.json()
        const gifs = data.map( gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url
            }
        })
        console.log(gifs);
    }    

    return (
        <div>
            <h2>{ category }</h2>
        </div>
    );
};

export default GifGrid;