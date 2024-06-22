import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Document = () => {
    const { studentid } = useParams();


    const [formData, setFormData] = useState({
        essay: { verified: '', remarks: '' },
        panCard: { verified: '', remarks: '' },
        aadharCard: { verified: '', remarks: '' },
        markSheet: { verified: '', remarks: '' },
        familyIncome: { verified: '', remarks: '' },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const [fieldName, fieldProperty] = name.split('_');
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: {
                ...prevState[fieldName],
                [fieldProperty]: value
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/student/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            console.log('Response:', responseData);
            setFormData({
                essay: { verified: '', remarks: '' },
                panCard: { verified: '', remarks: '' },
                aadharCard: { verified: '', remarks: '' },
                markSheet: { verified: '', remarks: '' },
                familyIncome: { verified: '', remarks: '' },
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Student Registration Form</h1>
            <h1 className='text-center font-bold italic text-indigo-700'>{studentid.slice(1)}</h1>
            <form onSubmit={handleSubmit} className="space-y-6">

                <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-indigo-100">
                        <tr>
                            <th className="border px-6 py-4 text-left text-indigo-700">List of Documents</th>
                            <th className="border px-6 py-4 text-left text-indigo-700">Verified Document</th>
                            <th className="border px-6 py-4 text-left text-indigo-700">Remarks</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {Object.keys(formData).map((key) => (
                            <tr key={key} className="w-full border-b last:border-none">
                                <td className="border px-6 py-4">
                                    <h2 className="text-lg font-semibold text-gray-700">{key}</h2>
                                </td>
                                <td className="border px-6 py-4">
                                    <div>
                                        <div className="space-x-4">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`${key}_verified`}
                                                    value="yes"
                                                    checked={formData[key].verified === 'yes'}
                                                    onChange={handleChange}
                                                    className="form-radio h-5 w-5 text-indigo-600"
                                                />
                                                <span className="ml-2">Yes</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name={`${key}_verified`}
                                                    value="no"
                                                    checked={formData[key].verified === 'no'}
                                                    onChange={handleChange}
                                                    className="form-radio h-5 w-5 text-indigo-600"
                                                />
                                                <span className="ml-2">No</span>
                                            </label>
                                        </div>
                                    </div>
                                </td>
                                <td className="border px-6 py-4">
                                    <div>
                                        <textarea
                                            name={`${key}_remarks`}
                                            value={formData[key].remarks}
                                            onChange={handleChange}
                                            rows="2"
                                            placeholder="Enter remarks (if any)"
                                            className="form-textarea mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        ></textarea>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-8 rounded-md shadow-lg transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Document;
