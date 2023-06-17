// Initialize an empty array to store the employees
let employees = [];

// Function to add a new employee
function addNewEmployee() {
  // Get the input values
  const name = document.querySelector('input[name="name"]').value;
  const profession = document.querySelector('input[name="profession"]').value;
  const age = parseInt(document.querySelector('input[name="age"]').value);

  // Check if required fields are empty
  if (name === '' || profession === '' || isNaN(age)) {
    showMessage('Error : Please Make sure All the fields are filled before adding in an employee !', 'error');
    return;
  }

  // Create a new employee object
  const newEmployee = {
    id: employees.length + 1,
    name: name,
    profession: profession,
    age: age
  };

  // Add the new employee to the array
  employees.push(newEmployee);

  // Display success message
  showMessage('Employee added successfully', 'success');

  // Reset input fields
  document.querySelector('input[name="name"]').value = '';
  document.querySelector('input[name="profession"]').value = '';
  document.querySelector('input[name="age"]').value = '';

  // Update the displayed employees
  displayEmployees();
}

// Function to display employees
function displayEmployees() {
  const displayContainer = document.querySelector('.display-employees');

  // Clear the container
  displayContainer.innerHTML = '';

  // Check if there are any employees
  if (employees.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No employees added.';
    displayContainer.appendChild(message);
    return;
  }

  // Create a div for each employee
  employees.forEach((employee) => {
    const employeeWithBtn = document.createElement("div");
    employeeWithBtn.className = "employee-with-btn";
    const employeeDiv = document.createElement('div');
    employeeDiv.classList.add('employee-details');

    // Employee Name
    const name = document.createElement('span');
    name.textContent = employee.name;
    employeeDiv.appendChild(name);

    // Employee Profession
    const profession = document.createElement('span');
    profession.textContent = employee.profession;
    employeeDiv.appendChild(profession);

    // Employee Age
    const age = document.createElement('span');
    age.textContent = employee.age;
    employeeDiv.appendChild(age);

    employeeWithBtn.append(employeeDiv);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = "btn2"
    deleteButton.textContent = 'Remove';
    deleteButton.addEventListener('click', () => {
      deleteEmployee(employee.id);
    });

    employeeWithBtn.append(deleteButton);

    // Append the employee div to the display container
    displayContainer.appendChild(employeeWithBtn);
  });
}

// Function to delete an employee
function deleteEmployee(id) {
  // Find the index of the employee in the array
  const index = employees.findIndex((employee) => employee.id === id);

  // Check if the employee exists
  if (index !== -1) {
    // Remove the employee from the array
    employees.splice(index, 1);
    // Update the displayed employees
    displayEmployees();
  }
}

// Function to show messages
function showMessage(message, type) {
  const messageDiv = document.querySelector('#message');
  messageDiv.textContent = message;
  messageDiv.classList.remove('success', 'error');
  messageDiv.classList.add(type);
  if (type == 'error') messageDiv.style = "color: red";
  else messageDiv.style = "color: green"
  setTimeout(function () {
    messageDiv.innerText = "";
  }, 1000);
}

// Call displayEmployees() initially to show the default view
displayEmployees();
