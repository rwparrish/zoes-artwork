from flask import request
from flask_restful import Resource
from models.artwork import Artwork
from config import db, api


class ArtworksResource(Resource):
    
    def get(self):
        # date-time not serializable need to convert to string first
        artworks = db.session.query(
            Artwork.id,
            Artwork.title,
            Artwork.image,
            Artwork.description,
            Artwork.creation_date
        ).all()
    
            
        json_artworks = [
            {
                'id': artwork.id,
                'title': artwork.title,
                'image': artwork.image,
                'description': artwork.description,
                'creation_date': artwork.creation_date.strftime('%B %d, %Y')
            }
            for artwork in artworks
        ]
            
        return json_artworks, 200
    
    def post(self):
        artwork = Artwork(
            title=request.json['title'],
            image=request.json['image'],
            description=request.json['description'],
            creation_date=request.json['creation_date']
        )
        db.session.add(artwork)
        db.session.commit()
        return artwork.serialize(), 201
    
api.add_resource(ArtworksResource, '/api/artworks')