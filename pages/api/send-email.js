import sendgrid from "@sendgrid/mail"

export default async function handler(req, res) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const { name, email, message, phoneNumber } = req.body
  const msg = {
    to: process.env.SENGRID_EMAIL,
    from: "hello@philipconran.com",
    templateId: "d-0f3ef97e4b7446738a7c74444ae3254a",
    dynamicTemplateData: {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      message: message
    },
  }
  try {
    await sendgrid.send(msg)
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Email did not send', error: error.message });
  }
}
