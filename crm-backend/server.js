const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./src/config/database');
const errorHandler = require('./src/middleware/errorHandler');

const authRoutes = require('./src/routes/authRoutes');
const customerRoutes = require('./src/routes/customerRoutes');
const leadRoutes = require('./src/routes/leadRoutes');
const taskRoutes = require('./src/routes/taskRoutes');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/tasks', taskRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'CRM API is running' });
});

// Sample Dashboard Analytics
app.get('/api/analytics/dashboard', (req, res) => {
  res.json({
    totalCustomers: 247,
    totalLeads: 89,
    totalTasks: 34,
    totalRevenue: 125000,
    recentActivities: [
      { id: 1, type: 'customer', message: 'New customer added: Acme Corp', time: '2 hours ago' },
      { id: 2, type: 'lead', message: 'Lead converted: Tech Solutions', time: '5 hours ago' },
      { id: 3, type: 'task', message: 'Task completed: Follow up call', time: '1 day ago' }
    ]
  });
});

// Error handling middleware
app.use(errorHandler);

// 404 Route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
