from taipy import Gui

main_page = """

boomboxify  
{: .my-style }

Your Retro AI Boombox, Bringing Nostalgia to the Digital Era!
{: .subheader}


<|get started with spotify|button|id=button1|>


<|link to our chatbot!|button|id=button2|>

<|{musical_notes}|image|id=musicnotes|>

<|{boombox}|image|id=boombox|>

"""

musical_notes = './assets/musical_notes.png'
boombox = './assets/boombox.png'

Gui(page=main_page, css_file='./main.css').run(use_reloader=True, dark_mode=False)