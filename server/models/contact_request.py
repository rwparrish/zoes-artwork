from config import db

class ContactRequest(db.Model):
    
    __tablename__ = 'contact_requests'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    phone = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(30), nullable=False)
    message = db.Column(db.String(100), nullable=False)
    
    def __repr__(self):
        return f'<ContactRequest {self.id} - {self.name}, {self.phone}, {self.email}, {self.message}>'
