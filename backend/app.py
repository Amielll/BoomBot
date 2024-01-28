from flask import Flask, redirect

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

AUTH_URL = "https://accounts.spotify.com/authorize"


# @app.route("/")
def index(state):
    # state.loginpage = "<a href='/login'>Login with Spotify</a>"
    eax = redirect(AUTH_URL)
    print(eax)
    state.loginpage = redirect(AUTH_URL)


@app.route('/login')
def login(state=None):
    return redirect(AUTH_URL)


@app.route('/hello')
def hello():
    return 'hello'


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file('index.html')


if __name__ == '__main__':
    app.run(port=5001)
