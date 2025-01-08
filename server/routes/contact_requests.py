from flask import request
from flask_restful import Resource
from models.contact_request import ContactRequest
from config import db, api

class RequestResource(Resource):
    
    def get(self):
        contact_requests = ContactRequest.query.all()
        return [contact_request.to_dict() for contact_request in contact_requests]
    
    def post(self):
        contact_request = ContactRequest(
            name=request.json['name'],
            phone=request.json['phone'],
            email=request.json['email'],
            message=request.json['message']
        )
        db.session.add(contact_request)
        db.session.commit()
        breakpoint()
        return contact_request.serialize(), 201
    
api.add_resource(RequestResource, '/api/contact_requests')