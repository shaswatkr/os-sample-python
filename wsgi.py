from flask import Flask
application = Flask(__name__)
 
@application.route("/")
def index():
	return "Index!"
 
@application.route("/hello")
def hello():
	return "Hello World!"
 
@application.route("/members")
def members():
	return "Members"
 
@application.route("/members/<string:name>/")
def getMember(name):
	return name</string:name>
 
if __name__ == "__main__":
	application.run()
