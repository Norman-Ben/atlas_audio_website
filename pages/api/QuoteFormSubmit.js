const email = require('@sendgrid/mail');

export default function sendEmail(req, res) {
  res.status(200).json({ name: process.env.SENDGRID_API_KEY });
}
