from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_app():
    app = Flask(__name__, template_folder="../frontend/templates")

    # Database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:oldschool@localhost/biteRateDB'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable tracking to save resources

    db.init_app(app)

    # Import and register blueprints
    from .routes import routes
    app.register_blueprint(routes.bp)

    return app
