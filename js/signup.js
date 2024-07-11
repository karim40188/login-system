let signupBtn = document.getElementById("signupBtn");
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let message = document.getElementById("alert");

let arr;
//?          check localstorage
if (localStorage.getItem("users")) {
  arr = JSON.parse(localStorage.getItem("users"));
} else {
  arr = [];
}

//?        Sign up
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let data = {
    userName: userName.value,
    email: email.value,
    password: password.value,
  };
  console.log(data);

  if (isInputsEmpty() == true) {
    alertMessage("All Inputs are required", "red");
  } else {
    if (checkUser() == true) {
      alertMessage("email already exist", "red");
    } else {
      arr.push(data);
      localStorage.setItem("users", JSON.stringify(arr));
      localStorage.setItem("userName", JSON.stringify(arr).userName);
      console.log(arr);
      alertMessage("Success", "green");
      window.location.href = "../login/login.html";
    }
  }

  clrForm();
});

//!        clear form
function clrForm() {
  userName.value = "";
  email.value = "";
  password.value = "";
}

// * Alert Message
function alertMessage(text, color) {
  message.innerHTML = text;
  message.style.color = color;
}

// ? Check Inputs
function isInputsEmpty() {
  if (userName.value == "" || email.value == "" || password.value == "") {
    return true;
  } else {
    return false;
  }
}
function checkUser() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].email === email.value) {
      return true;
    }
  }
}
