import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

function App() {
    const [currentView, setCurrentView] = useState('list');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    const handleEdit = (student) => {
        setSelectedStudent(student);
        setCurrentView('form');
    };

    const handleViewDetails = (studentId) => {
        setSelectedStudentId(studentId);
        setCurrentView('details');
    };

    const handleAddNew = () => {
        setSelectedStudent(null);
        setCurrentView('form');
    };

    const handleBackToList = () => {
        setSelectedStudent(null);
        setSelectedStudentId(null);
        setCurrentView('list');
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>📚 Student Result Management System</h1>
            </header>

            <div className="container">
                <div className="navigation">
                    <button
                        className={`nav-btn ${currentView === 'list' ? 'active' : ''}`}
                        onClick={handleBackToList}
                    >
                        Student List
                    </button>
                    <button
                        className={`nav-btn ${currentView === 'form' ? 'active' : ''}`}
                        onClick={handleAddNew}
                    >
                        Add Student
                    </button>
                </div>

                <div className="content">
                    {currentView === 'list' && (
                        <StudentList onEdit={handleEdit} onViewDetails={handleViewDetails} />
                    )}

                    {currentView === 'form' && (
                        <StudentForm studentToEdit={selectedStudent} onSuccess={handleBackToList} />
                    )}

                    {currentView === 'details' && (
                        <StudentDetails studentId={selectedStudentId} onClose={handleBackToList} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
