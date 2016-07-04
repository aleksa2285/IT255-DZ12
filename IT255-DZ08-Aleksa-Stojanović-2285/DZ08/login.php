<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Met restaurants</title>
    <link rel='stylesheet prefetch' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'>

        <link rel="stylesheet" href="css/loginStyle.css"> 
  </head>

  <body>

  
    <div class="login-form">
     <h1>Met restaurants</h1>
     <div class="form-group">
       <input type="text" class="form-control" placeholder="Username" id="UserName" name="username">
       <i class="fa fa-user"></i>
     </div>
     <div class="form-group log-status" id="1">
       <input type="password" class="form-control" placeholder="Password" id="Password" name="password">
       <i class="fa fa-lock"></i>
     </div>
     <span class="alert">Invalid Credentials</span>
     <a class="link" href="#">Lost your password?</a>
     <div style="width:100% display:inline-block;">
     <button type="button" class="log-btn" id="submitButton">Log in</button>
     <button type="button" class="register-btn">Register</button>
     </div>
   </div>
   <!-- register forma -->
   <div class="login-form" style="display: none;" id ="registerForm">
     <h1>Met restaurants</h1>
<div class="form-group">
        <input type="text" class="form-control" placeholder="Email" id="remail" name="email">
        <i class="fa fa-envelope"></i>
        </div>
    <!-- kopirani red -->
    <div class="form-group">
       <input type="text" class="form-control" placeholder="Username" id="rname" name="username">
       <i class="fa fa-user"></i>
     </div>
     <!-- -->
     <div class="form-group log-status" id="1">
       <input type="password" class="form-control" placeholder="Password" id="rpassword" name="password">
       <i class="fa fa-lock"></i>
     </div>
     <span class="alert">Invalid Credentials</span>
     <div style="width:100% display:inline-block;">
     <button type="button" class="register-btn" id="registerButton">Register</button>
     </div>
   </div>
    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
   <script src="js/index.js"></script>

    
    
  <script>

    $(function(){
      $('.register-btn').on('click', function(){
      $( '#registerForm' ).fadeIn( "slow", function() {
   
      });      
      });
      $('#registerButton').on('click', function(){

        var registerData = 'email='+ $('#remail').val() + '&username=' + $('#rname').val() + '&password=' + $('#rpassword').val();

         $.ajax({

             type: "POST", 
             cache: false, 
             url: "http://localhost/it255-dz05/registerService.php",
             data: registerData,    
             success: function (html) {
 
                if ((html.indexOf('Username already exists')) !=-1) {
                  window.alert('Korisničko ime već postoji, odaberite drugo');
                }
                else if ((html.indexOf('Email address must have at least 6 characters')) !=-1) {
                  window.alert('Email adresa nije validna');
                }
                else if((html.indexOf('Password must have at least 5 characters')) !=-1) {
                  window.alert('Odaberite lozinku dužu od 6 karaktera');
                }
                else{
                  var token = html.substring(10, (html.length-2));
                  window.alert('Uspesno ste se registrovali');
                  document.location = "index.html";
                  localStorage.setItem('token', token);
                }
            }

         });
        
      });
      $('#submitButton').on('click', function(){

        var data = 'username=' + $('#UserName').val() + '&password=' + $('#Password').val();
       
         $.ajax({

             type: "POST", 
             cache: false, 
             url: "http://localhost/it255-dz05/checkLoginService.php",
             data: data,    
             success: function (html) {

                
                if ((html.indexOf('Invalid username/password')) !=-1) {
                    wrongEntry();
           
                }
                
                else {
                  var token = html.substring(10, (html.length-2));
                  localStorage.setItem('token', token);
                  document.location = "index.html";
                
                }
            }

         });
         

      });
    });
  </script>
  </body>
</html>
