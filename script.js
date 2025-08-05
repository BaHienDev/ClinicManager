document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  // Tài khoản admin cố định (sau này có thể mở rộng lưu từ localStorage)
  const adminUser = 'admin';
  const adminPass = '123456';

  if (username === adminUser && password === adminPass) {
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'home.html'; // sau này là trang chính quản lý phòng khám
  } else {
    errorMessage.textContent = 'Sai tên đăng nhập hoặc mật khẩu!';
  }
});
