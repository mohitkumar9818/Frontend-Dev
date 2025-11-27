import React, { useState } from 'react';
import { studentService } from '../services/studentService';

const StudentForm = ({ studentToEdit, onSuccess }) => {
    const [formData, setFormData] = useState(
        studentToEdit || {
            name: '',
            section: '',
            marks: '',
            grade: '',
        }
    );

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.section || !formData.marks || !formData.grade) {
            alert('Please fill all fields');
            return;
        }

        try {
            if (studentToEdit && studentToEdit.id) {
                await studentService.updateStudent(studentToEdit.id, formData);
                alert('Student updated successfully!');
            } else {
                await studentService.addStudent(formData);
                alert('Student added successfully!');
            }

            setFormData({ name: '', section: '', marks: '', grade: '' });
            if (onSuccess) onSuccess();
        } catch (error) {
            alert('Error saving student: ' + error.message);
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h2>{studentToEdit ? 'Edit Student' : 'Add New Student'}</h2>
            </div>

            <form onSubmit={handleSubmit} className="student-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter student name"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="section">Section</label>
                    <input
                        type="text"
                        id="section"
                        name="section"
                        value={formData.section}
                        onChange={handleChange}
                        placeholder="Enter section (e.g., A, B, C)"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="marks">Marks</label>
                    <input
                        type="number"
                        id="marks"
                        name="marks"
                        value={formData.marks}
                        onChange={handleChange}
                        placeholder="Enter marks"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="grade">Grade</label>
                    <select
                        id="grade"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="">Select Grade</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-success btn-block">
                    {studentToEdit ? 'Update Student' : 'Add Student'}
                </button>
            </form>
        </div>
    );
};

export default StudentForm;
