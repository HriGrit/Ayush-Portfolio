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
      { company: 'Neuralens AΙ', role: 'Software Development Intern', duration: 'May 2025 - Present', location: 'Gurugram, Haryana', description: ['Engineered a Retrieval Augmented Generation (RAG) pipeline with optimized chunking, embedding, and vector search strategies.', 'Leveraged FastAPI to create a scaleable backend implementing Tool Calling for Agentic workflows.', 'Created a Data Analytics pipeline feeding events to BigQuery via microservices.'] },
      { company: 'rtCamp Solutions Private Limited', role: 'Associate Software Engineer', duration: 'Jan 2025 - Apr 2025', location: 'Remote, India', description: ['Designed high-performance WordPress plugins, achieving a 25% improvement in performance.', 'Created robust WP-CLI commands that increased efficiency by 30%.', 'Developed a responsive and accessible UI with 95% test accuracy.'] },
      { company: 'MAROFA', role: 'Freelance Software Developer', duration: 'Oct 2023 - Dec 2023', location: 'Remote, Saudi Arabia', description: ['Spearheaded MVP development, delivering high-quality software on time.', 'Boosted the platform\'s WCAG compliance score to over 90%.', 'Improved Lighthouse performance by 35% using SEO and TanStack.'] }
    ];
  }

  getProjects(): Project[] {
    return [
      { title: 'EXPENSE ATLAS', subtitle: 'A SMART TRACKER ENGINEERED BY MERN STACK', description: 'Engineered a MERN stack application to effortlessly track, categorize, and visualize user expenses in real-time, featuring JWT authentication.', githubUrl: 'https://github.com/HriGrit/MERN-expense-tracker', techStack: ['MERN', 'TailWindCSS', 'JWT'] },
      { title: 'MESSENGER YUSHI', subtitle: 'EMPOWERING SEAMLESS PRIVATE CONVERSATIONS', description: 'Architected a scalable, serverless messaging app using the Firebase suite and implemented Redux for robust client-side state management.', githubUrl: 'https://github.com/HriGrit/Yushi', techStack: ['Firebase', 'React', 'Redux'] }
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'ReactJS', category: 'Frontend' }, { name: 'HTML', category: 'Frontend' }, { name: 'CSS', category: 'Frontend' }, { name: 'Javascript', category: 'Frontend' }, { name: 'Typescript', category: 'Frontend' }, { name: 'Redux', category: 'Frontend' },
      { name: 'NodeJS', category: 'Backend' }, { name: 'PHP', category: 'Backend' },
      { name: 'MySQL', category: 'Databases' }, { name: 'Postgres SQL', category: 'Databases' },
      { name: 'C++', category: 'Languages' }, { name: 'Java', category: 'Languages' }, { name: 'Python', category: 'Languages' },
      { name: 'Docker', category: 'DevOps & Cloud' }, { name: 'Google Cloud Platform', category: 'DevOps & Cloud' }, { name: 'AWS', category: 'DevOps & Cloud' }, { name: 'NGINX', category: 'DevOps & Cloud' }, { name: 'Git', category: 'DevOps & Cloud' }
    ];
  }
}


