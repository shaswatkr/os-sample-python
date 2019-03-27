from flask
import Flask, flash, redirect, render_template, request, session, abort

application = Flask(__name__)

@application.route("/")
def index():
  return "Flask App!"

@application.route("/hello)
def hello():
    return render_template('test.html')

if __name__ == "__main__":
    application.run(host = '0.0.0.0', port = 80)
