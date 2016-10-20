function register(){
  window.alert("Username - " + document.getElementById("user").value +
        "\nPassword - " + document.getElementById("pass").value);
}

function validateUsername(){
  var userEntered = document.getElementById("user").value;
  var tempUsrLen = userEntered.length;

  if(tempUsrLen < 6)
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if (userEntered.includes(" ")) {
    document.getElementById("usernameError").innerHTML="Username must NOT contain any spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    // Green status (all conditions satisfied)
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("usernameGroup").classList.add("has-success");

  }
}

function validatePassword(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var tempPassLen = passEntered.length;

  if(passEntered.toLowerCase() == "password")
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must NOT be the word 'password'.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if (passEntered == userEntered) {
    document.getElementById("passwordError").innerHTML="Password must NOT be the same as the Username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if ((tempPassLen < 6) || (tempPassLen > 20)) {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
    // Green status (all conditions satisfied)
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("passwordError").classList.remove("shown-message");
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
//-------------------------------------------------------------------------
// function validate(){
//   //Grab the user's input and store in variables
//   var userEntered = document.getElementById("user").value;
//   var passEntered = document.getElementById("pass").value;
//   var tempPassLen = passEntered.length;
//   var tempUsrLen = userEntered.length;
//   if(tempUsrLen < 6)
//   {
//     //Show message that there is an error with the username...
//     document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
//     document.getElementById("usernameError").classList.remove("hidden-message");
//     document.getElementById("usernameError").classList.add("shown-message");
//     //Turn the username items red
//     document.getElementById("usernameGroup").classList.add("has-error");
//   }
//   else if (userEntered.includes(" ")) {
//     document.getElementById("usernameError").innerHTML="Username must NOT contain any spaces.";
//     document.getElementById("usernameError").classList.remove("hidden-message");
//     document.getElementById("usernameError").classList.add("shown-message");
//     document.getElementById("usernameGroup").classList.add("has-error");
//   }
//   else {
//     // Green status (all conditions satisfied)
//     document.getElementById("usernameError").innerHTML="";
//     document.getElementById("usernameError").classList.remove("shown-message");
//     document.getElementById("usernameGroup").classList.remove("has-error");
//     document.getElementById("usernameGroup").classList.add("has-success");
//
//   }
//
//   if(passEntered.toLowerCase() == "password")
//   {
//     //Show message that there is an error with the password...
//     document.getElementById("passwordError").innerHTML="Password must NOT be the word 'password'.";
//     document.getElementById("passwordError").classList.remove("hidden-message");
//     document.getElementById("passwordError").classList.add("shown-message");
//     //Turn the password items red
//     document.getElementById("passwordGroup").classList.add("has-error");
//   }
//   else if (passEntered == userEntered) {
//     document.getElementById("passwordError").innerHTML="Password must NOT be the same as the Username.";
//     document.getElementById("passwordError").classList.remove("hidden-message");
//     document.getElementById("passwordError").classList.add("shown-message");
//     document.getElementById("passwordGroup").classList.add("has-error");
//   }
//   else if ((tempPassLen < 6) || (tempPassLen > 20)) {
//     document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
//     document.getElementById("passwordError").classList.remove("hidden-message");
//     document.getElementById("passwordError").classList.add("shown-message");
//     document.getElementById("passwordGroup").classList.add("has-error");
//   }
//   else {
//     // Green status (all conditions satisfied)
//     document.getElementById("passwordError").innerHTML="";
//     document.getElementById("passwordError").classList.remove("shown-message");
//     document.getElementById("passwordGroup").classList.remove("has-error");
//     document.getElementById("passwordGroup").classList.add("has-success");
//   }
//
//
// }
