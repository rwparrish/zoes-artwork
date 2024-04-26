from flask import request
from flask_restful import Resource
from models.request import Request
from config import db, api

class RequestResource(Resource):
    
    def get(self):
        requests = Request.query.all()
        return [request.to_dict() for request in requests]
    
    def post(self):
        request = Request(
            name=request.json['name'],
            email=request.json['email'],
            message=request.json['message']
        )
        db.session.add(request)
        db.session.commit()
        return request.serialize(), 201
    
api.add_resource(RequestResource, '/api/requests')