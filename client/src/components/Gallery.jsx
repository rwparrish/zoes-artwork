import React, {useState, useEffect} from 'react';
import Artwork from './Artwork';


const Gallery = () => {

    const [artworks, setArtworks] = useState([]);

    console.log(artworks);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/artworks')
            .then(res => res.json())
            .then(data => setArtworks(data));
    }, []);
    

    const artworksToDisplay = artworks.map(artwork => 
        { return <Artwork key={artwork.id} artwork={artwork}/> });

    return (
        <div className="gallery">
            {artworksToDisplay}
        </div>
    );
};

export default Gallery;