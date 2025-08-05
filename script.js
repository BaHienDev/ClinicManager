function login(event) {
  event.preventDefault(); // ngăn form submit mặc định

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (username === "admin" && password === "123456") {
    window.location.href = "home.html";
  } else {
    errorMsg.textContent = "Sai tài khoản hoặc mật khẩu!";
  }

  return false;
}
