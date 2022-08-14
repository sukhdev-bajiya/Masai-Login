document.querySelector("form").addEventListener("submit", findUserData);

function findUserData(event) {
  event.preventDefault();
  let userEmail = document.getElementById("logEmail").value;
  let userPass = document.getElementById("logPass").value;
  
  var users = JSON.parse(localStorage.getItem("users"));
  
  var filterUser = users.filter(function (ele) {
    return ele.email === userEmail && ele.password === userPass;
  });

  if (filterUser.length == 1) {
    alert("login successful");
  } else {
    alert("wrong credentials");
  }

  logEmail.value = "";
  logPass.value = "";
}

function seePass() {
  var viz = document.getElementById("logPass");
  var img = document.getElementById("icon");
  if (viz.type === "password") {
    viz.type = "text";
    img.src = "eye-solid.svg";
  } else {
    viz.type = "password";
    img.src = "eye-slash-solid.svg";
  }
}