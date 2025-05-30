import emailjs from '@emailjs/browser';

export const sendResetEmail = async (email, token) => {
  const resetLink = `http://localhost:5173/reset-password/${token}`;

  const templateParams = {
    to_email: email,
    reset_link: resetLink,
    reply_to: 'praveen@example.com', // Optional
  };

  try {
    const result = await emailjs.send(
      'service_ne8hpc7',             // Replace with your actual service ID
      'template_gu1wnhn',      // Replace with your actual template ID
      templateParams,
      'EWGUwv38dd5xlSpuB'            // Your public API key (user ID)
    );
    console.log('Email sent:', result.text);
  } catch (error) {
    console.error('EmailJS error:', error);
  }
};
