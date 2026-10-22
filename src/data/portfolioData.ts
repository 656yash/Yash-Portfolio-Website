export interface Project {
  id: string;
  title: string;
  category: 'AI & ML' | 'Data Science & Analytics' | 'Full Stack' | 'IoT & Systems';
  subtitle: string;
  problem: string;
  solution: string;
  technologies: string[];
  results?: string;
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  paperType: 'kraft' | 'yellow' | 'white' | 'cream';
  rotation: string;
  featured?: boolean;
  teamOrContext?: string;
  inProgress?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  awardType: 'Winner' | 'Competitor' | 'Participant';
  badgeLabel: string;
  description: string;
  team?: string;
  projectAssociated?: string;
  rotation: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  year: string;
  statusBadge: string;
  overview: string;
  keyWorkflows: string[];
  technologies: string[];
  exploreUrl?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Yash Deshpande',
    roleTagline: 'AI/ML · DATA SCIENCE · SOFTWARE DEVELOPMENT',
    headline: 'Turning data into ideas, and ideas into things that work.',
    subHeadline: 'Believing in the process, not just results.',
    college: 'MIT Academy of Engineering (MITAOE), Pune',
    degree: 'B.Tech in Information Technology',
    location: 'Alandi, Pune, Maharashtra',
    phone: '+91 9022763347',
    resumePdf: '/Yash_Deshpande_Resume.pdf',
    avatar: 'https://avatars.githubusercontent.com/u/192508922?v=4',
    email: 'yash656deshpande@gmail.com',
    socials: {
      github: 'https://github.com/656yash',
      linkedin: 'https://www.linkedin.com/in/yash-deshpande-788a3b326/',
      instagram: 'https://instagram.com/yashd.me',
      x: 'https://x.com/yashd_fx',
    },
    bioNote: 'Motivated BTech IT student from MIT Academy of Engineering (MITAOE), Pune, with strong interest in Data Science, Python development, and intelligent systems. Skilled in Python, SQL, DBMS, and Data Analytics fundamentals, with proven ability to build practical software tools and compete in hackathons.',
  },

  projects: [
    {
      id: 'kpi-analytics-dashboard',
      title: 'KPI Analytics Dashboard — AdWise',
      category: 'Data Science & Analytics',
      subtitle: 'Live E-Commerce & Marketing Metric Intelligence',
      problem: 'Siloed marketing metrics and disconnected conversion funnels prevent leadership from spotting campaign bottlenecks.',
      solution: 'Built a responsive analytics dashboard with Team BitBeast, aggregating live campaign performance, conversion rates, and financial metrics with dynamic charts.',
      technologies: ['JavaScript', 'React', 'Chart.js', 'Tailwind CSS', 'Vercel'],
      results: 'Deployed live on Vercel; adopted as team project for CodeVerse Hackathon Finalist.',
      githubUrl: 'https://github.com/656yash/adwise-analytics-dashboard',
      liveUrl: 'https://adwise-analytics-dashboard.vercel.app',
      demoUrl: 'https://adwise-ecommerce-app.vercel.app',
      demoLabel: 'Launch Demo Website',
      paperType: 'cream',
      rotation: 'rotate-2',
      featured: true,
      teamOrContext: 'Team BitBeast · CodeVerse VIT Pune Finalist',
    },
    {
      id: 'fincoach-expense-tracker',
      title: 'Fincoach — Student Expense Tracker',
      category: 'Full Stack',
      subtitle: 'Personal Finance Management & Budget Optimization',
      problem: 'College students lack streamlined tools to monitor granular expenses, leading to end-of-month budget shortfalls.',
      solution: 'Developed an interactive web app with spending breakdown categories, visual cash-flow charts, and intelligent savings recommendations.',
      technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Chart.js', 'Vercel'],
      results: 'Live on Vercel with responsive mobile-first expense logging and analytics.',
      githubUrl: 'https://github.com/656yash/Fincoach',
      liveUrl: 'https://fincoach-4fih.vercel.app/',
      paperType: 'white',
      rotation: '-rotate-2',
      featured: true,
    },
    {
      id: 'movie-recommendation',
      title: 'Movie Recommendation Engine',
      category: 'AI & ML',
      subtitle: 'Content-Based Similarity Recommendation Engine',
      problem: 'Cinema enthusiasts face choice overload across extensive film catalogues without relevant metadata matching.',
      solution: 'Built an algorithmic movie recommendation engine integrating Flask, Python similarity matrices, and live OMDb API metadata streaming.',
      technologies: ['Python', 'Flask', 'TypeScript', 'OMDb API', 'Scikit-Learn', 'Vercel'],
      results: 'Deployed live on Vercel with instant keyword search and metadata-ranked suggestions.',
      githubUrl: 'https://github.com/656yash/Movie_Recommendation',
      liveUrl: 'https://movie-recommendation-ten-lyart.vercel.app/',
      paperType: 'yellow',
      rotation: 'rotate-1',
      featured: true,
    },
    {
      id: 'connaught-place',
      title: 'Connaught Place',
      category: 'Full Stack',
      subtitle: 'Commercial Space Discovery & Architectural Directory',
      problem: 'Visitors and shoppers need an interactive, accessible digital directory to explore retail, dining, and heritage spaces in Connaught Place.',
      solution: 'Engineered a clean responsive web platform featuring structured location guides, venue categorization, and intuitive navigation.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Git', 'Vercel'],
      results: 'Production deployment showcasing responsive layout and interactive discovery.',
      githubUrl: 'https://github.com/656yash/Connaught-Place',
      paperType: 'yellow',
      rotation: '-rotate-1',
    },
    {
      id: 'diabetes-prediction',
      title: 'Diabetes Diagnostic Risk Prediction',
      category: 'AI & ML',
      subtitle: 'Supervised Clinical Classification Model',
      problem: 'Early clinical risk screening requires evaluating multidimensional biochemical indicators without diagnostic delays.',
      solution: 'Implemented and benchmarked supervised machine learning models (Logistic Regression, Random Forest) on clinical patient health metrics with cross-validation.',
      technologies: ['Python', 'Jupyter Notebook', 'Scikit-Learn', 'Pandas', 'Seaborn'],
      results: 'Achieved robust classification accuracy with balanced precision and recall on clinical test splits.',
      githubUrl: 'https://github.com/656yash/Diabetes-Prediction',
      paperType: 'cream',
      rotation: 'rotate-1',
    },
    {
      id: 'customer-segmentation',
      title: 'Customer Segmentation via K-Means Clustering',
      category: 'Data Science & Analytics',
      subtitle: 'Unsupervised Behavioral Cohort Analysis',
      problem: 'Retailers struggle to target diverse customer cohorts with relevant marketing campaigns without clustering.',
      solution: 'Built an unsupervised K-Means clustering pipeline utilizing Elbow Method inertia analysis and Silhouette scoring to discover distinct consumer personas.',
      technologies: ['Python', 'Jupyter Notebook', 'K-Means', 'Scikit-Learn', 'Matplotlib'],
      results: 'Segmented customer cohorts into distinct spending vs income clusters for targeted engagement.',
      githubUrl: 'https://github.com/656yash/Customer_Segmentation',
      paperType: 'kraft',
      rotation: '-rotate-2',
    },
    {
      id: 'numi-digit-recognition',
      title: 'Numi — Interactive Digit Recognition',
      category: 'AI & ML',
      subtitle: 'Computer Vision & Browser Canvas Inference',
      problem: 'Demonstrating machine learning classification interactively to non-technical users in a web environment.',
      solution: 'Crafted a web interface allowing users to sketch digits on an HTML5 canvas and receive real-time neural network model predictions.',
      technologies: ['Python', 'JavaScript', 'HTML5 Canvas', 'GitHub Pages'],
      results: 'Hosted live on GitHub Pages with instant stroke capture and digit classification.',
      githubUrl: 'https://github.com/656yash/Numi-Digit-Recognization',
      liveUrl: 'https://656yash.github.io/Numi-Digit-Recognization/',
      paperType: 'kraft',
      rotation: 'rotate-2',
    },
    {
      id: 'codemongus',
      title: 'CodeMongUs | Real-Time Multiplayer Coding Game',
      category: 'Full Stack',
      subtitle: 'Winner — Offgrid 1.0 Hackathon, DYPIU',
      problem: 'Peer coding practice often lacks real-time multiplayer engagement and synchronized debugging drills.',
      solution: 'Developed a collaborative coding game where players debug DSA problems while an impostor secretly sabotages the code. Built using React.js, Node.js, and Socket.IO with Antigravity IDE, GitHub, and Vercel.',
      technologies: ['React.js', 'Node.js', 'Socket.IO', 'JavaScript', 'Antigravity IDE', 'Vercel'],
      results: 'Winner — Offgrid 1.0 Hackathon at DYPIU.',
      githubUrl: 'https://github.com/656yash',
      paperType: 'white',
      rotation: '-rotate-2',
      featured: true,
      teamOrContext: 'Winner — Offgrid 1.0 Hackathon (DYPIU)',
    },
  ] as Project[],

  experience: {
    role: 'Data Science Intern',
    organization: 'Reliance Industries Limited — GMS Digital',
    year: 'Scheduled July 2026',
    statusBadge: 'Upcoming Industrial Experience',
    exploreUrl: 'https://drive.google.com/drive/folders/1_tjS0fuToJl0Og2Bb3zhYprCEZs6eCyE?usp=drive_link',
    overview: 'Selected for Data Science Internship at Reliance Industries Limited (GMS Digital). Focusing on ROGC Anomaly Detection by analyzing industrial flow-sensor data to identify anomalies associated with impulse-line choking.',
    keyWorkflows: [
      'Analysed industrial flow-sensor data to identify anomalies associated with impulse-line choking.',
      'Performed data preprocessing, cleaning, exploratory data analysis (EDA), and sensor correlation analysis.',
      'Applied PCA and explored Decision Tree, SVM, Random Forest, and Dense Autoencoder approaches for anomaly detection.',
      'Evaluated models using confusion matrices, precision, recall, F1-score, ROC-AUC, and feature importance.',
    ],
    technologies: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-Learn', 'PCA', 'Dense Autoencoder', 'EDA'],
  } as ExperienceItem,

  achievements: [
    {
      id: 'offgrid-winner',
      title: 'Winner (1st Place) — Offgrid 1.0 Hackathon',
      organization: 'DY Patil University (CodeDecode)',
      awardType: 'Winner',
      badgeLabel: '1ST PLACE CHAMPION',
      description: 'Secured first place in the 24-hour hackathon with CodeMongUs, designing and shipping a collaborative real-time multiplayer coding & debugging platform.',
      rotation: '-rotate-2',
      highlight: true,
    },
    {
      id: 'codeverse',
      title: 'CodeVerse Hackathon',
      organization: 'VIT Pune',
      awardType: 'Competitor',
      badgeLabel: 'FINALIST',
      team: 'Team BitBeast',
      projectAssociated: 'KPI Analytics Dashboard — AdWise',
      description: 'Built a high-performance business analytics dashboard with Team BitBeast, integrating live metrics and conversion tracking, selected as a Hackathon Finalist.',
      rotation: 'rotate-1',
    },
    {
      id: 'techfest',
      title: 'TechFest',
      organization: 'IIT Bombay',
      awardType: 'Competitor',
      badgeLabel: 'TOP 50',
      description: 'Engineered an offline AI study application tailored for areas with poor connectivity, empowering needed students with decentralized AI learning resources. Selected in the Top 50 among 3000+ competing participants at Asia\'s largest science and technology festival.',
      rotation: '-rotate-1',
    },
  ] as Achievement[],

  skills: {
    programming: [
      { name: 'Python', level: 'Core', desc: 'Basics, OOPs, DSA, NumPy, Pandas & Scikit-Learn' },
      { name: 'C++', level: 'Core', desc: 'Basics & Object-Oriented Programming (OOPs)' },
      { name: 'SQL', level: 'Core', desc: 'Complex joins, aggregations, queries & schema design' },
    ],
    dataScience: [
      { name: 'Data Cleaning & Preprocessing', level: 'Core', desc: 'Missing value imputation, normalization' },
      { name: 'Exploratory Data Analysis (EDA)', level: 'Core', desc: 'Statistical distributions, correlation' },
      { name: 'Statistical Analysis', level: 'Core', desc: 'Hypothesis testing, variance analysis' },
      { name: 'Feature Engineering', level: 'Core', desc: 'Encoding, transformation, selection' },
      { name: 'Data Visualization', level: 'Core', desc: 'Matplotlib, Seaborn, Chart.js' },
      { name: 'Power BI', level: 'Learning', desc: 'Interactive dashboards & reports' },
    ],
    machineLearning: [
      { name: 'Classification Algorithms', level: 'Core', desc: 'Logistic Regression, Random Forest, SVM' },
      { name: 'Clustering & Segmentation', level: 'Core', desc: 'K-Means, Silhouette, Elbow method' },
      { name: 'Recommendation Systems', level: 'Core', desc: 'Content-based filtering & similarity' },
      { name: 'Model Evaluation', level: 'Core', desc: 'ROC-AUC, Confusion Matrix, Precision/Recall' },
      { name: 'Scikit-Learn', level: 'Core', desc: 'End-to-end ML model pipelines' },
    ],
    databases: [
      { name: 'Relational DBMS', level: 'Core', desc: 'Schema design, normalization, ACID' },
      { name: 'MySQL / PostgreSQL', level: 'Core', desc: 'Relational database querying' },
      { name: 'MongoDB', level: 'Learning', desc: 'NoSQL document storage basics' },
    ],
    tools: [
      { name: 'Git & GitHub', level: 'Core', desc: 'Branching, PRs, version control' },
      { name: 'Antigravity IDE', level: 'Core', desc: 'Agentic AI coding & rapid engineering' },
      { name: 'Jupyter Notebooks', level: 'Core', desc: 'Interactive data experiments & modeling' },
      { name: 'Power BI', level: 'Core', desc: 'Interactive business intelligence & KPI dashboards' },
      { name: 'n8n-architecture', level: 'Core', desc: 'Workflow automation & integration architecture' },
    ],
  },

  education: [
    {
      institution: 'MIT Academy of Engineering (MITAOE), Pune (Alandi)',
      degree: 'B.Tech in Information Technology',
      score: 'CGPA: 8.05',
      timeline: '2024 – 2028 · Currently Pursuing',
      focus: 'Data Science, Python Development & Analytics',
      type: 'degree',
    },
    {
      institution: 'Golden Kids Junior College',
      degree: 'Class XII (HSC)',
      score: '78.9%',
      timeline: 'Completed',
      type: 'school',
    },
    {
      institution: 'Golden Kids High School',
      degree: 'Class X (SSC)',
      score: '90.2%',
      timeline: 'Completed',
      type: 'school',
    },
  ],

  vision: {
    title: 'Where I Want to Go',
    quote: 'I want to build things that go beyond code using data, and technology to solve problems that actually matter.',
    statement1: 'I want to keep exploring, turn curious ideas into real products, and create things that make a difference.',
    statement2: 'I don’t have every step figured out yet, but I know I want to keep building, learning, and pushing what’s possible.',
  },
};
