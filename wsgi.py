from flask import Flask
application = Flask(__name__)
@application.route("/")
def home():
    return render_template("home.html")
@application.route("/salvador")
def salvador():
    return "Hello, Salvador"
if __name__ == "__main__":
    application.run(debug=True)
