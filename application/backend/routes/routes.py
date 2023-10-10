from flask import Blueprint, render_template, request, flash, redirect, url_for
from ..controllers import controllers

bp = Blueprint('routes', __name__)


@bp.route('/')
def home():
    return render_template('home.html')


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


@bp.route('/login')
def login():
    return render_template('login.html')


@bp.route('/feed')
def feed():
    return render_template('feed.html')


@bp.route('/search')
def search():
    return render_template('search.html')


@bp.route('/team')
def team():
    return render_template('team.html')




