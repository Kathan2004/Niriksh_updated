export interface FAQ {
    question: string;
    answer: string;
    category: string;
  }
  
  export const faqData: FAQ[] = [
    {
      question: "What is brand impersonation and how can I protect against it?",
      answer: "Brand impersonation occurs when cybercriminals create fake websites, social media accounts, or emails that mimic your brand to deceive customers. We protect against this through continuous monitoring, AI-powered detection, and immediate takedown services.",
      category: "impersonation"
    },
    {
      question: "How quickly can you take down a fraudulent website?",
      answer: "Our average takedown time is under 4 hours from detection. We maintain relationships with hosting providers and registrars worldwide to expedite the takedown process and protect your brand reputation.",
      category: "takedown"
    },
    {
      question: "What types of impersonation do you monitor for?",
      answer: "We monitor for website cloning, social media impersonation, fake mobile apps, phishing domains, and fraudulent email campaigns targeting your brand and customers.",
      category: "monitoring"
    },
    {
      question: "How does your real-time monitoring system work?",
      answer: "Our AI-powered system continuously scans the internet for potential brand impersonation attempts, analyzing domain registrations, website content, and social media activity to detect threats early.",
      category: "monitoring"
    },
    {
      question: "What is the takedown process for fraudulent sites?",
      answer: "Once detected, we immediately document the violation, contact hosting providers and registrars, and pursue takedown through legal channels if necessary. We also work to block access to these sites while takedown is in progress.",
      category: "takedown"
    },
    {
      question: "How do you handle international impersonation cases?",
      answer: "We have a global network of partners and legal resources to handle takedowns across different jurisdictions, ensuring effective action regardless of where the threat originates.",
      category: "impersonation"
    },
    {
      question: "What security measures do you implement to prevent attacks?",
      answer: "We implement multiple layers of security including SSL certificates, DDoS protection, WAF, and continuous vulnerability scanning to prevent potential attacks.",
      category: "security"
    },
    {
      question: "How do you handle emergency situations?",
      answer: "We provide 24/7 emergency response with a guaranteed 15-minute initial response time for critical incidents, and our team works continuously until the threat is neutralized.",
      category: "security"
    }
  ];