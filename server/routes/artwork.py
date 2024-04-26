from flask import request
from flask_restful import Resource
from models.artwork import Artwork
from config import db, api


class ArtworkResource(Resource):
    
    def get(self):
        artworks = Artwork.query.all()
        
        return artworks, 200
    
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
    
api.add_resource(ArtworkResource, '/api/artworks')