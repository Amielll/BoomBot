import json
from os import environ as env
from urllib.parse import quote_plus, urlencode

from authlib.integrations.flask_client import OAuth
from dotenv import find_dotenv, load_dotenv
from flask import Flask, redirect, session, render_template, url_for, request
import spotify_suggest

ENV_FILE = find_dotenv()
if ENV_FILE:
    load_dotenv(ENV_FILE)

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
app.secret_key = env.get("APP_SECRET_KEY")
oauth = OAuth(app)

oauth.register(
    "auth0",
    client_id=env.get("AUTH0_CLIENT_ID"),
    client_secret=env.get("AUTH0_CLIENT_SECRET"),
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f'https://{env.get("AUTH0_DOMAIN")}/.well-known/openid-configuration'
)



@app.route("/")
@app.route("/home")
@app.route("/playlist")
@app.route("/chat")
def serve_react_app():
    return app.send_static_file("index.html")

@app.route("/suggestions")
def get_music_suggestions():
    token = request.args.get('access_token')
    return spotify_suggest.getNostalgicSuggestions(token)

if __name__ == '__main__':
    app.run(port=5001)
