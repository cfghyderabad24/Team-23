import express from 'express';
import mongoose from 'mongoose';
import ngoRoutes from './routes/ngo.route.js';
import authRoutes from './routes/auth.route.js'
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true  
}));

app.use(express.json());

mongoose.connect('mongodb+srv://namasricharan:EgGLHeEDBbIAfRWV@cluster0.8l7gvbr.mongodb.net/cfg', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});


app.use('/api', ngoRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
