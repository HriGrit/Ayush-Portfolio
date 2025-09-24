import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  getPersonalInfo(): { name: string; github: string; linkedin: string } {
    return {
      name: 'Ayush Soam',
      github: 'https://github.com/HriGrit',
      linkedin: 'https://www.linkedin.com/in/ayush-soam/'
    };
  }

  getExperience(): Experience[] {
    return [
      { company: 'Biz2x Private Limited', role: 'Associate Software Engineer', duration: 'Sept 2025 - Present', location: 'Noida, Uttar Pradesh', description: ['Worked on creating effect and perfomative application using MEAN Stack.', 'Utilized the concept of JWT to provide user authorization and user authentication.', 'Collaborated with Cross functional teams, effectively using Gitlab.'] },
      { company: 'Neuralens AI', role: 'Software Development Intern', duration: 'May 2025 - Sept 2025', location: 'Gurugram, Haryana', description: ['Engineered a Retrieval Augmented Generation (RAG) pipeline with optimized chunking, embedding, and vector search strategies.', 'Leveraged FastAPI to create a scaleable backend implementing Tool Calling for Agentic workflows.', 'Created a Data Analytics pipeline feeding events to BigQuery via microservices.'] },
      { company: 'rtCamp Solutions Private Limited', role: 'Associate Software Engineer', duration: 'Jan 2025 - Apr 2025', location: 'Pune, Maharastra', description: ['Designed high-performance WordPress plugins, achieving a 25% improvement in performance.', 'Created robust WP-CLI commands that increased efficiency by 30%.', 'Developed a responsive and accessible UI with 95% test accuracy.'] },
      { company: 'Ajastos Film Technology', role: 'Software Development Intern', duration: 'Jan 2024 - May 2024', location: 'Hyderabad, Telengana', description: ['Lead a small team of developers to meet Client Requirements.', 'Deployed the application on a scaleable infrastructure.', 'Leveraged React Query to optimize API calling.'] },
      { company: 'Marofa', role: 'Freelance Software Developer', duration: 'Oct 2023 - Dec 2023', location: 'Remote', description: ['Spearheaded MVP development, delivering high-quality software on time.', 'Boosted the platform\'s WCAG compliance score to over 90%.', 'Improved Lighthouse performance by 35% using SEO and TanStack.'] },
    ];
  }

  getProjects(): Project[] {
    return [
      { title: 'EXPENSE ATLAS', subtitle: 'A smart tracker engineered by MERN Stack', description: 'Engineered a MERN stack application to effortlessly track, categorize, and visualize user expenses in real-time, featuring JWT authentication.', githubUrl: 'https://github.com/HriGrit/MERN-expense-tracker', techStack: ['MERN', 'TailWindCSS', 'JWT'] },
      { title: 'MESSENGER YUSHI', subtitle: 'Empowering seamless private conversations', description: 'Architected a scalable, serverless messaging app using the Firebase suite and implemented Redux for robust client-side state management.', githubUrl: 'https://github.com/HriGrit/Yushi', techStack: ['Firebase', 'React', 'Redux'] },
      // { title: 'Marofa', subtitle: 'CONNECTING HOUSE HELPERS TO PEOPLE', description: 'Created the Product Design and Wire-frames for the website, worked on React.Js and TailWindCss to create a responsive and pixel perfect design and Using Node.js, Express.js and MongoDB for database to store large amounts of relational data.', githubUrl: 'https://github.com/HriGrit/Yushi', techStack: ['Firebase', 'React', 'Redux'] }
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'ReactJS', category: 'Frontend' }, { name: 'HTML', category: 'Frontend' }, { name: 'CSS', category: 'Frontend' }, { name: 'Javascript', category: 'Frontend' }, { name: 'Typescript', category: 'Frontend' }, { name: 'Redux', category: 'Frontend' },
      { name: 'NodeJS', category: 'Backend & Databases' }, { name: 'PHP', category: 'Backend & Databases' }, { name: 'MySQL', category: 'Backend & Databases' }, { name: 'PostgreSQL', category: 'Backend & Databases' }, { name: 'C++', category: 'Backend & Databases' }, { name: 'Java', category: 'Backend & Databases' }, { name: 'Python', category: 'Backend & Databases' },
      { name: 'Docker', category: 'DevOps & Cloud' }, { name: 'Google Cloud Platform', category: 'DevOps & Cloud' }, { name: 'AWS', category: 'DevOps & Cloud' }, { name: 'NGINX', category: 'DevOps & Cloud' }, { name: 'Git', category: 'DevOps & Cloud' }
    ];
  }
}


