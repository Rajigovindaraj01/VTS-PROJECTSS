    const menuToggle = document.getElementById("menu-toggle");
    const sideNav = document.getElementById("side-nav");

    menuToggle.addEventListener("click", () => {
        sideNav.classList.toggle("active");
    })


    const data = JSON.parse(localStorage.getItem("payrollData"));

if (data) {
  document.getElementById("name").textContent = data.name;
  document.getElementById("employeeId").textContent = data.employeeId;
  document.getElementById("role").textContent = data.role;
  document.getElementById("date").textContent = data.date;

  const month = new Date(data.date).toLocaleString('default', { month: 'long' });
  document.getElementById("month").textContent = month;

  document.getElementById("empIdRow").textContent = data.employeeId;
  document.getElementById("nameRow").textContent = data.name;
  document.getElementById("roleRow").textContent = data.role;
  document.getElementById("basicSalaryRow").textContent = data.basicSalary;
  document.getElementById("totalSalaryRow").textContent = data.totalSalary;
  document.getElementById("additionsRow").textContent = data.additions || 0;
  document.getElementById("deductionsRow").textContent = data.deductions || 0;

  const earnings = 
    Number(data.totalSalary || 0) + Number(data.additions || 0) - Number(data.deductions || 0);

  document.getElementById("totalEarnings").textContent = earnings.toLocaleString();
}

function downloadPDF() {
  const content = document.getElementById("payrollContent");
  html2pdf().from(content).save(`Payroll-${data.name || 'Employee'}.pdf`);
}