const Message = require('../models/messages');

module.exports = {
  async createMessage(req, res) {
    try {
      console.log('Request Body:', req.body);
      // Validate the request body
      const { fullName, email, personTitle, message } = req.body;

      if (!fullName || !email || !personTitle || !message) {
        // If any required fields are missing, return a validation error
        return res.status(400).json({
          error: 'Validation error',
          message: 'All fields (fullName, email, personTitle, message) are required.',
        });
      }

      // Optionally, you can perform more specific validation here
      // For example, validate the email format, check if personTitle is one of the allowed values, etc.

      // Create a new message
      const newMessage = new Message({
        fullName,
        email,
        personTitle,
        message,
      });

      // Save the message to the database
      const savedMessage = await newMessage.save();

      res.status(201).json(savedMessage);
    } catch (err) {
      console.error('Error creating message:', err);
      res.status(500).json({
        error: 'Internal server error',
        message: 'An error occurred while creating the message.',
      });
    }
  },
};
