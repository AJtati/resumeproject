
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
  paragraph: 'Skilled DevOps Engineer with 8+ years of experience in Agile methodology, supporting, automating, and optimizing critical deployments in cloud-native tools, AWS, and Azure, leveraging configuration management, CI/CD, and DevOps processes. Proficient in problem-solving and tackling issues promptly with strong verbal and communication skills. Self-motivated, quick learner, and team player with the ability to take independent responsibility and contribute to the team.'
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
        'Developed microservice on boarding tools leveraging Python and Jenkins allowing for easy creation and maintenance of build jobs and Kubernetes deploy and services.',
        'Experience on Kubernetes based container deployments to create self-environments for dev teams and containerization of environments delivery for releases.',
        'Used Docker, Kubernetes to manage micro services for development of integration and continuous delivery.',
        'Worked on creating the Docker containers and Docker consoles for managing the application lifecycle. Worked on various Docker components like Docker Engine, Hub, Machine, Compose and Docker Registry.',
        'Focused on containerization and immutable infrastructure. Docker has been core to this experience, along with Kubernetes. Experienced in using Docker Swarm and deployed spring boot applications. Deployed Docker Engines in Virtualized Platforms for containerization of multiple apps.',
        'Created Docker images from scratch and customized and modified base images from existing environment configurations and maintaining the image repository for development teams.',
        'Created Ansible roles in YAML and defined tasks, variables, files, handlers and templates. Created inventory and configured the Ansible files for parallel deployment in Ansible for automating the Continuous delivery process',
        'Experience in managing Ansible Playbooks with Ansible roles. Used file module in Ansible playbook to copy and remove files on remote systems. Created inventory in Ansible for automating the continuous deployment.',
        'Used Ansible as Configuration management tool, to automate repetitive tasks, quickly deploy critical applications, manage change.',
        'Experience on Operations Management Suite, Power shell Scripts and ARM templates.',
        'I wrote the ansible playbooks which is the entry point for Ansible provisioning, where the automation is defined through tasks using YAML format. Run Ansible Scripts to provision Dev servers.',
        'Writing several Ansible Playbooks and Roles for provisioning the machines in different environments and converting the static playbooks into roles.',
        'Experience in using Ansible Tower, which provides an easy-to-use dashboard, and role-based access control, so that it is easier to allow individual teams access to use Ansible for their deployments.',
        'Written Ansible custom roles to provision infrastructure and to configure various application.',
        'Having experience in Code Scanning configuration and Optimization in Sonatype and VeraCode.',
        'Integration of Automated Build with Deployment Pipeline. Currently installed and clients to pick up the Build from Jenkins repository and deploy in target environments (Integration, QA, and Production).',
        'Using Terraform as a tool, Managed different infrastructure resources Cloud, VMware, Bare Metal Servers, and Docker containers.',
        'Worked with Docker and created Dockerfile and Docker-compose files to containerize CI/CD pipeline, created custom images and pushed it to Docker Hub.',
        'Using Terraform as a tool, Managed different infrastructure resources Cloud, VMware, Bare Metal Servers, and Docker containers.',
        'Used Terraform for building, changing, versioning infrastructure and collaborate the automation of Jenkins.',
        'Built the process by automating using JSON Templates and deploying it using the build and release pipeline in VSTS.',
        'Worked to set up Splunk to capture & analyze logs from various layers such as Load Balancers, Web servers and application servers.',
        'Used Splunk to monitor the system logs as well as notify the incident management system upon exceeding thresholds.',
        'Coordinated/assisted developers with establishing and applying appropriate branching, labeling/naming conventions using GIT source control also Analyze and resolve conflicts related to merging of source code for GIT.',
        'Exposure to configuration management policies along with automation of scripting using Bash/Shell scripting.',
        'Maintained JIRA for tracking and updating project defects and tasks ensuring successful completion of tasks in sprint.',
        'Have good understanding of Incident, Problem and Change management and have excellent troubleshooting, time management skills, ability to work independently or as part of a team.'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'Tech Mahindra Limited',
      location: 'Hyderabad, India',
      period: 'Nov 2016 – March 2021',
      tasks: [
        'Hands on experience with AWS Cloud services like EC2, VPC, S3, IAM, Route 53 and Lambda.',
        'Worked on S3 lifecycle policy, VPC migrations and Volumes encryptions.',
        'Created multi branch pipelines and automated build and deploys using Jenkins and Ansible.',
        'Integrated Git, Junit Testing and Selenium in continuous deployment.',
        'Automated Sensu server-client installation and also checks configuration using Ansible.',
        'Extensively used Terraform in AWS Virtual Private Cloud to setup and modify settings by interfacing with control layer.',
        'Used Terraform for building, changing, versioning infrastructure and collaborate the automation of Jenkins.',
        'Integrated Docker container orchestration framework using Kubernetes by creating PODS, config maps, deployments, replica sets & nodes.',
        'Created Docker Images using Docker file & involved in designing and implementing micro-service solutions using container-based technologies (Docker and orchestration technologies, Docker-Swarm, Docker-Compose, Kubernetes)',
        'Expertise in Jenkins to drive all microservices builds out to the Docker registry and deployed to Kubernetes.',
        'Created certificates using AWS certificate manager and applied them across ELBs and EC2s.',
        'Set up both classic and application load balancers as per the requirements of the application teams.',
        'Used shared libraries across multiple Jenkins files to create re-usable codes.',
        'Integrated build/deploy pipelines with emails/Slack/MS Teams so that appropriate teams are notified on status.',
        'Automated creation of immutable infrastructure (EC2, VPC, ELB, Auto-Scaling etc.) using Terraform.',
        'Created PowerShell and Linux shell scripts to automate the housekeeping of the servers.',
        'Promoted builds across various environments such as sandbox, dev, sat, prod and DR.',
        'Docker registry and deploy to Docker Swarm cluster using Ansible.',
        'Maintained and managed Jenkins in terms of plugin management, user access, configuration management.',
        'Integrated Jenkins with AWS plugin so that the Jenkins slaves are online only when called, resulting in cost savings.',
        'Wrote docker files to automate database deployments on oracle Linux containers.',
        'Modeled and automated the End-to-End Continuous Integration/Deployment/Delivery pipeline which included building a Continuous Integration server utilizing tools like Jenkins, Nexus Artifactory, GIT.',
        'Used Nexus Artifactory as our external repository manager to store and retrieve the build artifacts.',
        'Coordinating the resources by working closely with Project Manager\'s for the release and Project Manager for all the Operational Projects. Coordinate with the Development, QA and IT Operations teams during deployments to ensure there are no Conflicts.',
        'Installed and administered various tools like Jenkins, Gitlab, Chef, Jfrog Artifactory and executed maintenance tasks such as creating users and groups.',
        'Experience in creating the company\'s DevOps strategy in a mix environment of Linux (RHEL, Ubuntu) servers along with creating and implementing a cloud strategy based on Amazon Web Services.',
        'Implemented a CI/CD pipeline involving GitLab, Jenkins, Chef and Selenium to complete the automation from commit to Deployment.',
        'Worked on ISTIO POC and single handedly implemented ISTIO in QA, Preprod and Prod clusters.',
        'Worked on S3 lifecycle policy, VPC migrations and Volumes encryptions.',
        'Responsible for design and maintenance of the GIT Repositories and performed all necessary day-to- day GIT support for projects.',
        'Created and Implemented branching & merging strategy with multiple branches.',
        'Participation and Contribution in periodic archiving and storage of the source code for disaster recovery.',
        'Integrated GIT into Jenkins to automate the code check-out process.',
        'Used Maven as build tools on Java projects for the development of build artifacts on the source code.',
        'Automated the build and release management process including monitoring changes between releases.',
        'Hands on experience on JIRA for creating bug tickets, workflows, pulling reports from dashboard, creating and planning sprints.',
        'Documented the entire installation process for various tools and provided on-call support.',
        'Worked closely with developers to pinpoint and provide early warnings of common build failures.',
        'Provided periodic feedback of status and scheduling issues to the management'
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
    { category: 'Infrastructure as Code', value: 'Terraform, AWS CloudFormation' },
    { category: 'Containerization', value: 'Docker, Kubernetes, Docker-Swarm' },
    { category: 'Service Mesh', value: 'Istio' },
    { category: 'Monitoring', value: 'Splunk' },
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