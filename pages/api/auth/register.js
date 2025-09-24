// API endpoint for user registration
export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, password } = req.body;

    // Basic validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        status: false,
        message: 'All fields are required'
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

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        status: false,
        message: 'Phone must be 10 digits'
      });
    }

    // Password validation
    if (password.length < 6) {
      return res.status(400).json({
        status: false,
        message: 'Password must be at least 6 characters'
      });
    }

    // For demo purposes - in a real app, you would:
    // 1. Check if user already exists
    // 2. Hash the password
    // 3. Save to database
    
    // Mock user data (replace with actual database operation)
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      createdAt: new Date().toISOString()
    };

    // Simulate successful registration
    return res.status(201).json({
      status: true,
      message: 'Registration successful',
      user: newUser
    });

  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}


