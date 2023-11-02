from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_caching import Cache

db = SQLAlchemy()
cache = Cache(config={'CACHE_TYPE': 'simple', 'CACHE_DEFAULT_TIMEOUT': 300})  # Configure cache


def create_app():
    app = Flask(__name__)
    # Cross-Origin Resource Sharing (CORS) : With this, will allow our React app to make requests to our Flask server
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)
    app.secret_key = 'bite_rate_app session_config secret_key'

    # Database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:oldschool@localhost/biteRateDB'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable tracking to save resources

    # Session cookie configurations
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    app.config['SESSION_COOKIE_SECURE'] = False

    db.init_app(app)
    cache.init_app(app)  # Initialize cache

    # Import and register blueprints
    from .routes import routes
    app.register_blueprint(routes.bp)

    return app
