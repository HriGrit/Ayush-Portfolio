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
      {
        company: 'IndiaMART InterMESH Ltd',
        role: 'Associate Engineer',
        duration: 'Nov 2025 - Present',
        location: 'Noida, Uttar Pradesh',
        description: [
          'Architected a multimodal hybrid search engine over IndiaMART\'s B2B catalog by fusing image and text embeddings in Qdrant; improved semantic retrieval recall@10 by ~14%.',
          'Engineered a DSPy-optimised RAG recommendation pipeline with retrieval constraints and programmatic prompt optimisation; reduced hallucinations by ~28%.',
          'Deployed async LLM inference microservices using FastAPI with streaming and token controls; achieved p50 latency under 900 ms at 50+ RPS.'
        ]
      },
      {
        company: 'Neuralens AI',
        role: 'Software Development Intern',
        duration: 'May 2025 - Oct 2025',
        location: 'Gurugram, Haryana',
        description: [
          'Built a production RAG chatbot with hybrid retrieval (BM25 + semantic) and citation grounding; reduced fallback responses by ~30%.',
          'Engineered an agentic workflow backend (FastAPI + LangChain) with tool calling and schema validation; improved tool call success rate to ~87%.',
          'Built a fault-tolerant real-time analytics pipeline ingesting ~500 events/sec into BigQuery via microservices.'
        ]
      },
      {
        company: 'rtCamp Solutions Private Limited',
        role: 'Associate Software Engineer',
        duration: 'Jan 2025 - Apr 2025',
        location: 'Remote, India',
        description: [
          'Developed enterprise-grade WordPress solutions enforcing strict architectural patterns and PHPCS standards; reduced code debt by 25%.',
          'Engineered optimised WP-CLI migration scripts for batch processing of massive datasets; increased operational efficiency by 30%.',
          'Delivered a pixel-perfect, accessible frontend architecture adhering to WCAG guidelines; achieved 95% accuracy on Playwright regression tests.'
        ]
      },
      {
        company: 'Upwork',
        role: 'Freelance Software Developer',
        duration: 'May 2024 - Dec 2024',
        location: 'Remote',
        description: [
          'Architected and deployed Dockerized full-stack applications for international clients, ensuring consistent development and production environments.',
          'Integrated Stripe for secure payment processing and Mailchimp for automated marketing workflows and newsletter management.',
          'Implemented A/B testing strategies to optimize user conversion rates and informed product decisions using data-driven insights.',
          'Developed robust backend microservices with real-time features, emphasizing scalability and performance.'
        ]
      },
      {
        company: 'Ajastos Film Technology',
        role: 'Software Development Intern',
        duration: 'Jan 2024 - May 2024',
        location: 'Hyderabad, Telengana',
        description: [
          'Lead a small team of developers to meet Client Requirements.',
          'Deployed the application on a scaleable infrastructure.',
          'Leveraged React Query to optimize API calling.'
        ]
      },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        title: 'AI KNOWLEDGE ASSISTANT',
        subtitle: 'LLMOps Observability Pipeline',
        description: 'Production-grade RAG chatbot with hybrid retrieval (BM25 + semantic via Qdrant) and a streaming FastAPI backend. Achieved ~85% answer groundedness; implemented Langfuse tracing and automated regression evaluation; built a React dashboard for monitoring faithfulness and latency.',
        githubUrl: 'https://github.com/HriGrit',
        techStack: ['Python', 'FastAPI', 'Qdrant', 'LangChain', 'Langfuse', 'React']
      },
      {
        title: 'MAROFA',
        subtitle: 'Accessible, high-performance commercial platform',
        description: 'Commercial platform focusing on accessibility and performance. Boosted WCAG compliance to over 90%; implemented server-side caching with TanStack Query; improved Lighthouse performance scores by 35%.',
        githubUrl: 'https://github.com/HriGrit',
        techStack: ['React', 'TanStack Query', 'TypeScript', 'SSR', 'WCAG']
      },
    ];
  }

  getSkills(): Skill[] {
    return [
      // AI/ML & LLMs
      { name: 'Python', category: 'AI/ML & LLMs' },
      { name: 'LangChain', category: 'AI/ML & LLMs' },
      { name: 'DSPy', category: 'AI/ML & LLMs' },
      { name: 'RAG Pipeline', category: 'AI/ML & LLMs' },
      { name: 'Prompt Engineering', category: 'AI/ML & LLMs' },
      { name: 'Qdrant', category: 'AI/ML & LLMs' },
      { name: 'Langfuse', category: 'AI/ML & LLMs' },
      { name: 'Agentic Workflows', category: 'AI/ML & LLMs' },
      // Frontend
      { name: 'ReactJS', category: 'Frontend' },
      { name: 'TypeScript', category: 'Frontend' },
      { name: 'HTML', category: 'Frontend' },
      { name: 'CSS', category: 'Frontend' },
      { name: 'Javascript', category: 'Frontend' },
      { name: 'Redux', category: 'Frontend' },
      { name: 'TanStack Query', category: 'Frontend' },
      { name: 'SSR', category: 'Frontend' },
      // Backend & Databases
      { name: 'FastAPI', category: 'Backend & Databases' },
      { name: 'NodeJS', category: 'Backend & Databases' },
      { name: 'PostgreSQL', category: 'Backend & Databases' },
      { name: 'MySQL', category: 'Backend & Databases' },
      { name: 'REST APIs', category: 'Backend & Databases' },
      // DevOps & Cloud
      { name: 'Google Cloud Platform', category: 'DevOps & Cloud' },
      { name: 'AWS', category: 'DevOps & Cloud' },
      { name: 'BigQuery', category: 'DevOps & Cloud' },
      { name: 'Docker', category: 'DevOps & Cloud' },
      { name: 'NGINX', category: 'DevOps & Cloud' },
      { name: 'Git', category: 'DevOps & Cloud' },
      { name: 'CI/CD', category: 'DevOps & Cloud' },
    ];
  }
}



