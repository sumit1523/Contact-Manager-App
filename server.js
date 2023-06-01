const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); // Parsing Data

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler); // Error handling middleware

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
