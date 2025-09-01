'use server';

import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yeasararefin009@gmail.com', // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD // You'll need to create an App Password in your Gmail account
    }
});

export async function sendEmail(formData: FormData) {
    try {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;
        const subject = formData.get('subject') as string;

        // Email content
        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // always YOUR Gmail
            to: 'yeasararefin009@gmail.com', // where you receive it
            replyTo: email, // visitor’s email goes here
            subject: subject || `New Contact Form Message from ${name}`,
            text: message,
            html: `
    <h3>New Contact Form Message</h3>
    <p><strong>From:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Failed to send email. Please try again.' };
    }
}
