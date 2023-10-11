from .. import db


class Restaurant(db.Model):
    __tablename__ = 'Restaurant'
    restaurant_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(45), nullable=False)
    cuisine = db.Column(db.String(45), nullable=False)
    address = db.Column(db.String(200), nullable=False)
    open_date = db.Column(db.DateTime, nullable=False)
    rating = db.Column(db.DECIMAL(5,2), nullable=False)
    review_count = db.Column(db.Integer, nullable=False)
    restaurant_images = db.relationship('RestaurantImage', backref='restaurant_instance', lazy='dynamic')

