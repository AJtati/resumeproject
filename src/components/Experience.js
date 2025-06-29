import React, { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
  return (
    <section id="experience" className="section" ref={ref}>
      <h2>Work Experience</h2>

      <div className="job">
        <h3>DevOps Engineer</h3>
        <p className="text-muted">Sky Betting and Gaming (Flutter UKI) | June 2023 – Present</p>
        <ul>
          <li>Development and maintenance of CI/CD pipelines (Jenkins, GoCD, Concourse)</li>
          <li>Creation and maintenance of infrastructure for Free to Play products (AWS, Terraform)</li>
          <li>Part of support rota for any products within our remit, including out of hours (JIRA, PagerDuty)</li>
          <li>Deployment and maintenance of observability tools for use in AWS EKS platform (Helm, Terraform, Prometheus, Grafana, Alert manager)</li>
          <li>Various tooling migrations, including Chef to Cinc and AWS WAF to Cloudflare WAF</li>
          <li>Worked on migrations from concourse actions to GitHub actions</li>
          <li>Created a new test environment and deployed through pipelines</li>
          <li>Configured RDS instances and map more complex dependencies and identify network issues using Terraform.</li>
          <li>Created Docker images from scratch and customized and modified base images from existing environment configurations and maintaining the image repository for development teams.</li>
          <li>Worked on Lamda functions to fetch Ips of CloudFront and update them in s3 bucket policies</li>
          <li>Worked on Network Load Balancer (NLB) and target groups to establish connectivity with Amazon RDS using endpoint services. Additionally, deployed Lambda functions to monitor the RDS endpoint and dynamically update the target group with its IP addresses</li>
        </ul>
      </div>

      <div className="job">
        <h3>AWS DevOps Engineer</h3>
        <p className="text-muted">IBM Hyderabad | April 2021 – May 2023</p>
        <ul>
          <li>Developed microservice on boarding tools leveraging Python and Jenkins allowing for easy creation and maintenance of build jobs and Kubernetes deploy and services.</li>
          <li>Experience on Kubernetes based container deployments to create self-environments for dev teams and containerization of environments delivery for releases.</li>
          <li>Used Docker, Kubernetes to manage micro services for development of integration and continuous delivery.</li>
          <li>Worked on creating the Docker containers and Docker consoles for managing the application lifecycle. Worked on various Docker components like Docker Engine, Hub, Machine, Compose and Docker Registry.</li>
          <li>Focused on containerization and immutable infrastructure. Docker has been core to this experience, along with Kubernetes. Experienced in using Docker Swarm and deployed spring boot applications. Deployed Docker Engines in Virtualized Platforms for containerization of multiple apps.</li>
          <li>Created Docker images from scratch and customized and modified base images from existing environment configurations and maintaining the image repository for development teams.</li>
          <li>Created Ansible roles in YAML and defined tasks, variables, files, handlers and templates. Created inventory and configured the Ansible files for parallel deployment in Ansible for automating the Continuous delivery process</li>
          <li>Experience in managing Ansible Playbooks with Ansible roles. Used file module in Ansible playbook to copy and remove files on remote systems. Created inventory in Ansible for automating the continuous deployment.</li>
          <li>Used Ansible as Configuration management tool, to automate repetitive tasks, quickly deploy critical applications, manage change.</li>
          <li>Experience on Operations Management Suite, Power shell Scripts and ARM templates.</li>
          <li>I wrote the ansible playbooks which is the entry point for Ansible provisioning, where the automation is defined through tasks using YAML format. Run Ansible Scripts to provision Dev servers.</li>
          <li>Writing several Ansible Playbooks and Roles for provisioning the machines in different environments and converting the static playbooks into roles.</li>
          <li>Experience in using Ansible Tower, which provides an easy-to-use dashboard, and role-based access control, so that it is easier to allow individual teams access to use Ansible for their deployments.</li>
          <li>Written Ansible custom roles to provision infrastructure and to configure various application.</li>
          <li>Having experience in Code Scanning configuration and Optimization in Sonatype and VeraCode.</li>
          <li>Integration of Automated Build with Deployment Pipeline. Currently installed and clients to pick up the Build from Jenkins repository and deploy in target environments (Integration, QA, and Production).</li>
          <li>Using Terraform as a tool, Managed different infrastructure resources Cloud, VMware, Bare Metal Servers, and Docker containers.</li>
          <li>Worked with Docker and created Dockerfile and Docker-compose files to containerize CI/CD pipeline, created custom images and pushed it to Docker Hub.</li>
          <li>Using Terraform as a tool, Managed different infrastructure resources Cloud, VMware, Bare Metal Servers, and Docker containers.</li>
          <li>Used Terraform for building, changing, versioning infrastructure and collaborate the automation of Jenkins.</li>
          <li>Built the process by automating using JSON Templates and deploying it using the build and release pipeline in VSTS.</li>
          <li>Worked to set up Splunk to capture & analyze logs from various layers such as Load Balancers, Web servers and application servers.</li>
          <li>Used Splunk to monitor the system logs as well as notify the incident management system upon exceeding thresholds.</li>
          <li>Coordinated/assisted developers with establishing and applying appropriate branching, labeling/naming conventions using GIT source control also Analyze and resolve conflicts related to merging of source code for GIT.</li>
          <li>Exposure to configuration management policies along with automation of scripting using Bash/Shell scripting.</li>
          <li>Maintained JIRA for tracking and updating project defects and tasks ensuring successful completion of tasks in sprint.</li>
          <li>Have good understanding of Incident, Problem and Change management and have excellent troubleshooting, time management skills, ability to work independently or as part of a team.</li>
        </ul>
      </div>

      <div className="job">
        <h3>DevOps Engineer</h3>
        <p className="text-muted">Tech Mahindra Limited | Nov 2016 – March 2021</p>
        <ul>
          <li>Hands on experience with AWS Cloud services like EC2, VPC, S3, IAM, Route 53 and Lambda.</li>
          <li>Worked on S3 lifecycle policy, VPC migrations and Volumes encryptions.</li>
          <li>Created multi branch pipelines and automated build and deploys using Jenkins and Ansible.</li>
          <li>Integrated Git, Junit Testing and Selenium in continuous deployment.</li>
          <li>Automated Sensu server-client installation and also checks configuration using Ansible.</li>
          <li>Extensively used Terraform in AWS Virtual Private Cloud to setup and modify settings by interfacing with control layer.</li>
          <li>Used Terraform for building, changing, versioning infrastructure and collaborate the automation of Jenkins.</li>
          <li>Integrated Docker container orchestration framework using Kubernetes by creating PODS, config maps, deployments, replica sets &amp; nodes.</li>
          <li>Created Docker Images using Docker file & involved in designing and implementing micro-service solutions using container-based technologies (Docker and orchestration technologies, Docker-Swarm, Docker-Compose, Kubernetes)</li>
          <li>Expertise in Jenkins to drive all microservices builds out to the Docker registry and deployed to Kubernetes.</li>
          <li>Created certificates using AWS certificate manager and applied them across ELBs and EC2s.</li>
          <li>Set up both classic and application load balancers as per the requirements of the application teams.</li>
          <li>Used shared libraries across multiple Jenkins files to create re-usable codes.</li>
          <li>Integrated build/deploy pipelines with emails/Slack/MS Teams so that appropriate teams are notified on status.</li>
          <li>Automated creation of immutable infrastructure (EC2, VPC, ELB, Auto-Scaling etc.) using Terraform.</li>
          <li>Created PowerShell and Linux shell scripts to automate the housekeeping of the servers.</li>
          <li>Promoted builds across various environments such as sandbox, dev, sat, prod and DR.</li>
          <li>Docker registry and deploy to Docker Swarm cluster using Ansible.</li>
          <li>Maintained and managed Jenkins in terms of plugin management, user access, configuration management.</li>
          <li>Integrated Jenkins with AWS plugin so that the Jenkins slaves are online only when called, resulting in cost savings.</li>
          <li>Wrote docker files to automate database deployments on oracle Linux containers.</li>
          <li>Modeled and automated the End-to-End Continuous Integration/Deployment/Delivery pipeline which included building a Continuous Integration server utilizing tools like Jenkins, Nexus Artifactory, GIT.</li>
          <li>Used Nexus Artifactory as our external repository manager to store and retrieve the build artifacts.</li>
          <li>Coordinating the resources by working closely with Project Manager's for the release and Project Manager for all the Operational Projects. Coordinate with the Development, QA and IT Operations teams during deployments to ensure there are no Conflicts.</li>
          <li>Installed and administered various tools like Jenkins, Gitlab, Chef, Jfrog Artifactory and executed maintenance tasks such as creating users and groups.</li>
          <li>Experience in creating the company's DevOps strategy in a mix environment of Linux (RHEL, Ubuntu) servers along with creating and implementing a cloud strategy based on Amazon Web Services.</li>
          <li>Implemented a CI/CD pipeline involving GitLab, Jenkins, Chef and Selenium to complete the automation from commit to Deployment.</li>
          <li>Worked on ISTIO POC and single handedly implemented ISTIO in QA, Preprod and Prod clusters.</li>
          <li>Worked on S3 lifecycle policy, VPC migrations and Volumes encryptions.</li>
          <li>Responsible for design and maintenance of the GIT Repositories and performed all necessary day-to- day GIT support for projects.</li>
          <li>Created and Implemented branching & merging strategy with multiple branches.</li>
          <li>Participation and Contribution in periodic archiving and storage of the source code for disaster recovery.</li>
          <li>Integrated GIT into Jenkins to automate the code check-out process.</li>
          <li>Used Maven as build tools on Java projects for the development of build artifacts on the source code.</li>
          <li>Automated the build and release management process including monitoring changes between releases.</li>
          <li>Hands on experience on JIRA for creating bug tickets, workflows, pulling reports from dashboard, creating and planning sprints.</li>
          <li>Documented the entire installation process for various tools and provided on-call support.</li>
          <li>Worked closely with developers to pinpoint and provide early warnings of common build failures.</li>
          <li>Provided periodic feedback of status and scheduling issues to the management</li>
        </ul>
      </div>

      <div className="job">
        <h3>Environment:</h3>
        <p className="environment-list">Terraform, Ansible, Maven, GIT, Nexus, PowerShell, AWS, Jenkins, Docker, Gitlab, Jfrog Artifactory, Jira, Selenium, Windows, Redhat linux.</p>
      </div>
    </section>
  );
});

export default Experience;