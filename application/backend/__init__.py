from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()


def create_app():
    app = Flask(__name__, template_folder="../frontend/templates", static_folder="../frontend/static")
    # Cross-Origin Resource Sharing (CORS) : With this, will allow our React app to make requests to our Flask server
    CORS(app)
    app.secret_key = 'bite_rate_app session_config secret_key'

    # Database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:oldschool@34.82.27.119/biteRateDB'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable tracking to save resources

    db.init_app(app)

    # Import and register blueprints
    from .routes import routes
    app.register_blueprint(routes.bp)

    return app
