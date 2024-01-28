from flask import Flask, request
import spotify_suggest

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')


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
