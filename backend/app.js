// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('./db');

const NgoVerification = require('./models/ngoVerification');

const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());

connectDb().catch(err => console.error(err));


app.post('/api/student/register', async (req, res) => {
    try {
        const formData = req.body;
        console.log(formData)

        const studentId = generateStudentId();


        const ngoVerificaion = new NgoVerification({
            ...formData,
            studentId
        });


        const savedStudent = await ngoVerificaion.save();


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
