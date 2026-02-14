
import React from 'react';
import { 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  Layout, 
  Share2, 
  UserCheck, 
  Zap, 
  Globe, 
  MessageSquare 
} from 'lucide-react';
import { Service, Testimonial, BlogPost, PortfolioItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'cyber-security',
    title: 'Cyber Security Consulting',
    description: 'Protecting your digital footprint and business infrastructure from evolving threats.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    features: [
      'Account security setup',
      'Two-factor authentication guidance',
      'Risk assessment for social accounts',
      'Basic cyber awareness training'
    ]
  },
  {
    id: 'virtual-cards',
    title: 'Virtual Card & Payment Solutions',
    description: 'Seamlessly manage international transactions and online spending.',
    icon: <CreditCard className="w-8 h-8 text-cyan-400" />,
    features: [
      'Virtual card setup guidance',
      'Payment gateway support',
      'Deposit troubleshooting',
      'Blockchain transaction guidance'
    ]
  },
  {
    id: 'ads-management',
    title: 'Facebook & Google Ads Management',
    description: 'Data-driven advertising strategies tailored for the Qatar and global markets.',
    icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
    features: [
      'Campaign setup',
      'Target audience optimization',
      'Qatar market targeting',
      'Conversion-focused ad strategy'
    ]
  },
  {
    id: 'digital-product',
    title: 'Digital Product & Business Consulting',
    description: 'Strategic planning to launch and monetize digital products successfully.',
    icon: <Layout className="w-8 h-8 text-indigo-400" />,
    features: [
      'E-commerce guidance',
      'Product launch strategy',
      'Landing page setup',
      'Monetization strategy'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Growth',
    description: 'Build authority and engagement across major social platforms.',
    icon: <Share2 className="w-8 h-8 text-blue-400" />,
    features: [
      'Profile optimization',
      'Engagement strategy',
      'Branding consultation'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ahmed Al-Thani',
    role: 'E-commerce Business Owner, Doha',
    content: 'MD Sadek Ali helped us secure our Facebook Business Manager after a security breach. His knowledge of local payment issues is unmatched.',
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 't2',
    name: 'Sarah Johnson',
    role: 'Digital Marketer',
    content: 'The virtual card solutions provided saved our agency hours of frustration with international ad payments. Professional and fast!',
    avatar: 'https://picsum.photos/id/65/100/100'
  },
  {
    id: 't3',
    name: 'Mohammed Rashid',
    role: 'Tech Entrepreneur',
    content: 'Clear, concise, and highly technical. If you need cyber security guidance in Qatar, Sadek is the expert you need.',
    avatar: 'https://picsum.photos/id/91/100/100'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'How to Secure Your Facebook Account',
    excerpt: 'Critical steps to prevent hacking and unauthorized access to your personal and business profiles.',
    date: 'Oct 12, 2023',
    image: 'https://picsum.photos/id/180/600/400'
  },
  {
    id: 'b2',
    title: 'Best Virtual Card Solutions for Qatar',
    excerpt: 'Comparing the top virtual cards available for residents and businesses in Qatar.',
    date: 'Nov 05, 2023',
    image: 'https://picsum.photos/id/160/600/400'
  },
  {
    id: 'b3',
    title: 'How to Run Facebook Ads Successfully',
    excerpt: 'A beginners guide to targeting the Qatar market effectively with Meta ads.',
    date: 'Dec 15, 2023',
    image: 'https://picsum.photos/id/1/600/400'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Digital Marketing Campaign',
    category: 'Ad Management',
    image: 'https://picsum.photos/id/2/400/300'
  },
  {
    id: 'p2',
    title: 'Payment Troubleshooting',
    category: 'Finance Solutions',
    image: 'https://picsum.photos/id/3/400/300'
  },
  {
    id: 'p3',
    title: 'Account Recovery Success',
    category: 'Cyber Security',
    image: 'https://picsum.photos/id/4/400/300'
  },
  {
    id: 'p4',
    title: 'Secure Online Store Setup',
    category: 'E-commerce',
    image: 'https://picsum.photos/id/5/400/300'
  }
];

export const CONTACT_INFO = {
  name: 'MD Sadek Ali',
  email: 'askorsadek@yahoo.com',
  phone: '+97470592528',
  whatsapp: '97470592528',
  facebook: 'https://www.facebook.com/MdSadekAli2756',
  instagram: 'https://instagram.com/saaskor',
  location: 'Qatar & International'
};
