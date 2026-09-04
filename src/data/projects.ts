export interface Project {
  id: number;
  title: string;
  category: 'web' | 'ml' | 'fullstack';
  techStack: string[];
  description: string;
  problem?: string;
  impact?: string;
  features: string[];
  github?: string;
  liveDemo?: string;
  driveLink?: string;
  image: string;
}

export const projects: Project[] = [
  {
  id: 1,
  title: 'Smart Fit System',
  category: 'fullstack',
  techStack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],

  problem: 'Fitness centers struggle to manage members, trainers, and workout schedules manually.',

  description: 'Role-based fitness management system with admin, trainer, and user dashboards.',

  impact: 'Automates gym management by providing centralized dashboards for users, trainers, and admins.',

  features: [
    'Role-based authentication (Admin, Trainer, User)',
    'Workout scheduling and management system',
    'Progress tracking for users',
    'Admin dashboard for system control'
  ],

  github: 'https://github.com/abilasha24/smart_fit.git',
  liveDemo: 'http://smartfitweb.rf.gd',
  image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg'
},

  {
  id: 2,
  title: 'Student Score Prediction App',
  category: 'ml',
  techStack: ['Python', 'Machine Learning', 'Scikit-learn'],

  problem: 'Students and educators lack tools to estimate academic performance early.',

  description: 'Machine learning app to predict student exam performance using trained models.',

  impact: 'Helps predict student performance based on historical data using ML models.',

  features: [
    'Data preprocessing and cleaning',
    'Trained ML models (Random Forest, Gradient Boosting)',
    'Prediction system based on input data',
    'Web interface using Streamlit'
  ],

  liveDemo: 'https://student-score-prediction1-app-an5yveweb5jgse5c7c7kcg.streamlit.app/',
  image: 'https://images.pexels.com/photos/5905494/pexels-photo-5905494.jpeg'
} 
];

export const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'ml', label: 'Machine Learning' },
  { key: 'fullstack', label: 'Full Stack' },
];
