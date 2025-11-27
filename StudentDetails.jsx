import React, { useState } from 'react';
import { studentService } from '../services/studentService';

const StudentDetails = ({ studentId, onClose }) => {
    const [student, setStudent] = useState(null);

    const loadStudentDetails = async () => {
        try {
            const data = await studentService.getStudentById(studentId);
            setStudent(data);
        } catch (error) {
            alert('Error loading student details: ' + error.message);
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h2>Student Details</h2>
                <div>
                    <button className="btn btn-primary" onClick={loadStudentDetails}>
                        Load Details
                    </button>
                    {onClose && (
                        <button className="btn btn-secondary" onClick={onClose} style={{ marginLeft: '10px' }}>
                            Close
                        </button>
                    )}
                </div>
            </div>

            {student ? (
                <div className="student-details">
                    <div className="detail-row">
                        <span className="detail-label">Name:</span>
                        <span className="detail-value">{student.name}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Section:</span>
                        <span className="detail-value">{student.section}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Marks:</span>
                        <span className="detail-value">{student.marks}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Grade:</span>
                        <span className="detail-value">
                            <span className={`grade-badge grade-${student.grade}`}>
                                {student.grade}
                            </span>
                        </span>
                    </div>
                </div>
            ) : (
                <p className="empty-message">Click "Load Details" to view student information.</p>
            )}
        </div>
    );
};

export default StudentDetails;
