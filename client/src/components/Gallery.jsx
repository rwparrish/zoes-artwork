import React, { useState, useEffect } from 'react';
import ArtworkCard from './ArtworkCard';


const Gallery = () => {

    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/artworks')
            .then(res => res.json())
            .then(data => setArtworks(data));
    }, []);


    const artworksToDisplay = artworks.map(artwork => { return <ArtworkCard key={artwork.id} artwork={artwork} /> });

    return (
        <section className="flex flex-col justify-center items-center h-auto py-12">
            <div className="flex flex-col max-w-screen-xl justify-center items-center gap-8">
                <h2>Gallery</h2>
                {artworksToDisplay}
            </div>
        </section>
    );
};

export default Gallery;