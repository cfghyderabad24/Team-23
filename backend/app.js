// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./db');

const NgoVerification = require('./models/ngoVerification');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
connectDb().catch(err => console.error(err));

// Handle form submission and save student details
app.post('/api/student/register', async (req, res) => {
    try {
        const formData = req.body;
        console.log(formData)
        // Generate a unique studentId (you can use any unique identifier logic here)
        const studentId = generateStudentId();

        // Create a new student instance
        const ngoVerificaion = new NgoVerification({
            ...formData,
            studentId
        });

        // Save student to MongoDB
        const savedStudent = await ngoVerificaion.save();

        // Optional: You can perform additional actions here, such as sending a confirmation email

        res.status(201).json(savedStudent);
    } catch (error) {
        console.error('Error saving student:', error);
        res.status(500).json({ error: 'Failed to save student' });
    }
});


app.get('/api/students/true-fields', async (req, res) => {
    try {
        const students = await NgoVerification.find(
            {
                'essay.verified': "yes",
                'panCard.verified': "yes",
                'aadharCard.verified': "yes",
                'markSheet.verified': "yes",
                'familyIncome.verified': "yes"
            },
            'studentId'
        ); // Only return studentId


        console.log(students)
        res.status(200).json(students);
    } catch (error) {
        console.error('Error fetching students:', error.message);
        res.status(500).json({ error: 'Failed to fetch students' });
    }
});

// Helper function to generate a unique studentId (example)
function generateStudentId() {
    return 'STU' + Math.random().toString(36).substr(2, 9); // Example: STUabc123456
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
