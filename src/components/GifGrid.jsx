import React from 'react';
import { useFecthGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    
    const { data:images, loading }  = useFecthGifs( category )

    return (
        <div className="row">
            <h4 className="animate__animated animate__fadeIn mt-3 mb-3">Mostrando resultados de: { category }</h4>
            
            { loading && <p className="animate__animated animate__fadeIn">Loading</p> }
            
            {
                <div className="card-grid w-100 d-flex justify-content-center">
                    <ol>
                        {
                            images.map( image => (
                                <GifGridItem
                                    { ...image }
                                />
                            ))
                        }
                    </ol>
                </div>
            }
        </div>
    );
};

export default GifGrid;