from ..models import user, restaurant, restaurant_image, image_url
from .. import db
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import or_


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


def get_top_rated_restaurants(limit=15):
    try:
        # Fetch restaurants in descending order by rating.
        restaurants = restaurant.Restaurant.query.order_by(restaurant.Restaurant.rating.desc()).limit(limit).all()

        restaurant_data = []
        for res in restaurants:
            # Fetch the associated image for each restaurant
            res_img = restaurant_image.RestaurantImage.query.filter_by(restaurant=res.restaurant_id).first()

            img_url = None
            if res_img:
                img_url_obj = image_url.ImageURL.query.get(res_img.image)
                if img_url_obj:
                    img_url = img_url_obj.image_url

            restaurant_data.append({
                "name": res.name,
                "cuisine": res.cuisine,
                "address": res.address,
                "open_date": res.open_date,
                "rating": float(res.rating),  # Convert the Decimal type to float for JSON serialization.
                "review_count": res.review_count,
                "image_url": img_url
            })

        return restaurant_data

    except Exception as e:
        print(f"Error fetching top-rated restaurants: {e}")
        return []


def search_restaurants(query):
    try:
        # Using the 'ilike' function for a case-insensitive search
        restaurants = restaurant.Restaurant.query.filter(
            or_(
                restaurant.Restaurant.name.ilike(f"%{query}%"),
                restaurant.Restaurant.address.ilike(f"%{query}%"),
                restaurant.Restaurant.cuisine.ilike(f"%{query}%")
            )
        ).all()

        restaurant_data = []
        for res in restaurants:
            res_img = restaurant_image.RestaurantImage.query.filter_by(restaurant=res.restaurant_id).first()

            img_url = None
            if res_img:
                img_url_obj = image_url.ImageURL.query.get(res_img.image)
                if img_url_obj:
                    img_url = img_url_obj.image_url

            restaurant_data.append({
                "name": res.name,
                "cuisine": res.cuisine,
                "address": res.address,
                "open_date": res.open_date,
                "rating": float(res.rating),
                "review_count": res.review_count,
                "image_url": img_url
            })

        return restaurant_data

    except Exception as e:
        print(f"Error fetching restaurants by query: {e}")
        return []
