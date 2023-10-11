from .. import db


class RestaurantImage(db.Model):
    __tablename__ = 'RestaurantImage'
    restaurant_image_id = db.Column(db.Integer, primary_key=True)
    restaurant = db.Column(db.Integer, db.ForeignKey('Restaurant.restaurant_id'), nullable=False)
    image = db.Column(db.Integer, db.ForeignKey('ImageURL.image_id'), nullable=False)
