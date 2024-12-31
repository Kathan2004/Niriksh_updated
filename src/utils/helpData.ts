import { Book, Shield, Bell, Trash2, FileText, Globe } from 'lucide-react';

export interface HelpArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
}

export const helpArticles: HelpArticle[] = [
  {
    id: '1',
    title: 'Getting Started with Asset Management',
    description: 'Learn how to add, monitor, and manage your digital assets effectively.',
    category: 'Assets',
    link: '#'
  },
  {
    id: '2',
    title: 'Understanding Alert Systems',
    description: 'A comprehensive guide to our alert system and how to configure notifications.',
    category: 'Alerts',
    link: '#'
  },
  {
    id: '3',
    title: 'Takedown Process Guide',
    description: 'Step-by-step guide for initiating and managing takedown requests.',
    category: 'Takedowns',
    link: '#'
  },
  {
    id: '4',
    title: 'Managing Global Settings',
    description: 'Customize global configurations for a seamless experience.',
    category: 'Settings',
    link: '#'
  },
  {
    id: '5',
    title: 'How to Generate Reports',
    description: 'Learn how to create, export, and share insightful reports.',
    category: 'Reports',
    link: '#'
  }
];

export const helpCategories = [
  { id: 'all', label: 'All Topics', icon: Book },
  { id: 'assets', label: 'Assets', icon: Shield },
  { id: 'alerts', label: 'Alerts', icon: Bell },
  { id: 'takedowns', label: 'Takedowns', icon: Trash2 },
  { id: 'settings', label: 'Settings', icon: Globe },
  { id: 'reports', label: 'Reports', icon: FileText }
];
