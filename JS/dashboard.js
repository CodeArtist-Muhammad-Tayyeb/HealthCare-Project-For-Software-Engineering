document.addEventListener("DOMContentLoaded", function () {
    const appointmentsTableBody = document.querySelector("#appointmentsTable tbody");
  
    // Fetch appointments from local storage
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
  
    if (appointments.length === 0) {
      appointmentsTableBody.innerHTML = `<tr><td colspan="5">No appointments found</td></tr>`;
      return;
    }
  
    // Populate table with appointments
    appointments.forEach((appointment) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${appointment.name}</td>
        <td>${appointment.email}</td>
        <td>${appointment.doctor}</td>
        <td>${appointment.date}</td>
        <td>${appointment.time}</td>
      `;
  
      appointmentsTableBody.appendChild(row);
    });
  });
  