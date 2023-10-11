from flask import Blueprint, render_template, request, flash, redirect, url_for, session
from ..controllers import controllers

bp = Blueprint('routes', __name__)


@bp.route('/')
def home():
    restaurants = controllers.get_top_rated_restaurants()
    print("\n" + str(restaurants) + "\n")
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


@bp.route('/feed')
def feed():
    return render_template('feed.html')


@bp.route('/search')
def search():
    return render_template('search.html')


@bp.route('/team')
def team():
    return render_template('team.html')




