from .. import db


class RestaurantImage(db.Model):
    restaurant_image_id = db.Column(db.Integer, primary_key=True)
    restaurant_id = db.Column(db.Integer, db.ForeignKey('restaurant.restaurant_id'), nullable=False)
    image_id = db.Column(db.Integer, db.ForeignKey('image_url.image_id'), nullable=False)