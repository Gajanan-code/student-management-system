# Student Management System

A full-stack Student Management System built using **Java, Spring Boot, MySQL, HTML, CSS, and JavaScript**.

This application helps manage student records through a web-based dashboard with CRUD operations, search functionality, and data validation.

## Features

- **Dashboard:** View total students, departments, and records.
- **Add Students:** Register students with their name, email, and department.
- **View Students:** Display student records in a table.
- **Update Students:** Edit existing student information.
- **Delete Students:** Remove student records.
- **Search:** Search students by name, email, or department.
- **Data Validation:** Validate student information, including email addresses.
- **Database Integration:** Store student records in MySQL.

## Technologies Used

| Technology | Purpose |
|---|---|
| Java | Backend programming |
| Spring Boot | Backend framework and REST APIs |
| Spring Data JPA | Database operations |
| MySQL | Database |
| HTML | Web page structure |
| CSS | Styling and layout |
| JavaScript | Frontend functionality |
| Maven | Project build management |
| Git & GitHub | Version control |

## Project Structure

```text
studentmanagement/
│
├── src/
│   ├── main/
│   │   ├── java/com/ghl/studentmanagement/
│   │   │   ├── config/
│   │   │   ├── controller/
│   │   │   ├── exception/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   └── StudentmanagementApplication.java
│   │   │
│   │   └── resources/
│   │       ├── static/
│   │       │   ├── index.html
│   │       │   ├── style.css
│   │       │   └── script.js
│   │       └── application.properties
│   │
│   └── test/
│
├── pom.xml
├── mvnw
└── mvnw.cmd
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Gajanan-code/student-management-system.git
```

### 2. Open the Project

Open the project folder containing `pom.xml` in VS Code or your preferred Java IDE.

### 3. Configure MySQL

Create the database:

```sql
CREATE DATABASE student_management;
```

Check `src/main/resources/application.properties` for the database URL and username.

The database password is configured through an environment variable named `DB_PASSWORD`.

### 4. Set the Database Password

For Windows PowerShell:

```powershell
$secure = Read-Host "Enter MySQL password" -AsSecureString
$env:DB_PASSWORD = [System.Net.NetworkCredential]::new("", $secure).Password
```

### 5. Run the Application

On Windows:

```powershell
.\mvnw.cmd spring-boot:run
```

### 6. Open the Application

Visit:

```text
http://localhost:8080/
```

## REST API Endpoints

Base URL: `/api/students`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/students` | Get all students |
| GET | `/api/students/{id}` | Get student by ID |
| POST | `/api/students` | Add a new student |
| PUT | `/api/students/{id}` | Update student |
| DELETE | `/api/students/{id}` | Delete student |

## Future Improvements

- User authentication and authorization
- Improved dashboard analytics
- Pagination and sorting
- Deployment to a cloud platform
- AI-powered features

## Author

**Gajanan Lankatwar**

B.Tech Computer Science Engineering (AI & ML)

GitHub: [Gajanan-code](https://github.com/Gajanan-code)

---

⭐ If you find this project useful, consider giving the repository a star!