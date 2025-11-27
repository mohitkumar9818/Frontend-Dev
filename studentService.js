const API_URL = 'http://localhost:5000/students';

export const studentService = {
    getAllStudents: async () => {
        const response = await fetch(API_URL);
        return response.json();
    },

    addStudent: async (student) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });
        return response.json();
    },

    updateStudent: async (id, student) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(student),
        });
        return response.json();
    },

    deleteStudent: async (id) => {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    },

    getStudentById: async (id) => {
        const response = await fetch(`${API_URL}/${id}`);
        return response.json();
    },
};
