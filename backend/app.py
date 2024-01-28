from flask import Flask, request
import spotify_suggest
import cohere_chat
from flask_cors import CORS

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
CORS(app)

@app.route("/")
@app.route("/home")
@app.route("/playlist")
@app.route("/chat")
def serve_react_app():
    return app.send_static_file("index.html")


@app.route("/api/suggestions")
def get_music_suggestions():
    token = request.args.get('access_token')
    return spotify_suggest.getNostalgicSuggestions(token)


@app.route('/api/chat', methods=['POST'])
def get_cohere_chat():
    userid = request.json['userid']
    prompt = request.json['prompt']
    return cohere_chat.chat(userid, prompt)


if __name__ == '__main__':
    app.run(port=5001)
