from .. import db


class Restaurant(db.Model):
    restaurant_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), nullable=False)
    cuisine = db.Column(db.String(45), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    open_date = db.Column(db.DateTime, nullable=False)
    images = db.relationship('RestaurantImage', backref='restaurant')