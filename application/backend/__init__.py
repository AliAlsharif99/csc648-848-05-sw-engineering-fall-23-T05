import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_caching import Cache
from flask_session import Session
from dotenv import load_dotenv


db = SQLAlchemy()
cache = Cache(config={'CACHE_TYPE': 'simple', 'CACHE_DEFAULT_TIMEOUT': 300})  # Configure cache
load_dotenv()  # Loads env. var. from .env file


def create_app():
    app = Flask(__name__)
    app.secret_key = os.environ.get('SECRET_KEY', 'default_secret_key')

    # Cross-Origin Resource Sharing (CORS) configuration
    if os.environ.get('FLASK_ENV') == 'production':
        cors_origins = os.environ.get('PROD_CORS_ORIGINS', 'default_production_origin')
    else:
        cors_origins = os.environ.get('DEV_CORS_ORIGINS', 'http://localhost:3000')
    CORS(app, resources={r"/api/*": {"origins": cors_origins}}, supports_credentials=True)

    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
        'SQLALCHEMY_DATABASE_URI',
        'default_database_uri'
    )
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable tracking to save resources

    # Flask-Session configuration
    app.config['SESSION_TYPE'] = 'filesystem'
    app.config['SESSION_COOKIE_NAME'] = 'session'
    app.config['SESSION_COOKIE_PATH'] = '/'
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    app.config['SESSION_COOKIE_SECURE'] = False
    Session(app)

    db.init_app(app)
    cache.init_app(app)  # Initialize cache

    # Import and register blueprints
    from .routes import routes
    app.register_blueprint(routes.bp)

    return app
