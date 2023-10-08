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


