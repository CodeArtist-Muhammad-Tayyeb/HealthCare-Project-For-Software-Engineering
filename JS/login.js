// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
  
    // Simulate successful login and redirect to dashboard
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Redirect to the dashboard page
  });
  


