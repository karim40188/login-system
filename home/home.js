let logoutBtn = document.getElementById("logout");
if (localStorage.getItem("userName")) {
  document.getElementById("user").innerHTML = `welcome ${localStorage.getItem(
    "userName"
  )}`
} else {
  console.log("Guest");
}
console.log(localStorage.getItem("userName"));
logoutBtn.addEventListener("click", logout);
function logout() {
  localStorage.removeItem("userName");
}
