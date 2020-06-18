<template>
  <div class="hello">
    <div class="container-fluid">       
      <div class="row">
        <div class="col-md-4 offset-md-4 col-sm-6 offset-sm-3">
          <!-- <div class="g-signin2" data-onsuccess="onSignIn"></div> -->
          <div id="my-signin2"></div>
          <form class="form-login" action>
            <div class="form-group">
              <label for="email">Email</label>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <i class="far fa-envelope input-group-text"></i>
                </div>
                <input name="email" id="email" type="text" class="form-control" />
              </div>
            </div>
            <div class="form-group">
              <label for="password">Senha</label>
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <i class="fas fa-lock input-group-text"></i>
                </div>
                <input type="password" name="password" id="password" class="form-control" />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Entrar</button>
          </form>
        </div>
      </div>
    </div>



      <div id="gSignInWrapper">
        <span class="label">Sign in with:</span>
        <div id="customBtn" class="customGPlusSignIn">
          <span class="icon"></span>
          <span class="buttonText">Google</span>
        </div>
      </div>
      <div id="name"></div>
  </div>
  
</template>

<script src="https://apis.google.com/js/api:client.js"></script>
<script>
export default {
  name: "Login",
  props: {
    msg: String
  },
  methods: {
    googleSingin: function(){
      onSignIn();
    }
  }
};

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

 var googleUser = {};
  var startApp = function() {
    window.onLoadCallback = function(){
      gapi.load('auth2', function(){
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        auth2 = gapi.auth2.init({
          client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
          // Request scopes in addition to 'profile' and 'email'
          //scope: 'additional_scope'
        });
        attachSignin(document.getElementById('customBtn'));
      });
    }
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }
  startApp();
</script>

  <style type="text/css">
    #customBtn {
      display: inline-block;
      background: white;
      color: #444;
      width: 190px;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
    }
    #customBtn:hover {
      cursor: pointer;
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.buttonText {
      display: inline-block;
      vertical-align: middle;
      padding-left: 42px;
      padding-right: 42px;
      font-size: 14px;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
    }
  </style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-login {
  text-align: left;
}
</style>
