import React, { useState } from 'react';
import { studentService } from '../services/studentService';

const StudentList = ({ onEdit, onViewDetails }) => {
    const [students, setStudents] = useState([]);

    const loadStudents = async () => {
        try {
            const data = await studentService.getAllStudents();
            setStudents(data);
        } catch (error) {
            alert('Error loading students: ' + error.message);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            try {
                await studentService.deleteStudent(id);
                alert('Student deleted successfully! Click "Load Students" to refresh.');
            } catch (error) {
                alert('Error deleting student: ' + error.message);
            }
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h2>Student List</h2>
                <button className="btn btn-primary" onClick={loadStudents}>
                    Load Students
                </button>
            </div>

            {students.length === 0 ? (
                <p className="empty-message">No students found. Click "Load Students" to refresh.</p>
            ) : (
                <div className="table-container">
                    <table className="student-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Section</th>
                                <th>Marks</th>
                                <th>Grade</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.name}</td>
                                    <td>{student.section}</td>
                                    <td>{student.marks}</td>
                                    <td>
                                        <span className={`grade-badge grade-${student.grade}`}>
                                            {student.grade}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="btn btn-info btn-sm"
                                                onClick={() => onViewDetails(student.id)}
                                            >
                                                View
                                            </button>
                                            <button
                                                className="btn btn-warning btn-sm"
                                                onClick={() => onEdit(student)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(student.id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default StudentList;
