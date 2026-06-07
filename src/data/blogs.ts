export interface BlogPost {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'My Journey into Machine Learning',
    date: '2024-01-15',
    summary: 'Exploring the fundamentals of machine learning and building my first prediction model.',
    content: `Machine learning has always fascinated me. As a software engineering student, I wanted to explore beyond traditional programming and understand how machines can learn from data.

I started my journey with Python and Scikit-learn, building a student score prediction app. The process involved data preprocessing, feature engineering, and model training using algorithms like Random Forest and Gradient Boosting.

Key takeaways:
- Data preprocessing is crucial for model accuracy
- Understanding feature importance helps improve predictions
- Web integration with Streamlit makes deployment accessible

This project taught me that machine learning is not just about algorithms, but about understanding the problem domain and crafting meaningful features.`,
    tags: ['Machine Learning', 'Python', 'Learning'],
  },
  {
    id: 2,
    title: 'Building a Full-Stack Fitness Application',
    date: '2024-02-20',
    summary: 'Lessons learned from developing Smart Fit System with PHP and MySQL.',
    content: `Developing the Smart Fit System was a significant milestone in my web development journey. This role-based fitness management system features admin, trainer, and user dashboards.

The project taught me several important lessons:

1. Authentication & Authorization: Implementing secure login systems with role-based access control.

2. Database Design: Designing efficient MySQL schemas for workout plans, user progress, and scheduling.

3. User Experience: Creating intuitive interfaces for different user roles.

4. Real-time Features: Building notification systems to keep users engaged.

The biggest challenge was balancing functionality with simplicity. I learned that good software is not about adding every feature possible, but about solving problems elegantly.`,
    tags: ['Web Development', 'PHP', 'Full Stack'],
  },
  {
    id: 3,
    title: 'Why I Chose Software Engineering',
    date: '2024-03-10',
    summary: 'Reflecting on my path to becoming a software developer and what drives me.',
    content: `My journey into software engineering began with curiosity. I was fascinated by how applications work behind the scenes and how code can solve real-world problems.

What I love about software engineering:
- The ability to create something from nothing
- Continuous learning and problem-solving
- The collaborative nature of development
- Seeing ideas transform into working applications

As a junior developer, I'm constantly learning. From backend development with PHP and Java to frontend work with React, every project teaches me something new.

My goal is to build practical applications that make a difference while continuously improving my skills in modern software development and AI.`,
    tags: ['Career', 'Personal', 'Learning'],
  },
];
