document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const doctor = document.getElementById("doctor").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

  
    // Save appointment data in local storage
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push({ name, email, doctor, date, time });
    localStorage.setItem("appointments", JSON.stringify(appointments));
  
    alert("Appointment successfully booked!");
  
    // Redirect to dashboard
    window.location.href = "./dashboard.html";
  });
  