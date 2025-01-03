import React, {useState, useEffect} from 'react';
import Artwork from './Artwork';

// need artworks state to be set after fetching all artwork
const [artworks, setArtworks] = useState([]);

useEffect(() => {
    fetch('/api/artworks')
        .then(res => res.json())
        .then(data => {
            setArtworks(data);
        });
};

const artworksToDisplay = artworks.map(artwork => 
    { <Artwork key={artwork.id} artwork={artwork}/> });

const Gallery = () => {
    return (
        <div className="gallery">
            {artworksToDisplay}
        </div>
    );
};