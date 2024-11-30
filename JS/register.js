// Handle register form submission
document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    if (!fullname || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // Simulate successful registration
    alert("Registration successful! Redirecting to login...");
    window.location.href = "login.html";
  });
  