from taipy import Gui

excitement_page = """
# Welcome to Taipy
## Getting started with Taipy GUI
### How excited are you to try Taipy?

<|{excitement}|slider|min=1|max=100|>

My excitement level: <|{excitement}|text|>
"""
excitement = 100
tp_app = Gui(page=excitement_page)

if __name__ == "__main__":
    # Development mode, Flask runs the application for debugging.
    tp_app.run(use_reloader=True, dark_mode=False)
else:
    # Production mode, Azure Web Application runs the application with Gunicorn.
    app = tp_app.run(run_server=False)
