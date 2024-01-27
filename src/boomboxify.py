from taipy import Gui
from flask import Flask, redirect
import multiprocessing
import time

app = Flask(__name__)


AUTH_URL = "https://accounts.spotify.com/authorize"

#@app.route("/")
def index(state):
    #state.loginpage = "<a href='/login'>Login with Spotify</a>"
    eax = redirect(AUTH_URL)
    print(eax)
    state.loginpage = redirect(AUTH_URL)

@app.route('/login')
def login(state=None):
    return redirect(AUTH_URL)

loginpage = ""
    
main_page = """

boomboxify  
{: .my-style }

Your Retro AI Boombox, Bringing Nostalgia to the Digital Era!
{: .subheader}


<|get started with spotify|button|id=button1|on_action=index|>

<|{loginpage}|text|>
<|link to our chatbot!|button|id=button2|>

<|{musical_notes}|image|id=musicnotes|>

<|{boombox}|image|id=boombox|>

"""

musical_notes = './assets/musical_notes.png'
boombox = './assets/boombox.png'


def start_taipy(): 
    Gui(page=main_page, css_file='./main.css').run(use_reloader=True, dark_mode=False, port=5001)

def start_flask():
    app.run(port=5000)
    
process1 = multiprocessing.Process(target=start_taipy)
process2 = multiprocessing.Process(target=start_flask)

if __name__ ==  '__main__':
    process2.start()
    process1.start()

