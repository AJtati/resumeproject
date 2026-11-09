export const summary = 'DevOps and Platform Engineer with 8+ years of experience supporting, automating, and optimizing production deployments on AWS, Kubernetes, and hybrid cloud platforms. Experienced in CI/CD, Terraform, AWS CDK, Ansible, EKS operations, secure secrets management, and platform tooling migrations. Also builds cross-platform desktop media tools and full-stack cloud applications.';

export const experience = {
  title: 'Work Experience',
  jobs: [
    {
      title: 'Platform / DevOps Engineer',
      company: 'Flutter UK & Ireland (Sky Betting & Gaming)',
      location: 'Leeds, UK (Hybrid)',
      period: 'June 2023 – Present',
      tasks: [
        'Manage, deploy, and maintain multi-cluster AWS EKS infrastructure and CI/CD pipelines (Jenkins, GoCD, Concourse, GitHub Actions) supporting high-traffic Free to Play betting and gaming products.',
        'Executed multi-version in-place upgrades of production EKS clusters from v1.26 through v1.31; audited VPC CNI, CoreDNS, kube-proxy, EBS CSI, and Cluster Autoscaler compatibility with zero customer downtime.',
        'Migrated production worker node fleets from legacy EC2 Launch Configurations to Launch Templates on Amazon Linux 2023 with zero service disruption.',
        'Deployed and maintained EKS observability using Helm, Terraform, Prometheus, Grafana, and Alertmanager; participate in the out-of-hours on-call rota (PagerDuty, JIRA).',
        'Migrated platform tooling including Chef to Cinc, AWS WAF to Cloudflare WAF, and Concourse CI pipelines to GitHub Actions.',
        'Configured Amazon RDS and resolved network dependencies, including NLB-to-RDS connectivity through VPC Endpoint Services.',
        'Built Lambda functions to monitor RDS endpoints and update NLB target groups, and to update S3 policies using CloudFront IP ranges.',
        'Designed AWS CDK custom resources and Lambda automation to provision least-privilege MySQL users and store credentials in AWS Secrets Manager.',
        'Implemented secure pod access with IRSA and External Secrets Operator, replacing Vault and Kube2IAM integrations.',
        'Created and maintained Docker base images and centralized image repositories for product engineering squads.',
        'Evaluated an internal AI agent toolkit and reviewed its telemetry and supply-chain dependencies before rollout.'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'IBM',
      location: 'Remote / Hyderabad, India',
      period: 'April 2021 – May 2023',
      tasks: [
        'Built Python and Jenkins microservice onboarding tools to streamline build jobs and Kubernetes deployments.',
        'Managed Docker and Kubernetes deployments; authored Dockerfiles, Compose configurations, and Helm charts for CI/CD.',
        'Automated multi-environment infrastructure and configuration management with Terraform and Ansible Tower.',
        'Integrated Sonatype and Veracode scanning into pipelines for code quality and vulnerability analysis.',
        'Used Splunk dashboards for log analysis and proactive incident troubleshooting.',
        'Automated build and release tasks with Bash/Shell and JSON templates across VSTS and Git pipelines.',
        'Helped configure Kafka brokers, topics, schema registry, and Kafka Connect for internal projects.',
        'Supported Agile/Scrum delivery through JIRA, change management, troubleshooting, and DevOps guidance.'
      ]
    },
    {
      title: 'DevOps Engineer / Software Engineer',
      company: 'Tech Mahindra',
      location: 'Hyderabad, India',
      period: 'November 2016 – March 2021',
      tasks: [
        'Designed Jenkins CI/CD pipelines with Git, Maven, Selenium, and JUnit, reducing software release cycle times by 50%.',
        'Deployed AWS infrastructure across EC2, VPC, S3, IAM, Route 53, and Lambda; automated provisioning and Auto Scaling with Terraform and CloudFormation.',
        'Created reusable Jenkins shared libraries and Slack/Microsoft Teams build alerts.',
        'Built and orchestrated containerized services with Docker, Kubernetes, Docker Swarm, and Compose; automated deployments with Ansible.',
        'Configured Classic and Application Load Balancers with SSL/TLS certificates for highly available environments.',
        'Managed server provisioning and configuration with Ansible and Chef.',
        'Managed Git/GitLab workflows, branching strategies, merges, and developer support.',
        'Administered JFrog Artifactory and Sonatype Nexus repositories.',
        'Implemented Istio service mesh for traffic management, canary rollouts, and secure service communication.',
        'Wrote PowerShell and Linux shell automation for server housekeeping, backups, and health checks.',
        'Coordinated releases and troubleshooting with development, QA, and operations teams.',
        'Tracked bugs and sprints in JIRA, documented processes, and provided on-call support.'
      ]
    }
  ]
};

export const skillGroups = [
  ['Cloud infrastructure', 'AWS (EKS, EC2, VPC, RDS, Lambda, NLB/ALB, CloudFront, S3, IAM/IRSA, Route 53, Secrets Manager, SSM) · GCP · Azure'],
  ['Containers & orchestration', 'Kubernetes · Docker · Helm · ArgoCD · Argo Rollouts · Istio · ECR · Docker Compose'],
  ['Infrastructure as code', 'Terraform · AWS CDK (TypeScript) · Ansible · Ansible Tower · AWS CloudFormation'],
  ['CI/CD & automation', 'Jenkins · GitHub Actions · Concourse CI · GoCD · Git · VSTS · JFrog Artifactory · Nexus'],
  ['Observability & security', 'Prometheus · Grafana · Alertmanager · Splunk · Zabbix · CloudWatch · PagerDuty · Sonatype · Veracode · SonarQube · AWS WAF · Cloudflare WAF · External Secrets Operator'],
  ['Scripting & development', 'Python · Bash/Shell · PowerShell · TypeScript · Node.js · Next.js · React · SQL · FFmpeg'],
  ['Systems & delivery', 'Red Hat Linux · Windows · Git · GitHub · GitLab · Jira · Agile · Scrum · SDLC']
];
