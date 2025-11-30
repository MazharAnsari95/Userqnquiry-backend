const express = require('express');
const mongoose = require('mongoose');
let cors = require('cors');
const enquiryRouter = require('./App/routes/web/enquiryRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ message: "Hello world" });
});

app.use('/api/website/enquiry', enquiryRouter);

const DBURL = "mongodb+srv://mazharcollage95_db_user:uhNqHtBXE0471SW9@test.i89sp2z.mongodb.net/mazhar_database?retryWrites=true&w=majority&appName=test";

const PORT = 8020;

mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});
