document.querySelector("form").addEventListener("submit", addUserData);

var userData = JSON.parse(localStorage.getItem("users")) || [];

function addUserData(event) {
  event.preventDefault();
  var userEmail = document.getElementById("email").value;
  var userNumber = document.getElementById("mobile").value;
  var userPass = document.getElementById("password").value;


    var obj = {
      email: userEmail,
      number: userNumber,
      password: userPass,
    };
    userData.push(obj);
    localStorage.setItem("users", JSON.stringify(userData));

    email.value = "";
    mobile.value = "";
    password.value = "";
  
}

function seePass() {
  var viz = document.getElementById("password");
  var img = document.getElementById("icon");
  if (viz.type === "password") {
    viz.type = "text";
    img.src = "eye-solid.svg";
  } else {
    viz.type = "password";
    img.src = "eye-slash-solid.svg";
  }
}