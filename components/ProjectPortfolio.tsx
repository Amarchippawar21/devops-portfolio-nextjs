
"use client";

import { FaGithub } from "react-icons/fa";

const devopsProjects = [
  {
    title: "DevSecOps Pipeline",
    tech: ["Docker", "Jenkins", "Trivy"],
    image: "/project-images/devsecops.png",
    repo: "https://github.com/Amarchippawar21/devsecops-pipeline",
  },
  {
    title: "Linux Shell Scripting",
    tech: ["Linux", "Bash", "Shell"],
    image: "/project-images/linux.png",
    repo: "https://github.com/Amarchippawar21/linux-shell-scripting",
  },
  {
    title: "Docker Projects",
    tech: ["Docker", "Containers"],
    image: "/project-images/docker.png",
    repo: "https://github.com/Amarchippawar21/docker-projects",
  },
  {
    title: "Ansible Server Automation",
    tech: ["Ansible", "Linux"],
    image: "/project-images/ansible.png",
    repo: "https://github.com/Amarchippawar21/ansible-server-automation",
  },
  {
    title: "AWS Terraform Infrastructure",
    tech: ["AWS", "Terraform"],
    image: "/project-images/terraform.png",
    repo: "https://github.com/Amarchippawar21/aws-terraform-infrastructure",
  },
  {
    title: "CI/CD Jenkins Kubernetes",
    tech: ["Jenkins", "Docker", "Kubernetes"],
    image: "/project-images/jenkins.png",
    repo: "https://github.com/Amarchippawar21/devops-cicd-jenkins-kubernetes",
  },
];

const networkingProjects = [
  {
    title: "Multi Router Static Routing",
    tech: ["Routing", "Cisco"],
    image: "/project-images/network-routing.png",
    repo: "https://github.com/Amarchippawar21/multi-router-static-routing-network",
  },
  {
    title: "Enterprise Network Security",
    tech: ["ACL", "Packet Tracer"],
    image: "/project-images/enterprise-security.png",
    repo: "https://github.com/Amarchippawar21/enterprise-network-security-packet-tracer",
  },
  {
    title: "VLAN Network",
    tech: ["VLAN", "Switching"],
    image: "/project-images/vlan.png",
    repo: "https://github.com/Amarchippawar21/vlan-network-packet-tracer",
  },
  {
    title: "Basic Network",
    tech: ["Networking", "Cisco"],
    image: "/project-images/basic-network.png",
    repo: "https://github.com/Amarchippawar21/basic-network-packet-tracer",
  },
];

const analyticsProjects = [
  {
    title: "Data Analysis Projects",
    tech: ["Python", "SQL", "Power BI"],
    image: "/project-images/data-analysis.png",
    repo: "https://github.com/Amarchippawar21/data-analysis-projects",
  },
];

export default function GitHub() {
  return (
    <section
      id="github"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">GitHub</span>
        </h2>

        <div className="bg-slate-900 border border-slate-700 rounded-3xl p-10 mb-16">

          <div className="flex flex-col items-center text-center">

            <FaGithub className="text-8xl text-cyan-400 mb-6" />

            <h3 className="text-4xl font-bold">
              Amar Chippawar
            </h3>

            <p className="text-gray-400 mt-4">
              DevOps • Networking • Data Analytics • Cyber Security
            </p>

            <a
              href="https://github.com/Amarchippawar21"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 rounded-xl font-semibold transition"
            >
              Visit GitHub
            </a>

          </div>

        </div>

        {/* Part 2 starts here */}
        {/* DevOps Projects */}

<h3 className="text-4xl font-bold text-cyan-400 mb-10">
  💻 DevOps Projects
</h3>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
  {devopsProjects.map((project) => (
    <div
      key={project.title}
      className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h4 className="text-2xl font-bold mb-4">
          {project.title}
        </h4>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <span
              key={item}
              className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-cyan-500 hover:bg-cyan-600 text-black py-3 rounded-xl font-semibold transition"
        >
          View Repository
        </a>
      </div>
    </div>
  ))}
</div>

{/* Networking */}

<h3 className="text-4xl font-bold text-blue-400 mb-10">
  🌐 Networking Projects
</h3>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
  {networkingProjects.map((project) => (
    <div
      key={project.title}
      className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-400 hover:-translate-y-2 transition-all duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h4 className="text-2xl font-bold mb-4">
          {project.title}
        </h4>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <span
              key={item}
              className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
        >
          View Repository
        </a>
      </div>
    </div>
  ))}
</div>

{/* Data Analytics */}

<h3 className="text-4xl font-bold text-green-400 mb-10">
  📊 Data Analytics
</h3>

<div className="grid lg:grid-cols-2 gap-8">
  {analyticsProjects.map((project) => (
    <div
      key={project.title}
      className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-green-400 hover:-translate-y-2 transition-all duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h4 className="text-2xl font-bold mb-4">
          {project.title}
        </h4>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((item) => (
            <span
              key={item}
              className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-green-500 hover:bg-green-600 text-black py-3 rounded-xl font-semibold transition"
        >
          View Repository
        </a>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}