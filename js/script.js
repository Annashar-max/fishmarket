document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'block';
  });
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'none';
  });
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can add login validation logic here
    console.log('Logging in...');
  });