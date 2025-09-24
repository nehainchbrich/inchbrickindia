// API endpoint for login authentication
export default function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
      return res.status(400).json({
        status: false,
        message: 'Username and password are required'
      });
    }

    // For demo purposes - replace with your actual authentication logic
    // This is just a mock implementation
    const mockUsers = [
      { username: 'admin@example.com', password: 'admin123' },
      { username: 'user@example.com', password: 'user123' },
      { username: '9876543210', password: 'mobile123' }
    ];

    const user = mockUsers.find(u => 
      u.username === username && u.password === password
    );

    if (user) {
      // In a real app, you would generate a JWT token here
      const token = 'mock-jwt-token-' + Date.now();
      
      return res.status(200).json({
        status: true,
        message: 'Login successful',
        token: token,
        user: {
          username: user.username,
          // Don't send password back
        }
      });
    } else {
      return res.status(401).json({
        status: false,
        message: 'Invalid username or password'
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({
      status: false,
      message: 'Internal server error'
    });
  }
}
