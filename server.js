require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");


// Create the Express app
const app = express();

// Set the port for our server
const port = 3001;

// Get the MongoDB connection string from the .env file
const uri = process.env.MONGO_URI;
console.log(uri)
console.log(!!process.env.MONGO_URI)
// MIDDLEWARE
const client = new MongoClient(uri);

// Keep track of whether the database connected
let databaseConnected = false;

// Connect to MongoDB
async function connectToDatabase() {
  try {
    await client.connect();

    databaseConnected = true;

    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("Failed to connect to MongoDB.");
    console.log(error);
  }
}

// Home route
app.get("/", (req, res) => {
  // Check if the database connection worked
  if (databaseConnected) {
    res.json({
      message: "Successfully connected to the database!",
    });
  } else {
    res.status(500).json({
      message: "Failed to connect to the database.",
    });
  }
});

// Connect to the database and then start the server
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});