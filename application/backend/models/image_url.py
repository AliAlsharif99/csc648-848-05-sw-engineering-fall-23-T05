from .. import db


class ImageURL(db.Model):
    __tablename__ = 'ImageURL'
    image_id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String(200), nullable=False)