
// Fix: Added React import to resolve "Cannot find namespace 'React'" error in a .ts file
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}