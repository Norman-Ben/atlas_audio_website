const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  const body = JSON.parse(req.body);

  const message = `
    <h1>Form Submission</h1>
    <br />
    Name: ${body.fullName}\r\n
    Email: ${body.email}\r\n
    Project Name: ${body.projectName}\r\n
    Project Length: ${body.projectLength}\r\n
    Project Type: ${body.projectGenre}\r\n
    Project Deadline: ${body.devTime}\r\n
    Project Length: ${body.projectLength}\r\n
    Additional Comments: ${body.additionalComments}
  `;

  await mail.send({
    to: 'Contact@Atlas-Audio.co.uk',
    from: 'Contact@Atlas-Audio.co.uk',
    subject: `Website form submission from ${body.email}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
}

export default sendEmail;
