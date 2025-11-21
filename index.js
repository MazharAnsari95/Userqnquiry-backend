const express = require('express');
const mongoose = require('mongoose');
let cors=require('cors');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');

const app = express();
app.use(cors())
app.use(express.json());

// Test Route
app.get("/api", (req, res) => {
    res.json({ message: "Hello world" });
});

// Enquiry Routes
app.use('/api/website/enquiry', enquiryRouter);

// MongoDB URL
const DBURL = "mongodb://127.0.0.1:27017/userenquirymernmaz";
const PORT = 8020;

mongoose.connect(DBURL)
    .then(() => {
        console.log("✅ Connected to MongoDB");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error(" MongoDB connection error:", err);
    });
