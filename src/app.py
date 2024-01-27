from taipy import Gui

excitement_page = """
# Welcome to Taipy
## Getting started with Taipy GUI
### How excited are you to try Taipy?

<|{excitement}|slider|min=1|max=100|>

My excitement level: <|{excitement}|text|>
"""
excitement = 100

Gui(page=excitement_page).run()