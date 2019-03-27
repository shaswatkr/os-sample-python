<!DOCTYPE html>
<html lang="en-US" dir="ltr">

<head>
    <title> Log In </title>
    <meta charset="utf-8">
    <script src="jquery-3.3.1.min.js"></script>
    <script src="func.js"></script>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="facebook" class="social"><i class="fa fa-facebook-f"></i></a>
                    <a href="googleplus" class="social"><i class="fa fa-google-plus"></i></a>
                    <a href="linkedin" class="social"><i class="fa fa-linkedin"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a href="facebook" class="social"><i class="fa fa-facebook-f"></i></a>
                    <a href="googleplus" class="social"><i class="fa fa-google-plus"></i></a>
                    <a href="linkedin" class="social"><i class="fa fa-linkedin"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your personal info
                    </p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
            view rawindex.html hosted
        </div>
    </div>
</body>

</html>
