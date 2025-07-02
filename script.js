// Modal login logic
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const loginMsg = document.getElementById('loginMsg');

if (loginBtn && loginModal && closeModal && loginForm) {
  loginBtn.onclick = function() {
    loginModal.style.display = 'flex';
    loginMsg.textContent = "";
    loginForm.reset();
  };
  closeModal.onclick = function() {
    loginModal.style.display = 'none';
  };
  window.onclick = function(event) {
    if (event.target == loginModal) {
      loginModal.style.display = 'none';
    }
  };

  loginForm.onsubmit = function(e) {
    e.preventDefault();
    // Simple static validation (for demo, replace with actual backend logic)
    const username = loginForm.username.value.trim();
    const password = loginForm.password.value.trim();
    if (username === "customer" && password === "password") {
      loginMsg.style.color = "green";
      loginMsg.textContent = "Login successful! (demo only)";
      setTimeout(() => { loginModal.style.display = 'none'; }, 1000);
    } else {
      loginMsg.style.color = "#d00";
      loginMsg.textContent = "Invalid username or password!";
    }
  };
}

// Contact form logic (demo only)
const contactForm = document.getElementById('contactForm');
const contactMsg = document.getElementById('contactMsg');
if (contactForm) {
  contactForm.onsubmit = function(e) {
    e.preventDefault();
    contactMsg.style.color = "green";
    contactMsg.textContent = "Thank you for contacting us! We will get back to you soon.";
    contactForm.reset();
    setTimeout(() => { contactMsg.textContent = ""; }, 5000);
  };
}
