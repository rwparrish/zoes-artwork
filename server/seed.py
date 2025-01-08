from config import app, db
from datetime import datetime
from models.artwork import *
from models.contact_request import *

# I do not have any associations between the models
# seed the bd with 5 pieces of artwork and 5 form data entries
with app.app_context():
        
    artwork1 = Artwork(title='The Starry Night', description='Vincent van Gogh', creation_date=datetime.strptime('2024-04-15', '%Y-%m-%d'), image='https://www.vangoghgallery.com/catalog/image/0612/Starry-Night.jpg')
    artwork2 = Artwork(title='The Persistence of Memory', description='Salvador Dali', creation_date=datetime.strptime('2022-06-17', '%Y-%m-%d'), image='https://www.moma.org/media/W1siZiIsIjU5NDA1Il0sWyJwIiwiY29udmVydCIsIi1yZXNpemUgMzAweDMwMFx1MDAzZSJdXQ.jpg?sha=3e3b3b3b1f1f1f1f')
    artwork3 = Artwork(title='The Scream', description='Edvard Munch', creation_date=datetime.strptime('2020-09-5', '%Y-%m-%d'), image='https://www.edvardmunch.org/images/paintings/the-scream.jpg')
    artwork4 = Artwork(title='The Night Watch', description='Rembrandt', creation_date=datetime.strptime('2019-12-19', '%Y-%m-%d'), image='https://www.rijksmuseum.nl/en/rijksstudio/assets/objects/1/0/0/0000000015/0000000015.jpg')
    artwork5 = Artwork(title='The Birth of Venus', description='Sandro Botticelli', creation_date=datetime.strptime('2024-04-22', '%Y-%m-%d'), image='https://www.uffizi.it/sites/default/files/styles/immagine_940_600/public/opere/primapagina/nascita-venere.jpg?itok=3Q6Z9Q9v')
    
    db.session.add(artwork1)
    db.session.add(artwork2)
    db.session.add(artwork3)
    db.session.add(artwork4)
    db.session.add(artwork5)

    db.session.commit()

    form_data1 = ContactRequest(name='John Doe', phone='555-555-5555', email="some email", message='This is a test message1')
    form_data2 = ContactRequest(name='Jane Doe', phone='555-555-5555', email="some email", message='This is a test message2')
    form_data3 = ContactRequest(name='John Smith', phone='555-555-5555', email="some email", message='This is a test message3')
    form_data4 = ContactRequest(name='Jane Smith', phone='555-555-5555', email="some email", message='This is a test message4')
    form_data5 = ContactRequest(name='John Johnson', phone='555-555-5555', email="some email", message='This is a test message5')

    db.session.add(form_data1)
    db.session.add(form_data2)
    db.session.add(form_data3)
    db.session.add(form_data4)
    db.session.add(form_data5)

    db.session.commit()

    print('Database seeded!')