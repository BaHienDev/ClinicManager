document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (username === "admin" && password === "123456") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    errorMessage.textContent = "Sai email hoặc mật khẩu!";
  }
});
