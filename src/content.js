
import aboutMeBackground from './assets/summary-background.jpg';
import cvBackground from './assets/skills-background.jpg';
import siteBuildBackground from './assets/education-background.jpg';

export const aboutMe = {
  background: aboutMeBackground,
  title: 'About Me',
  paragraphs: [
    "Welcome! I'm Ajith Thati, a DevOps Engineer with over 8 years of experience, specializing in transforming complex challenges into streamlined, automated solutions. My journey in Agile environments has honed my ability to not only build and optimize critical deployments across AWS and Azure but also to anticipate and resolve issues with precision.",
    "Beyond traditional infrastructure, my expertise extends to the cutting edge of problem-solving, particularly in the realm of prompt engineering. Just as I architect robust CI/CD pipelines and manage intricate cloud resources, I apply a similar systematic approach to crafting effective prompts for AI. This involves a deep understanding of system behavior, iterative refinement, and a keen eye for detail – skills directly transferable from optimizing cloud-native tools to eliciting optimal responses from advanced models.",
    "I thrive on continuous learning and am a dedicated team player, always ready to take independent responsibility and contribute to innovative solutions. Whether it's automating infrastructure or engineering the perfect prompt, my goal remains consistent: to deliver efficient, reliable, and impactful results."
  ]
};

export const siteBuild = {
  background: siteBuildBackground,
  title: 'Project Implementation Methods',
  intro: 'This website was developed as a Single-Page Application (SPA) using a <strong>Component-Based Architecture</strong> with React, emphasizing modularity and reusability. The development followed an <strong>Iterative and Agile Methodology</strong>, allowing for continuous refinement and adaptation based on design goals and user feedback.',
  howIbuiltIt: {
    title: 'How I Built This Website',
    intro: 'This personal portfolio website was designed and developed to showcase my professional profile, CV, and technical skills in a modern, accessible, and interactive format. Below is a detailed overview of the technical planning, development, and deployment phases of this project.',
    planning: {
      title: '1️⃣ Project Planning & Architecture',
      points: [
        'Defined core content modules: Home (Hero), About Me, CV (Experience, Education, Skills), and Site Build (this page).',
        'Architected a responsive, component-based React application to ensure modularity, reusability, and maintainability.',
        'Outlined design principles focusing on modern aesthetics, smooth UI animations, and optimized performance across devices.'
      ]
    },
    development: {
      title: '2️⃣ Development & Implementation',
      points: [
        'Implemented a Single-Page Application (SPA) using React.js to provide a dynamic and seamless user experience without full page reloads.',
        'Utilized Tailwind CSS for a utility-first CSS framework, enabling rapid and consistent styling with highly customizable, responsive designs.',
        'Integrated Framer Motion for declarative, production-ready animations, enhancing user engagement with smooth page transitions, element reveals, and interactive components.',
        'Ensured full responsiveness across various breakpoints (desktop, tablet, mobile) using Tailwind CSS utilities and flexible React component layouts.',
        'Developed reusable and encapsulated React components (e.g., Hero, AboutMe, Experience, Education, Skills) to promote a modular codebase and simplify future updates.',
        'Configured client-side routing using React Router DOM (specifically HashRouter) to manage navigation within the SPA, ensuring compatibility with static hosting environments like GitHub Pages.'
      ]
    },
    versionControl: {
      title: '3️⃣ Version Control & Collaboration',
      points: [
        'Managed all source code using Git, a distributed version control system, for tracking changes, branching, and merging.',
        'Hosted the project repository publicly on GitHub, facilitating code collaboration and version history management.'
      ]
    },
    deployment: {
      title: '4️⃣ Deployment & Hosting',
      points: [
        'Deployed the static React application using GitHub Pages, leveraging its capabilities for hosting single-page applications directly from a GitHub repository.',
        
        'Conducted comprehensive testing across different browsers and devices to verify functionality, visual consistency, page transitions, and responsiveness.'
      ]
    },
    maintenance: {
      title: '5️⃣ Maintenance & Future Enhancements',
      points: [
        'Committed to ongoing updates, performance optimizations, and feature enhancements based on feedback and the evolution of web technologies.',
        'The modular architecture allows for easy integration of new sections or updates to existing content.'
      ]
    },
    technologiesUsed: {
      title: 'Key Technologies Used',
      points: [
        'React.js: A JavaScript library for building user interfaces, utilized for its component-based architecture and efficient DOM updates.',
        'Tailwind CSS: A utility-first CSS framework that enabled rapid UI development and highly customizable, responsive designs directly in markup.',
        'Framer Motion: A production-ready motion library for React, used to implement declarative animations and interactive gestures, enhancing the overall user experience.',
        'React Router DOM: A collection of navigational components that compose declaratively with your application, used for client-side routing within the SPA.',
        'Git & GitHub Pages: Git for version control and GitHub Pages for static site hosting and continuous deployment.'
      ]
    }
  },
  githubRepo: {
    title: 'GitHub Repository',
    text: 'The complete source code for this project is available on',
    link: 'https://github.com/AJtati/resumeproject'
  },
  
};

export const landingPage = {
  title: 'AJITH SURYA THATI',
  subtitle: 'DEVOPS ENGINEER',
  intro: 'MY PERSONAL WEBSITE, WHERE YOU WILL FIND A BIT ABOUT ME AND MY CV.'
};

export const cv = {
  background: cvBackground
};

export const hero = {
  title: 'AJITH SURYA THATI',
  subtitle: 'DevOps Engineer'
};

export const summary = {
  title: 'Summary',
  paragraph: 'DevOps Engineer with around 6 plus years of experience in supporting, automating, and optimizing deployments on cloud platforms such as AWS. Proven ability to design and maintain CI/CD pipelines using Jenkins, automate infrastructure and configuration management with Ansible, and manage containerized applications with Docker and basic Kubernetes. Skilled in version control and collaboration tools like GIT, JIRA, and Confluence, with solid understanding of the software development life cycle (SDLC) and Agile/Scrum methodologies. Hands-on experience working with core AWS services including EC2, VPC, IAM, S3, RDS, and Load Balancers, along with Infrastructure as Code using Terraform. Known for solving deployment challenges quickly, building automated solutions for reliable releases, and contributing to stable, scalable environments. Brings strong troubleshooting skills, a collaborative mindset, and a commitment to continuous improvement in DevOps practices.'
};

export const experience = {
  title: 'Work Experience',
  jobs: [
    {
      title: 'DevOps Engineer',
      company: 'Sky Betting and Gaming (Flutter UKI)',
      location: 'Leeds, UK',
      period: 'June 2023 – Present',
      tasks: [
        'Development and maintenance of CI/CD pipelines (Jenkins, GoCD, Concourse)',
        'Creation and maintenance of infrastructure for Free to Play products (AWS, Terraform)',
        'Part of support rota for any products within our remit, including out of hours (JIRA, PagerDuty)',
        'Deployment and maintenance of observability tools for use in AWS EKS platform (Helm, Terraform, Prometheus, Grafana, Alert manager)',
        'Various tooling migrations, including Chef to Cinc and AWS WAF to Cloudflare WAF',
        'Worked on migrations from concourse actions to GitHub actions',
        'Created a new test environment and deployed through pipelines',
        'Configured RDS instances and map more complex dependencies and identify network issues using Terraform.',
        'Created Docker images from scratch and customized and modified base images from existing environment configurations and maintaining the image repository for development teams.',
        'Worked on Lamda functions to fetch Ips of CloudFront and update them in s3 bucket policies',
        'Worked on Network Load Balancer (NLB) and target groups to establish connectivity with Amazon RDS using endpoint services. Additionally, deployed Lambda functions to monitor the RDS endpoint and dynamically update the target group with its IP addresses'
      ]
    },
    {
      title: 'AWS DevOps Engineer',
      company: 'IBM',
      location: 'Hyderabad, India',
      period: 'April 2021 – May 2023',
      tasks: [
        'Developed microservice onboarding tools using Python and Jenkins, streamlining creation and maintenance of build jobs and Kubernetes deployments.',
        'Managed containerized deployments with Docker and Kubernetes, including creating custom Docker images, Docker files, and Docker Compose files to automate CI/CD pipelines.',
        'Automated infrastructure provisioning and configuration management using Ansible roles, playbooks, and Ansible Tower for parallel deployments across multiple environments.',
        'Implemented Infrastructure as Code with Terraform to build, change, and version cloud and on-premises infrastructure, integrating with Jenkins pipelines for automated deployments.',
        'Monitored and analysed system logs with Splunk to improve performance and enable proactive incident management.',
        'Configured automated code scanning and security analysis using Sonatype and VeraCode, ensuring code quality and compliance.',
        'Collaborated with development teams on Git source control, managing branching strategies, merge conflict resolution, and maintaining clear versioning practices.',
        'Automated processes with Bash/Shell scripting and JSON templates to enhance build and release pipelines in VSTS.',
        'Supported Agile and Scrum practices by maintaining JIRA for tracking tasks, defects, and change management; provided troubleshooting and problem-solving across deployment stages.',
        'Provided technical guidance on DevOps best practices, security, and automation to team members, fostering stable and cost-effective infrastructure solutions'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Tech Mahindra Limited',
      location: 'Hyderabad, India',
      period: 'Nov 2016 – March 2021',
      tasks: [
        'Deployed and managed cloud infrastructure using AWS services such as EC2, VPC, S3, IAM, Route 53, and Lambda; automated EC2, VPC, ELB, and Auto Scaling configurations using Terraform and CloudFormation.',
        'Designed and maintained CI/CD pipelines with Jenkins, integrating Git, Maven, Selenium, and JUnit for automated build, test, and deployment.',
        'Developed reusable Jenkins shared libraries and integrated pipelines with Slack/MS Teams for real-time status notifications.',
        'Built, deployed, and orchestrated containerized microservices using Docker, Kubernetes, Docker Swarm, and Docker Compose; created custom Docker images and automated deployments with Ansible.',
        'Implemented certificates and load balancers (Classic and Application) across multiple environments to ensure secure and high-availability deployments.',
        'Automated server provisioning and configuration management using Ansible and Chef, writing playbooks and roles for consistent deployments.',
        'Managed source control using Git and GitLab; designed branching and merging strategies and provided day-to-day Git support for multiple projects.',
        'Set up and maintained artifact repositories using Nexus and Jfrog Artifactory to manage build artifacts and dependencies.',
        'Led the design and implementation of ISTIO for microservices traffic management across QA, pre-production, and production clusters.',
        'Developed PowerShell and Linux shell scripts for server housekeeping and operational automation, improving system reliability and reducing manual tasks.',
        'Collaborated with cross-functional teams (development, QA, IT Ops, PMs) to coordinate smooth releases and ensure build stability and deployment success.',
        'Used JIRA for tracking bugs, managing sprints, and reporting progress, contributing to Agile project delivery.',
        'Documented processes and provided on-call support to ensure continuous availability and rapid incident resolution.'
      ]
    }
  ],
  environment: {
    title: 'Environment:',
    text: 'Terraform, Ansible, Maven, GIT, Nexus, PowerShell, AWS, Jenkins, Docker, Gitlab, Jfrog Artifactory, Jira, Selenium, Windows, Redhat linux.'
  }
};

export const skills = {
  title: 'Technical Skills',
  skills: [
    { category: 'Operating Systems', value: 'Linux (RedHat), Windows' },
    { category: 'Version Control', value: 'Git, GitHub' },
    { category: 'CI/CD', value: 'Jenkins, GitLab, GitHub Actions, Concourse' },
    { category: 'Cloud Platforms', value: 'AWS (EC2, VPC, ELB, S3, RDS, Route53, IAM, Lambda), Azure' },
    { category: 'Configuration Management', value: 'Ansible, Chef' },
    { category: 'Infrastructure as Code (IaC)', value: 'Terraform, Cloud formation, AWS CDK' },
    { category: 'Containerization', value: 'Docker, Kubernetes, Docker-Swarm' },
    { category: 'Service Mesh', value: 'Istio' },
    { category: 'Monitoring tools', value: 'Prometheus, Splunk' },
    { category: 'Scripting', value: 'Bash/Shell, PowerShell' },
    { category: 'Project Management', value: 'JIRA' },
    { category: 'Methodologies', value: 'Agile, Scrum, SDLC' }
  ]
};

export const education = {
  title: 'Education',
  degrees: [
    {
      degree: 'Master of Science in Computer Science',
      university: 'Teesside University',
      period: 'Jan 2021 - Jan 2023'
    },
    {
      degree: 'Bachelor of Technology',
      university: 'Jawaharlal Nehru Technological University',
      period: '2012 - 2016'
    }
  ]
};

export const bottomNav = [
  { to: '/', icon: '🏠', text: 'Home' },
  { to: '/about', icon: '👤', text: 'About' },
  { to: '/cv', icon: '📄', text: 'CV' },
  { to: '/build-resume', icon: 'FaFileAlt', text: 'Builder' },
  { to: '/site-build', icon: '🛠️', text: 'Site Build' }
];