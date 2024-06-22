const express = require("express");
const router = express.Router();
const Document = require("../models/Document"); // Import the Document schema

// POST endpoint to save form data
router.post("/documents", async (req, res) => {
  try {
    const { formData } = req.body;
    const newDocument = new Document({ formData });
    await newDocument.save();
    res.status(201).json(newDocument);
  } catch (error) {
    console.error("Error saving document:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET endpoint to retrieve form data (example)
router.get("/documents/:id", async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ error: "Document not found" });
    }
    res.json(document);
  } catch (error) {
    console.error("Error fetching document:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
