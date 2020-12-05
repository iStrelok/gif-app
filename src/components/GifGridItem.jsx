import React from 'react';

function GifGridItem({ id, title, url }) {

    console.log({ id, title });

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    );
}

export default GifGridItem;