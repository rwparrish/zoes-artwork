import React from 'react';

const Artwork = ({artwork}) => {
    return (
        <div className="artwork">
            <img src={artwork.image} alt={artwork.title}/>
            <h3>{artwork.title}</h3>
            <p>{artwork.description}</p>
        </div>
    );
}