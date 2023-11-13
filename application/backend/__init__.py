import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_caching import Cache
from flask_session import Session

db = SQLAlchemy()
cache = Cache(config={'CACHE_TYPE': 'simple', 'CACHE_DEFAULT_TIMEOUT': 300})  # Configure cache


def create_app():
    app = Flask(__name__)
    app.secret_key = 'bite_rate_app session_config secret_key'

    # Cross-Origin Resource Sharing (CORS) : With this, will allow our React app to make requests to our Flask server
    if os.environ.get('FLASK_ENV') == 'production':
        cors_origins = "http://biterate-env-1.eba-r3mebmuv.us-east-2.elasticbeanstalk.com"
    else:
        cors_origins = "http://localhost:3000"
    CORS(app, resources={r"/api/*": {"origins": cors_origins}}, supports_credentials=True)

    # Database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] \
        = 'mysql+pymysql://admin:oldschool@biteratedb-proto.cnoyllr6qcmr.us-east-2.rds.amazonaws.com:3306/biteRateDB'
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
