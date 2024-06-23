import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VolForm from './volunteerForm';

const VolDisplay = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/students/true-fields');
                setStudents(response.data);
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Students with All Fields True</h1>
            <ul>
                {students.map(student => (
                    <li key={student._id}>{student.studentId}</li>
                ))}
            </ul>
            <VolForm />
        </div>
    );
};

export default VolDisplay;
