import express from 'express';
import dotenv from 'dotenv';

import usersRoutes from './api/routes/usersRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', usersRoutes);

app.listen(port, () => console.log(`Server started on port ${port}!`));
