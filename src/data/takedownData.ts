export const timelineEvents = [
    {
      date: '2024-03-20 14:30',
      title: 'Takedown Request Initiated',
      description: 'Takedown request raised for phishing domain example-phish.com',
      user: 'Karad'
    },
    {
      date: '2024-03-20 15:45',
      title: 'Initial Assessment',
      description: 'Domain verified as malicious. Evidence collected.',
      user: 'Admin'
    },
    {
      date: '2024-03-21 09:15',
      title: 'Notice Sent',
      description: 'Takedown notice sent to hosting provider.',
      user: 'Sahil'
    }
  ];
  
  export const comments = [
    {
      id: 1,
      user: 'Karad',
      date: '2024-03-20 14:35',
      content: 'Domain appears to be using our brand assets. High priority takedown required.'
    },
    {
      id: 2,
      user: 'Admin',
      date: '2024-03-20 15:50',
      content: 'Evidence collected and documented. Proceeding with takedown notice.'
    }
  ];
  
  export const matchingAlerts = [
    {
      id: 1,
      type: 'Phishing',
      severity: 'High',
      date: '2024-03-20 14:25',
      description: 'Suspicious domain mimicking brand detected'
    },
    {
      id: 2,
      type: 'Brand Abuse',
      severity: 'Medium',
      date: '2024-03-20 14:28',
      description: 'Unauthorized use of logo detected'
    }
  ];