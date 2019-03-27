from flask import Flask
application = Flask(__name__)

@application.route("/")
def index():
    return "Index!"

@application.route("/hello")
def hello():
    return "Hello,World!"

@application.route("/members")
def members():
    return "Members"

if __name__ == "__main__":
    application.run()
