from flask import Flask
# from .db import db

def create_app():
    app = Flask(__name__, template_folder="../frontend/templates")

    # Database configuration

    # Import and register blueprints
    from .routes import routes
    app.register_blueprint(routes.bp)

    return app
