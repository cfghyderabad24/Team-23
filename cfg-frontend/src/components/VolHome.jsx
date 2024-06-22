import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Student Applications</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map(student => (
                    <div key={student._id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-6 ">Student ID</h2>
                        <p className="text-gray-600 mb-4">{student.studentId}</p>
                        <Link to={`/student/:${student.studentId}`} className=" bg-indigo-700 px-2 py-1 text-white rounded-md hover:bg-indigo-600">Verify Form</Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default VolDisplay;
