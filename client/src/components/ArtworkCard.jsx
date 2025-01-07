import React from 'react';

const ArtworkCard = ({ artwork }) => {

    return (
        <div className="flex flex-col w-64 h-96 bg-white rounded-lg shadow-md overflow-hidden">
            <img src={artwork.image} alt={artwork.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-2 truncate">{artwork.title}</h3>
                <p className="text-sm text-gray-600 mb-2 flex-grow overflow-hidden">{artwork.description}</p>
                <p className="text-lg font-bold text-green-600 mb-1">{artwork.price}</p>
                <p className="text-xs text-gray-500">Created: {artwork.creation_date}</p>
            </div>
        </div>
    );
}


export default ArtworkCard;


