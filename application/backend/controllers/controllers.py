from ..models import user
from .. import db
from werkzeug.security import generate_password_hash, check_password_hash


def add_user(first_name, last_name, password, email):
    hashed_password = generate_password_hash(password, method='pbkdf2:sha256')
    new_user = user.User(first_name=first_name, last_name=last_name, password=hashed_password, email=email)
    db.session.add(new_user)
    db.session.commit()


def verify_user(email, password):
    user_instance = get_user_by_email(email)
    if user_instance and check_password_hash(user_instance.password, password):
        return user_instance
    return None


def get_user_by_email(email):
    return user.User.query.filter_by(email=email).first()

