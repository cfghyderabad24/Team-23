import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const NGOForm = () => {
    const [formData, setFormData] = useState({
        essay: { verified: '', remarks: '' },
        panCard: { verified: '', remarks: '' },
        aadharCard: { verified: '', remarks: '' },
        markSheet: { verified: '', remarks: '' },
        familyIncome: { verified: '', remarks: '' },
        parentAccount: { verified: '', remarks: '' },
        studentAccount: { verified: '', remarks: '' },
        feeReceipt: { verified: '', remarks: '' },
        feeStructure: { verified: '', remarks: '' },
        casteCertificate: { verified: '', remarks: '' },
        lastYearFee: { verified: '', remarks: '' },
        capRound: { verified: '', remarks: '' },
        studentLoan: { verified: '', remarks: '' }
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
            // Optionally, you can reset the form fields after successful submission
            setFormData({
                essay: { verified: '', remarks: '' },
                panCard: { verified: '', remarks: '' },
                aadharCard: { verified: '', remarks: '' },
                markSheet: { verified: '', remarks: '' },
                familyIncome: { verified: '', remarks: '' },
                parentAccount: { verified: '', remarks: '' },
                studentAccount: { verified: '', remarks: '' },
                feeReceipt: { verified: '', remarks: '' },
                feeStructure: { verified: '', remarks: '' },
                casteCertificate: { verified: '', remarks: '' },
                lastYearFee: { verified: '', remarks: '' },
                capRound: { verified: '', remarks: '' },
                studentLoan: { verified: '', remarks: '' }
            });
            Navigate("/")
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="container mx-auto p-4 bg-gray-400">
            <h1 className="text-2xl font-bold mb-4 text-center text-indigo-700">Student Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-xl">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Category</th>
                            <th className="border border-gray-300 p-2">Verified</th>
                            <th className="border border-gray-300 p-2">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(formData).map((key) => (
                            <tr key={key}>
                                <td className="border border-gray-300 p-2">
                                    <h2 className="text-lg font-semibold">{key}</h2>
                                </td>
                                <td className="border border-gray-300 p-2">
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
                                <td className="border border-gray-300 p-2">
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
                <div className="text-center mt-4">
                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NGOForm;
