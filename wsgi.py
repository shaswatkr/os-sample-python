from flask import Flask, render_template
application = Flask(__name__)
@application.route("/")
def home():
    return render_template("App.html")
@application.route("/salvador")
def salvador():
    return "Hello, Salvador"
if __name__ == "__main__":
    application.run(debug=True)
