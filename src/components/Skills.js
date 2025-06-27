import React, { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
  return (
    <section id="skills" className="section" ref={ref}>
      <h2>Technical Skills</h2>
      <ul className="skills-list">
        <li><strong>Operating Systems:</strong> Linux (RedHat), Windows</li>
        <li><strong>Version Control:</strong> Git, GitHub</li>
        <li><strong>CI/CD:</strong> Jenkins, GitLab, GitHub Actions, Concourse</li>
        <li><strong>Cloud Platforms:</strong> AWS (EC2, VPC, ELB, S3, RDS, Route53, IAM, Lambda), Azure</li>
        <li><strong>Configuration Management:</strong> Ansible, Chef</li>
        <li><strong>Infrastructure as Code:</strong> Terraform, AWS CloudFormation</li>
        <li><strong>Containerization:</strong> Docker, Kubernetes, Docker-Swarm</li>
        <li><strong>Service Mesh:</strong> Istio</li>
        <li><strong>Monitoring:</strong> Splunk</li>
        <li><strong>Scripting:</strong> Bash/Shell, PowerShell</li>
        <li><strong>Project Management:</strong> JIRA</li>
        <li><strong>Methodologies:</strong> Agile, Scrum, SDLC</li>
      </ul>
    </section>
  );
});

export default Skills;