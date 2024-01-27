from taipy import Gui

main_page = """
boomboxify  
{: .my-style }

"""

Gui(page=main_page, css_file='./main.css').run(use_reloader=True, dark_mode=False )