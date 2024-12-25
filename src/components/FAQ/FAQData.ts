export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQ[] = [
  {
    question: "What is brand impersonation and how can I protect against it?",
    answer: "Brand impersonation involves creating fake websites, social media profiles, or emails to deceive your customers. We safeguard against this by offering real-time monitoring, AI-driven threat detection, and immediate takedown services.",
    category: "impersonation",
  },
  {
    question: "How quickly can you take down a fraudulent website?",
    answer: "Our average takedown time is under 4 hours. Leveraging strong relationships with hosting providers and registrars worldwide, we expedite takedowns to protect your brand swiftly.",
    category: "takedown",
  },
  {
    question: "What types of impersonation do you monitor for?",
    answer: "We monitor for website cloning, fake social media accounts, phishing domains, fraudulent email campaigns, and malicious mobile apps that target your brand.",
    category: "monitoring",
  },
  {
    question: "How does your real-time monitoring system work?",
    answer: "Using advanced AI, our system continuously scans the web, analyzing domain registrations, website content, and social media activity to detect impersonation attempts before they escalate.",
    category: "monitoring",
  },
  {
    question: "What is the takedown process for fraudulent sites?",
    answer: "Upon detection, we document the violation, contact hosting providers and registrars, and pursue legal action if necessary. While takedowns are processed, access to fraudulent sites is restricted.",
    category: "takedown",
  },
  {
    question: "How do you handle international impersonation cases?",
    answer: "Our global network of partners and legal resources ensures effective takedown actions across jurisdictions, protecting your brand regardless of geographic boundaries.",
    category: "impersonation",
  },
  {
    question: "What security measures do you implement to prevent attacks?",
    answer: "We provide multi-layered security, including SSL certificates, DDoS protection, Web Application Firewalls (WAF), and continuous vulnerability assessments to safeguard against potential attacks.",
    category: "security",
  },
  {
    question: "How do you handle emergency situations?",
    answer: "We offer 24/7 emergency response with a guaranteed 15-minute initial response time. Our team works tirelessly to neutralize critical threats and restore security.",
    category: "security",
  },
];
