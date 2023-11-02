from .. import db


class User(db.Model):
    __tablename__ = 'User'
    user_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(45), unique=False, nullable=False)
    last_name = db.Column(db.String(45), unique=False, nullable=False)
    password = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True, nullable=False)
