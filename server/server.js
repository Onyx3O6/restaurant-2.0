const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const app = express()
const port = 3000

// Connect to MongoDB using mongoose
mongoose.connect(
  "mongodb+srv://Onyx3O6:DerRiese33@restau.rwyoard.mongodb.net/test"
)

// Create a schema for the form data
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  reason: String,
  message: String,
})

// Create a model based on the schema
const Contact = mongoose.model("Contact", contactSchema)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Serve static files (e.g., HTML, CSS)
app.use(express.static("public"))

// Handle form submission
app.post("/api/donnees", async (req, res) => {
  // Extract data from the request body
  const { firstName, lastName, email, reason, message } = req.body

  try {
    // Create a new contact document
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      reason,
      message,
    })

    // Save the document to MongoDB
    await newContact.save()

    // Respond with a success message
    res.json({ message: "Data successfully saved to MongoDB" })
  } catch (error) {
    // Handle any errors
    console.error("Error:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
