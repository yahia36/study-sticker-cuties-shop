
// Importing required modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/')));

// Connect to MongoDB for product data, orders
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/stickystudies', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Connect to MySQL for user data, authentication
const mysqlConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'stickystudies'
});

mysqlConnection.connect(error => {
  if (error) {
    console.error('MySQL connection error:', error);
  } else {
    console.log('Connected to MySQL database');
  }
});

// MongoDB schemas
const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  isBestseller: { type: Boolean, default: false },
  description: { type: String },
  stock: { type: Number, default: 100 },
  createdAt: { type: Date, default: Date.now }
});

const OrderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  userId: { type: Number },
  items: [{ 
    productId: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  shippingAddress: {
    name: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true }
  },
  createdAt: { type: Date, default: Date.now }
});

const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});

const ContactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create models
const Product = mongoose.model('Product', ProductSchema);
const Order = mongoose.model('Order', OrderSchema);
const Newsletter = mongoose.model('Newsletter', NewsletterSchema);
const ContactMessage = mongoose.model('ContactMessage', ContactMessageSchema);

// API Routes

// Products API
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Newsletter API
app.post('/api/newsletter/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    
    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();
    
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate email error
      return res.status(400).json({ message: 'You are already subscribed!' });
    }
    res.status(500).json({ message: err.message });
  }
});

// Contact API
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    const newMessage = new ContactMessage({
      name,
      email,
      subject,
      message
    });
    
    await newMessage.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// User API (using MySQL)
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  // Hash password in a real application
  const hashedPassword = password; // Replace with actual hashing
  
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  mysqlConnection.query(query, [name, email, hashedPassword], (err, results) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).json({ message: 'Email already registered' });
      }
      return res.status(500).json({ message: err.message });
    }
    
    res.status(201).json({ message: 'User registered successfully' });
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }
  
  const query = 'SELECT * FROM users WHERE email = ?';
  mysqlConnection.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    const user = results[0];
    
    // Compare password in a real application
    const isMatch = password === user.password; // Replace with actual comparison
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Generate JWT token in a real application
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      token: 'dummy-token' // Replace with actual JWT token
    });
  });
});

// Order API
app.post('/api/orders', async (req, res) => {
  try {
    const { userId, items, totalAmount, shippingAddress } = req.body;
    
    if (!items || !totalAmount || !shippingAddress) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    const orderNumber = 'ORD' + Date.now().toString().slice(-10);
    
    const newOrder = new Order({
      orderNumber,
      userId,
      items,
      totalAmount,
      shippingAddress
    });
    
    await newOrder.save();
    
    res.status(201).json({
      message: 'Order placed successfully',
      orderNumber
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Catch-all route to serve frontend
app.get('*', (req, res) => {
  if (req.path.endsWith('.html')) {
    res.sendFile(path.join(__dirname, req.path));
  } else if (req.path.includes('.')) {
    res.sendFile(path.join(__dirname, req.path));
  } else {
    res.sendFile(path.join(__dirname, 'index.html'));
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
