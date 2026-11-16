
package com.ghl.studentmanagement.controller;

import com.ghl.studentmanagement.model.Student;
import com.ghl.studentmanagement.repository.StudentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    // 1. Get all students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // 2. Get student by ID
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable("id") Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    // 3. Create a new student
    @PostMapping
    public Student createStudent(@Valid @RequestBody Student student) {
        return studentRepository.save(student);
    }

    // 4. Update an existing student
    @PutMapping("/{id}")
    public Student updateStudent(
            @PathVariable("id") Long id,
            @Valid @RequestBody Student student) {

        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        existingStudent.setName(student.getName());
        existingStudent.setEmail(student.getEmail());
        existingStudent.setDepartment(student.getDepartment());

        return studentRepository.save(existingStudent);
    }

    // 5. Delete a student
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable("id") Long id) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        studentRepository.delete(student);

        return "Student deleted successfully!";
    }
}



