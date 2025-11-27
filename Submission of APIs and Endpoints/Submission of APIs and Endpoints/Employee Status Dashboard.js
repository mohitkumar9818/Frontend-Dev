const table = document.getElementById("employeeTable");
const errorBox = document.getElementById("error");

function fetchEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/employees");
  xhr.onload = function () {
    const employees = JSON.parse(xhr.responseText);
    table.innerHTML = "";
    employees.forEach(emp => renderRow(emp));
  };
  xhr.send();
}

function renderRow(emp) {
  const tr = document.createElement("tr");

  const statusClass = emp.status === "active" ? "active" : "inactive";

  tr.innerHTML = `
    <td>${emp.id}</td>
    <td>${emp.name}</td>
    <td class="${statusClass}" id="status-${emp.id}">${emp.status}</td>
    <td>
      <button class="toggle-btn" onclick="toggleStatus(${emp.id}, '${emp.status}')">
        Toggle
      </button>
    </td>
  `;

  table.appendChild(tr);
}

function toggleStatus(id, currentStatus) {
  errorBox.style.display = "none";

  const newStatus = currentStatus === "active" ? "inactive" : "active";
  const statusCell = document.getElementById(`status-${id}`);
  const oldStatus = currentStatus;

  statusCell.textContent = newStatus;
  statusCell.className = newStatus;

  const xhr = new XMLHttpRequest();
  xhr.open("PATCH", `http://localhost:3000/employees/${id}`);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status !== 200) {
      statusCell.textContent = oldStatus;
      statusCell.className = oldStatus;
      errorBox.style.display = "block";
    }
  };

  xhr.onerror = function () {
    statusCell.textContent = oldStatus;
    statusCell.className = oldStatus;
    errorBox.style.display = "block";
  };

  xhr.send(JSON.stringify({ status: newStatus }));
}

fetchEmployees();
