from .. import db


class ImageURL(db.Model):
    image_id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(200), nullable=False)
    restaurant_images = db.relationship('RestaurantImage', backref='image_url')