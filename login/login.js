let loginBtn = document.getElementById("login");
let emailLoginInput = document.getElementById("emailLoginInput");
let passwordLoginInput = document.getElementById("passwordLoginInput");
let alertMessage = document.getElementById("alertMessage");


let arr;
if (localStorage.getItem("users")) {
  arr = JSON.parse(localStorage.getItem("users"));
} else {
  arr = [];
}
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (isEmpty() == true) {
    alertMessage.innerHTML = "all inputs are required";
    alertMessage.style.color = "red";
  } else {
    alertMessage.innerHTML = "success";
    alertMessage.style.color = "green";
    if (login() == true) {
      window.location.href = "../home/home.html";
    } else {
      alertMessage.innerHTML = "email or password incorrect";
      alertMessage.style.color = "red";
    }
  }
});

function isEmpty() {
  if (emailLoginInput.value == "" || passwordLoginInput.value == "") {
    return true;
  } else {
    return false;
  }
}

function login() {
  let arr = JSON.parse(localStorage.getItem("users"));

  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].email == emailLoginInput.value &&
        arr[i].password == passwordLoginInput.value
      
      ) {
        localStorage.setItem("userName", arr[i].userName);
        return true;
      }
    }
  }else{
    return false;
  }
}
