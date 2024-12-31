export const alertData = {
  id: 'ALERT-001',
  domain: 'suspicious-login.com',
  timestamp: '2024-03-21 14:30:00',
  risk: {
    level: 'High',
    score: 85,
    type: 'Phishing Attack',
    indicators: [
      'Domain age less than 24 hours',
      'Similar to legitimate domain',
      'Uses stolen branding assets',
      'Malicious redirect patterns'
    ]
  },
  whois: {
    registrar: 'Example Registrar LLC',
    createdDate: '2024-03-21',
    expiryDate: '2025-03-21',
    registrant: {
      organization: 'Privacy Protection Service',
      country: 'Panama'
    }
  },
  similarity: {
    score: '92%',
    matchingElements: [
      'Logo placement',
      'Color scheme',
      'Layout structure',
      'Form fields'
    ]
  },
  screenshot: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
  htmlCode: `
<!DOCTYPE html>
<html>
<head>
  <title>Secure Login</title>
</head>
<body>
  <div class="login-form">
    <h1>Login to Your Account</h1>
    <form action="malicious.php" method="post">
      <input type="text" name="username" placeholder="Email">
      <input type="password" name="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
</body>
</html>
  `
};