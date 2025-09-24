// API endpoint for forgot password functionality
export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({
        status: false,
        message: 'Email is required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: false,
        message: 'Invalid email address'
      });
    }

    // For demo purposes - in a real app, you would:
    // 1. Check if user exists in database
    // 2. Generate a secure reset token
    // 3. Store the token with expiration time
    // 4. Send email with reset link
    // 5. Log the request for security purposes

    // Mock user check (replace with actual database query)
    const mockUsers = [
      'admin@example.com',
      'user@example.com',
      'test@example.com'
    ];

    const userExists = mockUsers.includes(email);

    if (!userExists) {
      // For security, don't reveal if email exists or not
      return res.status(200).json({
        status: true,
        message: 'If the email exists in our system, a reset link has been sent.'
      });
    }

    // Simulate successful password reset request
    const resetToken = 'reset-token-' + Date.now();
    
    // In a real app, you would:
    // - Store this token in database with expiration
    // - Send email with reset link: https://yoursite.com/reset-password?token=resetToken
    
    console.log(`Password reset requested for: ${email}`);
    console.log(`Reset token: ${resetToken}`);
    console.log(`Reset link: https://yoursite.com/reset-password?token=${resetToken}`);

    return res.status(200).json({
      status: true,
      message: 'Password reset link has been sent to your email address.'
    });

  } catch (error) {
    console.error('Forgot password error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}


