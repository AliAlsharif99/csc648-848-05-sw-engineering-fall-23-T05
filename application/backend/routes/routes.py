from flask import Blueprint, render_template, request, flash, redirect, url_for, session
from ..controllers import controllers

bp = Blueprint('routes', __name__)


@bp.route('/')
def home():
    restaurants = controllers.get_top_rated_restaurants()
    return render_template('home.html', restaurants=restaurants)


@bp.route('/registration', methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        email = request.form.get('email')
        password = request.form.get('password')

        # Check if user already exist...
        existing_user = controllers.get_user_by_email(email)
        if existing_user:
            #flash('Email already registered. Please use a different email.', 'danger')
            print('Email already registered. Please use a different email.')
            return redirect(url_for('routes.registration'))

        controllers.add_user(first_name, last_name, password, email)

        # flash('Registration successful!', 'success')
        print('Registration successful!')
        return redirect(url_for('routes.home'))

    return render_template('registration.html')


@bp.route('/login', methods=['GET', 'POST'])
def login():
    # Check if the user is already logged in
    if 'user_id' in session:
        # flash('You are already logged in!', 'info')
        print('You are already logged in!')
        return redirect(url_for('routes.home'))

    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        user_instance = controllers.verify_user(email, password)

        if user_instance:
            session['user_id'] = user_instance.user_id
            # flash('Logged in successfully!', 'success')
            print('Logged in successfully!')
            return redirect(url_for('routes.home'))
        else:
            # flash('Invalid email or password', 'danger')
            print('Invalid email or password')
            return redirect(url_for('routes.login'))

    return render_template('login.html')


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
    print(str(restaurants))
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




