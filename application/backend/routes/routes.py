from flask import Blueprint, render_template, request, make_response, redirect, url_for, session, jsonify
from ..controllers import controllers

bp = Blueprint('routes', __name__)


@bp.route('/api/')
def landing():
    restaurants = controllers.get_top_rated_restaurants()
    return jsonify({"restaurants": restaurants})


@bp.route('/api/home')
def home():
    restaurants = controllers.get_top_rated_restaurants()

    user_data = None
    if 'user_id' in session:
        user_data = controllers.get_user_by_id(session['user_id'])
    return jsonify({"restaurants": restaurants, "user": user_data})


@bp.route('/api/registration', methods=['POST'])
def registration():
    data = request.get_json()
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    email = data.get('email')
    password = data.get('password')

    # Check if user already exists...
    existing_user = controllers.get_user_by_email(email)
    if existing_user:
        return make_response(jsonify({'message': 'Email already registered. Please use a different email.'}), 400)

    controllers.add_user(first_name, last_name, password, email)
    return make_response(jsonify({'message': 'Registration successful!'}), 201)


@bp.route('/api/login', methods=['POST'])
def login():
    if 'user_id' in session:
        print('You are already logged in!')
        return jsonify({"message": "Already logged in"}), 200

    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user_instance = controllers.verify_user(email, password)

    if user_instance:
        session['user_id'] = user_instance.user_id
        print('Logged in successfully!')
        return jsonify({"message": "Logged in successfully!"}), 200
    else:
        print('Invalid email or password')
        return jsonify({"message": "Invalid email or password"}), 401


@bp.route('/logout')
def logout():
    if 'user_id' in session:
        session.pop('user_id')
    # flash('Logged out successfully!', 'success')
    print('Logged out successfully!')
    return redirect(url_for('routes.home'))


@bp.route('/restaurant')
def restaurant():
    return render_template('restaurant.html')


@bp.route('/feed')
def feed():
    return render_template('feed.html')


@bp.route('/search_result')
def search_result():
    query = request.args.get('search')
    restaurants = controllers.search_restaurants(query)
    return render_template('search_result.html', restaurants=restaurants)


@bp.route('/team')
def team():
    return render_template('team.html')


@bp.route('/contact')
def contact():
    return render_template('contact.html')


@bp.route('/follow')
def follow():
    return render_template('follow.html')


@bp.route('/terms')
def terms():
    return render_template('terms.html')




