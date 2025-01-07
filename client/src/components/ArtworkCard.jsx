import React from 'react';

const ArtworkCard = ({artwork}) => {

    return (
        <div className="flex flex-col justify-center items-center overflow-hidden">
            <img src={artwork.image} alt={artwork.title}/>
            <h3>{artwork.title}</h3>
            <p>{artwork.description}</p>
            <p>{artwork.price}</p>
            <p>Created: {artwork.creation_date}</p>
        </div>
    );
}


export default ArtworkCard;