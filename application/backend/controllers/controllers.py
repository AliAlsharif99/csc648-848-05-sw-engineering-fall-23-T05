from ..models import user
from .. import db
from werkzeug.security import generate_password_hash

def add_user(first_name, last_name, password, email):
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    new_user = user.User(first_name=first_name, last_name=last_name, password=hashed_password, email=email)
    db.session.add(new_user)
    db.session.commit()

def get_user_by_email(email):
    return user.User.query.filter_by(email=email).first()

