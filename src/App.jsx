import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const data = {
  personal_info: {
    name: 'ATHARVA JAGTAP',
    main_title:
      'Freelance Full-Stack Developer (Python • Node.js • React) | Google Developer Program Member | Ex-Intern @ EDBA Academy | B.Tech CSE | Prompt Engineering & AI Specialist | Expert Debugger & Innovative Problem Solver',
    summary:
      'Results-driven Full-Stack Developer (Python • Node.js • React) and Computer Science Engineer (B.Tech CSE) with over 2 years of experience designing, developing, and debugging scalable, AI-driven web and android applications.',
    resume_link: '/Atharva_Dharmendra_Jagtap_Resume.pdf',
    profile_image: '/profile.png',
  },
  about_section: {
    summary_paragraphs: [
      'Results-driven Full-Stack Developer (Python • Node.js • React) and Computer Science Engineer (B.Tech CSE) with over 2 years of experience designing, developing, and debugging scalable, AI-driven web and android applications. As a Google Developer Program Member and Ex-Intern @ EDBA Academy, I bring a strong balance of technical depth, innovation, and problem-solving to every project.',
      'I specialize in end-to-end development — from crafting efficient back-end APIs and integrating advanced AI models to building seamless, high-performance front-end interfaces. My expertise includes Prompt Engineering, intelligent system design, and deep debugging, ensuring robust and optimized code delivery across all stages of development.',
      'With a passion for clean architecture, continuous improvement, and performance optimization, I aim to deliver intelligent, secure, and user-centric solutions that drive measurable impact. I thrive in collaborative, fast-paced environments that challenge me to explore new technologies and engineer next-generation digital experiences.',
    ],
    core_competencies: [
      'Full-Stack Web & Mobile Development (Python, Node.js, React, React Native)',
      'Prompt Design & AI Model Integration',
      'API Development, Automation, and System Debugging',
      'Scalable Architecture & Performance Optimization',
      'Agile Development & Continuous Integration',
    ],
    stats: [
      { label: 'Years Experience', value: 2, suffix: '+' },
      { label: 'Projects Completed', value: 50, suffix: '+' },
      { label: 'Academic Score', value: 93.4, suffix: '%' },
    ],
  },
  skills: {
    top_skills: ['React.js', 'Responsive Web Design', 'API Development', 'AI Integration'],
    categories: [
      {
        title: 'Frontend Development',
        skills: ['React.js', 'Next.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS', 'Tailwind CSS'],
        color_gradient: 'from-blue-500 to-cyan-500',
      },
      {
        title: 'Backend Development',
        skills: ['Node.js', 'Python', 'PHP', 'API Development', 'Database Design', 'RESTful APIs', 'Express.js'],
        color_gradient: 'from-green-500 to-emerald-500',
      },
      {
        title: 'Programming Languages',
        skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C Language', 'C++', 'PHP', 'HTML', 'CSS'],
        color_gradient: 'from-purple-500 to-pink-500',
      },
      {
        title: 'Tools & Technologies',
        skills: ['Git', 'GitHub', 'Postman', 'Vite', 'Expo', 'Gemini APIs', 'Vertex API', 'Google Agent Dev Kit', 'Firebase', 'Google Cloud Platform'],
        color_gradient: 'from-orange-500 to-red-500',
      },
    ],
  },
  education_and_achievements: {
    education: [
      {
        institution: 'Fr. Conceicao Rodrigues College of Engineering',
        degree: 'Bachelor of Technology - BTech, Computer Science and Engineering',
        period: 'Aug 2025 - present',
        description:
          'Looking forward to honing my skills, exploring cutting-edge technologies, and building impactful projects during this new academic journey.',
      },
      {
        institution: "Vidyavardhini's Bhausaheb Vartak Polytechnic",
        degree: 'Diploma in Computer Engineering',
        period: 'July 2022 - April 2025',
        description: 'Specialized in Computer Engineering with a GPA of 93.4%.',
      },
      {
        institution: 'Smt. Taramai Vartak Memorial Academy (CBSE)',
        degree: 'Secondary Education (SSC)',
        period: 'March 2017 - February 2022',
        description: 'Completed secondary education with 77.8%.',
      },
    ],
    certifications: [
      'GitHub Foundations',
      'Prompt Design in Vertex AI',
      'JPMorgan Chase & Co - Software Engineering Job Simulation',
    ],
    achievements: [
      {
        title: 'Winner – MSBTE State Level Technical Paper Presentation',
        description:
          'Awarded 1st place for presenting a research paper on Multimodal AI and Prompt Engineering for Automated Software Development.',
      },
      {
        title: 'Consolation Prize – MSBTE State Level Project Competition',
        description:
          "Recognized for 'Elliot – AI-Powered Development Suite' at the MSBTE State Project Competition.",
      },
    ],
  },
  contact: {
    info: [
      { label: 'Phone', value: '+91 7066935597', href: 'tel:+917066935597', color_gradient: 'from-green-500 to-emerald-500' },
      { label: 'Email', value: 'atharvaj365@gmail.com', href: 'mailto:atharvaj365@gmail.com', color_gradient: 'from-blue-500 to-cyan-500' },
      { label: 'LinkedIn', value: 'jagtap-atharva', href: 'https://www.linkedin.com/in/jagtap-atharva', color_gradient: 'from-purple-500 to-pink-500' },
    ],
    languages: [
      { name: 'English', level: 'Professional' },
      { name: 'Hindi', level: 'Native' },
      { name: 'Marathi', level: 'Native' },
    ],
    location: { city: 'Virar, Maharashtra', country: 'India', availability: 'Available for remote work worldwide' },
  },
  projects: [
    {
      title: 'Glyphify - Android and IOS Application',
      description:
        'Glyphify is a cutting-edge mobile application designed to revolutionize the way teachers and students handle information. By leveraging intelligent AI, Glyphify effortlessly extracts text from documents, converting handwritten notes and printed materials into editable digital text. This powerful tool streamlines workflows, saves valuable time, and bridges the gap between the physical and digital worlds for both educators and learners.',
      technologies: ['React-native', 'CSS', 'JavaScript', 'Google Generative AI API'],
      link: 'https://atharvaj1234.github.io/Glyphify',
      image: '/images/glyphify_ss1.png',
      modal_images: ['/images/glyphify_ss1.png', '/images/glyphify_ss2.png'],
      featured: true,
    },
    {
      title: 'Designo – AI-Powered Figma Plugin',
      description:
        'Created a GenAI-based Figma plugin that streamlines the creation workflow by generating intelligent design proposals and mockups from textual input. Integrated advanced language models with the canvas for smart element placement and prompt-to-interface transformation, improving UI/UX creation efficiency by 25%.',
      technologies: [
        'HTML',
        'Tailwind CSS',
        'JavaScript',
        'Google Generative AI API',
        'Google Agent Development Kit',
        'Python',
        'Python Flask API',
        'Firebase Firestore',
        'Firebase Authentication',
      ],
      link: 'https://github.com/atharvaj1234/Designo',
      image: '/images/designo_ss1.png',
      modal_images: ['/images/designo_ss1.png', '/images/designo_ss2.png', '/images/designo_ss3.png'],
      featured: true,
    },
    {
      title: 'Elliot – AI-Powered Software Development Suite',
      description:
        'Spearheaded development of an innovative AI-powered suite capable of generating full-stack web and Android applications from natural language prompts. Implemented advanced AI agents for intelligent task handling, tool invocation, and rapid concept-to-code transformation, significantly reducing development time by an estimated 40%. Automated code scaffolding, task execution, and bug identification/fixing workflows, optimizing developer productivity.',
      technologies: [
        'TypeScript',
        'React.js',
        'HTML',
        'Tailwind CSS',
        'Google Generative AI API',
        'OpenAI API',
        'Python',
        'Python Flask API',
        'SQLite',
      ],
      link: '#',
      image: '/images/elliot_ss3.png',
      modal_images: ['/images/elliot_ss1.png', '/images/elliot_ss2.png', '/images/elliot_ss3.png'],
      featured: true,
    },
    {
      title: 'SkillsElevate – AI-powered Interactive Learning Platform',
      description:
        'Built an AI-driven learning platform enhancing quantitative, verbal, logical reasoning, and data interpretation through interactive practice, assessments, real-time feedback, gamification, and performance analytics.',
      technologies: [
        'JavaScript',
        'React.js',
        'HTML',
        'Tailwind CSS',
        'Google Generative AI API',
        'Node.js',
        'Firebase Hosting',
        'Firebase Firestore',
        'Firebase Authentication',
      ],
      link: 'https://github.com/atharvaj1234/SkilsElevate_Aptitude_Assessment_Tool',
      image: '/images/skillselevate_ss1.png',
      modal_images: ['/images/skillselevate_ss1.png', '/images/skillselevate_ss2.png', '/images/skillselevate_ss3.png'],
      featured: false,
    },
    {
      title: 'Sign Language Translator',
      description:
        'Engineered a real-time American Sign Language (ASL) recognition system leveraging MediaPipe and React, effectively bridging communication gaps for hearing-impaired individuals.',
      technologies: ['TypeScript', 'React.js', 'Node.js', 'Jupyter Notebook', 'Google Cloud Console', 'Tailwind CSS', 'HTML', 'SQLite'],
      link: 'https://github.com/atharvaj1234/Sign-Language-Translator',
      image: '/images/signlangtrans_ss1.png',
      modal_images: ['/images/signlangtrans_ss1.png'],
      featured: false,
    },
    {
      title: 'Health Consultant Platform',
      description:
        'Implemented a full-stack telehealth platform facilitating remote healthcare consultations, secure management of medical records, and streamlined digital appointment scheduling, improving patient access and administrative efficiency.',
      technologies: ['JavaScript', 'React.js', 'Tailwind CSS', 'HTML', 'Node.js', 'SQLite'],
      link: 'https://github.com/atharvaj1234/Heath-Consultant-System',
      image: '/images/healthconsystem_ss1.png',
      modal_images: [
        '/images/healthconsystem_ss1.png',
        '/images/healthconsystem_ss2.png',
        '/images/healthconsystem_ss3.png',
        '/images/healthconsystem_ss4.png',
        '/images/healthconsystem_ss5.png',
      ],
      featured: false,
    },
    {
      title: 'Automatic Report Generation System',
      description:
        'Developed a Python-based utility for automated generation and printing of employee performance reports, integrating with MySQL to streamline internal HR automation processes by over 30%.',
      technologies: ['Python', 'Jinja', 'MySQL'],
      link: 'https://github.com/atharvaj1234/Automatic-Report-Generation',
      image: '/images/project6.svg',
      modal_images: ['/images/project6.svg'],
      featured: false,
    },
    {
      title: 'Alumni Registration Email Sender',
      description:
        'Automated the distribution of registration emails with QR codes for alumni reunion events via a CLI application, leveraging Gmail SMTP and Google Spreadsheet API to efficiently process over 500 registrations.',
      technologies: ['Python', 'Google Spreadsheet API', 'SMTP Library', 'Windows Batch File'],
      link: 'https://github.com/atharvaj1234/Email-Automation-System-for-Alumni-Meet',
      image: '/images/project7.svg',
      modal_images: ['/images/project7.svg'],
      featured: false,
    },
  ],
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <nav className="mb-6 flex items-center justify-between rounded-xl bg-white/70 px-4 py-3 backdrop-blur ring-1 ring-slate-200">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400" />
            <span className="text-sm font-semibold text-slate-800">Atharva Jagtap</span>
          </div>
          <div className="hidden gap-4 text-sm text-slate-700 sm:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#skills" className="hover:text-slate-900">Skills</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </nav>

        <Hero personal={data.personal_info} />

        <div id="about">
          <About about={data.about_section} />
        </div>

        <div id="skills">
          <Skills skills={data.skills} />
        </div>

        <div id="projects">
          <Projects projects={data.projects} />
        </div>

        <div id="contact">
          <Contact contact={data.contact} />
        </div>

        <footer className="mx-auto mt-12 max-w-7xl rounded-2xl bg-white p-6 text-center text-sm text-slate-600 ring-1 ring-slate-200">
          © {new Date().getFullYear()} Atharva Jagtap. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
