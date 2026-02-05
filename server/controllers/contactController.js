const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Create contact message
// exports.createContact = async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     // Save to database
//     const contact = new Contact({ name, email, message });
//     await contact.save();

//     // Send email notification (optional)
//     if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.EMAIL_USER,
//           pass: process.env.EMAIL_PASS
//         }
//       });

//       const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: process.env.EMAIL_USER,
//         subject: `Portfolio Contact: ${name}`,
//         text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
//       };

//       await transporter.sendMail(mailOptions);
//     }

//     res.status(201).json({ 
//       message: 'Message sent successfully',
//       contact: { name, email }
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get all contacts (for admin)
// exports.getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });
//     res.json(contacts);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
exports.createContact = async (req, res) => {
  try {
    console.log('REQ BODY:', req.body); // 🔴 keep for debugging

    const { name, email, message } = req.body;

    if (
      !name || !email || !message ||
      !name.trim() || !email.trim() || !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid input'
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim()
    });

    return res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: contact
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};


// Mark as read
exports.markAsRead = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
