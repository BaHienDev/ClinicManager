function showTab(tab) {
  document.getElementById('new').style.display = tab === 'new' ? 'block' : 'none';
  document.getElementById('old').style.display = tab === 'old' ? 'block' : 'none';
  if (tab === 'old') {
    renderCustomers();
  }
}

function addCustomer() {
  const name = document.getElementById('new-name').value.trim();
  const phone = document.getElementById('new-phone').value.trim();
  if (!name || !phone) {
    alert('Vui lòng nhập đầy đủ thông tin');
    return;
  }

  const customers = JSON.parse(localStorage.getItem('customers') || '[]');
  customers.push({ name, phone, added: new Date().toLocaleString() });
  localStorage.setItem('customers', JSON.stringify(customers));

  document.getElementById('new-name').value = '';
  document.getElementById('new-phone').value = '';
  alert('Đã thêm khách mới!');
}

function renderCustomers() {
  const list = document.getElementById('customer-list');
  list.innerHTML = '';
  const customers = JSON.parse(localStorage.getItem('customers') || '[]');
  customers.forEach((c, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${c.name} - ${c.phone} (đã thêm lúc: ${c.added})`;
    list.appendChild(li);
  });
}
