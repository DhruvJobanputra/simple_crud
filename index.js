const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}))


// Routes
app.use('/api/products', require('./routes/product.route.js'));

app.get('/', (req, res) => {
    res.send('Hello from Dhruv!');
});

// MongoDB connection
mongoose.connect("mongodb+srv://jobanputradhruv11:Dhruv%403530@backenddb.q2eukca.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log('Connected to MongoDB successfully');
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
})
.catch(() => {
    console.log('Failed to connect to MongoDB');
});





