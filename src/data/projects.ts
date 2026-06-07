export interface Project {
  id: number;
  title: string;
  category: 'web' | 'ml' | 'fullstack';
  techStack: string[];
  description: string;
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
    description: 'Role-based fitness management system with admin, trainer, and user dashboards.',
    features: [
      'Workout scheduling',
      'Progress tracking',
      'Authentication system',
      'Notifications',
    ],
    github: 'https://github.com/abilasha24/smart_fit.git',
    driveLink: 'https://drive.google.com/file/d/1-IGlcJW7xDVNzeKqzJX4jX4j3zfOy7C3lyd/view',
    image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Student Score Prediction App',
    category: 'ml',
    techStack: ['Python', 'Machine Learning', 'Scikit-learn'],
    description: 'Machine learning app to predict student exam performance using trained models.',
    features: [
      'Data preprocessing',
      'Model training (Random Forest, Gradient Boosting)',
      'Web interface integration',
    ],
    liveDemo: 'https://student-score-prediction1-app-an5yveweb5jgse5c7c7kcg.streamlit.app/',
    image: 'https://images.pexels.com/photos/5905494/pexels-photo-5905494.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Development' },
  { key: 'ml', label: 'Machine Learning' },
  { key: 'fullstack', label: 'Full Stack' },
];
