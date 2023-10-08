from flask import Blueprint, render_template

bp = Blueprint('routes', __name__)


@bp.route('/')
def home():
    return render_template('home.html')


@bp.route('/registration')
def registration():
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




