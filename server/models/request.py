from config import db

class Request(db.Model):
    
    tablename = 'requests'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(30), nullable=False)
    message = db.Column(db.String(100), nullable=False)
    
    def __repr__(self):
        return f'<Request {self.id} - {self.name}, {self.email}, {self.message}>'
