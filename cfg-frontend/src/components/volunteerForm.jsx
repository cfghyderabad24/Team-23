import React, { useState } from 'react';

const VolForm = () => {
    const documents = [
        'ALL DOCUMENTS ATTACHED IN PROPER SEQUENCE',
        'STUDENT’S ESSAY IS ATTACHED',
        'PASSBOOK / STATEMENT OF ACCOUNT OF STUDENT COVERING LAST ONE YEAR IS ATTACHED',
        'PASSBOOK / STATEMENT OF ACCOUNT OF PARENTS COVERING LAST ONE YEAR IS ATTACHED',
        'MARKSHEETS OF 10TH, 12TH AND COLLEGE ARE ATTACHED',
        'LAST YEAR FEE RECEIPT/S IS/ARE ATTACHED',
    ];

    const [formData, setFormData] = useState({
        verified: Array(documents.length).fill(''),
        remarks: Array(documents.length).fill(''),
        comments: '',
    });

    const handleVerifiedChange = (index, value) => {
        const newVerified = [...formData.verified];
        newVerified[index] = value;
        setFormData({ ...formData, verified: newVerified });
    };

    const handleRemarksChange = (index, value) => {
        const newRemarks = [...formData.remarks];
        newRemarks[index] = value;
        setFormData({ ...formData, remarks: newRemarks });
    };

    const handleCommentsChange = (e) => {
        setFormData({ ...formData, comments: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        // Submit form data to the server
    };

    return (
        <div className="flex justify-center items-center bg-gray-200 ">
            <form className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-4xl mt-10" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-6 text-center">Document Verification Form</h1>
                <div className="mb-4 overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">SR. NO</th>
                                <th className="border border-gray-300 px-4 py-2">LIST OF DOCUMENTS</th>
                                <th className="border border-gray-300 px-4 py-2">Verified from Original</th>
                                <th className="border border-gray-300 px-4 py-2">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((document, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2">{document}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <label className="mr-4">
                                            <input
                                                type="radio"
                                                name={`verified-${index}`}
                                                value="yes"
                                                checked={formData.verified[index] === 'yes'}
                                                onChange={(e) => handleVerifiedChange(index, e.target.value)}
                                                className="mr-2"
                                            />
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name={`verified-${index}`}
                                                value="no"
                                                checked={formData.verified[index] === 'no'}
                                                onChange={(e) => handleVerifiedChange(index, e.target.value)}
                                                className="mr-2"
                                            />
                                            No
                                        </label>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <textarea
                                            value={formData.remarks[index]}
                                            onChange={(e) => handleRemarksChange(index, e.target.value)}
                                            className="w-full p-2 border border-gray-300 rounded"
                                        />
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="4" className="border border-gray-300 px-4 py-2">
                                    <textarea
                                        value={formData.comments}
                                        onChange={handleCommentsChange}
                                        className="w-full p-2 border border-gray-300 rounded"
                                        placeholder="Comments"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 w-full">Submit</button>
            </form>
        </div>
    );
};

export default VolForm;
