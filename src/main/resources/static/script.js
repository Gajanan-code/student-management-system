
// Get the student table body
const studentTable = document.getElementById("studentTable");

// Function to fetch students from Spring Boot
async function loadStudents() {

    try {
        const response = await fetch("/api/students");

        if (!response.ok) {
            throw new Error("Failed to fetch students");
        }

        const students = await response.json();

// Update dashboard summary cards
const totalStudents = students.length;

const departments = new Set(
    students.map(student =>
        student.department.trim().toLowerCase()
    )
);

document.getElementById("totalStudents").textContent = totalStudents;

document.getElementById("totalDepartments").textContent = departments.size;

document.getElementById("totalRecords").textContent = totalStudents;


        // Clear existing table rows
        studentTable.innerHTML = "";

        // Display each student
        students.forEach(student => {

            const row = document.createElement("tr");

         
row.innerHTML = `
    <td>${student.id}</td>
    <td>${student.name}</td>
    <td>${student.email}</td>
    <td>${student.department}</td>
    <td>
        <button type="button" onclick="editStudent(${student.id}, '${student.name}', '${student.email}', '${student.department}')">
            Edit
        </button>

        <button type="button" onclick="deleteStudent(${student.id})">
            Delete
        </button>
    </td>
`;


            studentTable.appendChild(row);
        });

    } catch (error) {
        console.error("Error:", error);
        alert("Unable to load student records.");
    }
}

// Load students when the page opens
loadStudents();

// Get the student form
const studentForm = document.getElementById("studentForm");

// Handle form submission
studentForm.addEventListener("submit", async function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Collect student details
    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        department: document.getElementById("department").value
    };

    try {
        // Send student details to Spring Boot
        const response = await fetch("/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }

        // Show success message
        alert("Student added successfully!");

        // Clear form fields
        studentForm.reset();

        // Refresh student records
        loadStudents();

    } catch (error) {
        console.error("Error:", error);
        alert("Unable to add student. Please check the details.");
    }
});

async function deleteStudent(id) {

    // Ask for confirmation
    const confirmDelete = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
        return;
    }

    try {
        const response = await fetch(`/api/students/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Failed to delete student");
        }

        alert("Student deleted successfully!");

        // Refresh the table
        loadStudents();

    } catch (error) {
        console.error("Error:", error);
        alert("Unable to delete student.");
    }
}

async function editStudent(id, name, email, department) {

    // Ask for updated student details
    const newName = prompt("Enter student name:", name);

    if (newName === null) return;

    const newEmail = prompt("Enter student email:", email);

    if (newEmail === null) return;

    const newDepartment = prompt("Enter department:", department);

    if (newDepartment === null) return;

    // Prepare updated student data
    const updatedStudent = {
        name: newName.trim(),
        email: newEmail.trim(),
        department: newDepartment.trim()
    };

    if (!updatedStudent.name || !updatedStudent.email || !updatedStudent.department) {
        alert("All fields are required.");
        return;
    }

    try {
        const response = await fetch(`/api/students/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedStudent)
        });

        if (!response.ok) {
            throw new Error("Failed to update student");
        }

        alert("Student updated successfully!");

        // Refresh student records
        loadStudents();

    } catch (error) {
        console.error("Error:", error);
        alert("Unable to update student.");
    }
}

// Get the search input
const searchInput = document.getElementById("searchInput");

// Search students while typing
searchInput.addEventListener("input", function() {

    const searchValue = searchInput.value.toLowerCase();

    // Get all student rows
    const rows = studentTable.querySelectorAll("tr");

    rows.forEach(row => {

        const studentDetails = row.textContent.toLowerCase();

        if (studentDetails.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });

});


