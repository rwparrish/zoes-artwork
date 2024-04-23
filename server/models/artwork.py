from config import db

class Artwork(db.Model):
    
    __tablename__ = 'artworks'
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(30), nullable=False)
    image = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(100), nullable=False)
    creation_date = db.Column(db.Date, nullable=False)
    
    def __repr__(self):
        return f'<Artwork {self.id} - {self.title}, {self.description}, {self.creation_date}>'
    
    
    
    
    
    

